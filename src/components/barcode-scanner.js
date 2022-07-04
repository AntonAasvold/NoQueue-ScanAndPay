import { LitElement, html, css } from 'lit';
import store from '../redux/store.js';
import { updateAirLiftCart, updateAirLiftCartLineItems } from '../redux/airLiftSlice.js';

import { AirLiftAPIClient } from '../clients/airliftClient.js'
import { appSettings, getLocale } from '../appSettings.js';
import '../components/scan-info.js';
import { FacadeInstance } from '../clients/facade.js';
import { getGUID, getGtinFromBarcode, gs1FromBarcode } from '../utilities.js';
import { GS1Parser } from '../gs1-parser.js';  

import 'https://cdn.jsdelivr.net/npm/scandit-sdk@5.x';

export class ScannerView extends LitElement {

  constructor() {
    super();
    this.locale = getLocale().SCANNER_VIEW;
    this.threeBlockBarcode = ['', '', ''];
    this.airLift = store.getState().airlift;
    //console.log(this.airLift);
    this.AirLiftApiClient = new AirLiftAPIClient();
    this.barcodePickerHight;
    this.barcodePickerWidth
    this.demoItems = [];
  }

  firstUpdated() {
    store.subscribe(() => {
      //console.log("Cart Updated - Scanner View");
      this.airLift = store.getState().airlift;
    });

    const resizeObserver = new ResizeObserver(entries => {

      this.barcodePickerHight = entries[0].contentRect.height;
      this.barcodePickerWidth = entries[0].contentRect.width;

      const w = 70;
      const h = 70;
      const r = 13;
  
      let x = window.innerWidth / 2 - w / 2;
      let y;
      
      if (this.barcodePickerHight < window.innerHeight) {
        y = Math.floor(this.barcodePickerHight / 2 - w / 2 - window.innerHeight * 0.02);
      } else {
        y = Math.floor(this.barcodePickerHight / 2 - w / 2);
      }
      
      this.drawViewFinder(x, y, w, h, r);
    });
    
    resizeObserver.observe(this.shadowRoot.getElementById('scandit-barcode-picker'));


    const scanditBarcodePickerElement = this.shadowRoot.getElementById('scandit-barcode-picker');
    scanditBarcodePickerElement.addEventListener('scan', (ScanResult) => {

      this.shadowRoot.dispatchEvent(new CustomEvent('item-added-to-cart', { bubbles: true, composed: true}));
      const viewFinderCanvasElement = this.shadowRoot.getElementById('viewfinder-canvas');

      setTimeout(() =>
      viewFinderCanvasElement.style.visibility = "visible"
      , 1750);


      ScanResult.detail.barcodes.reduce( (string, barcode) => {
        // console.log(barcode);

        const tag = {
          symbology: barcode.symbology,
          data: ''
        }

        if ( barcode.symbology === "itf" ) {
          //console.log("Type: itf");
          tag.symbology = barcode.symbology;
          
          if( barcode.data.length < 13 ) {
            if( barcode.data.charAt(0) === 3 ) {
              // console.log("Barcode one read");
              this.threeBlockBarcode[0] = barcode.data;
            } else if ( barcode.data.charAt(0) ===  4) {
              // console.log("Barcode two read");
              this.threeBlockBarcode[1] = barcode.data;
            }
            else if ( barcode.data.charAt(0) ===  5 || barcode.data.charAt(0) ===  7 ) {
              // console.log("Barcode three read");
              this.threeBlockBarcode[2] = barcode.data;
            }

            if ( this.threeBlockBarcode[0] != '' && this.threeBlockBarcode[1] != '' && this.threeBlockBarcode[2] != '' ) {
              // console.log("Three block barcode scanned: " + this.threeBlockBarcode[0] + this.threeBlockBarcode[1] + this.threeBlockBarcode[2])
              tag.data = this.threeBlockBarcode.join('');
              this.barcodeScanned(tag);
              this.threeBlockBarcode = ['', '', ''];

            }
          } else {
            tag.data = barcode.data;
            this.barcodeScanned(tag);
          }
        
        } else if (barcode.symbology === "data-matrix") {
          //console.log("Type: data-matrix");
          this.barcodeScanned(barcode.data);
        } else if (barcode.symbology === "qr") {
          //console.log("Type: qr");
          tag.data = barcode.data;
          this.barcodeScanned(tag);

        } else if (barcode.symbology === "ean13") {
          //console.log("Type: ean13");
          tag.data = barcode.data;
          this.barcodeScanned(tag);
        }

      }, "")
    });
  }

  static get styles() {
    return [css`
      #barcode-picker-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      #scandit-barcode-picker {
        height: 100%;
        z-index: 31;
        justify-self: center;
      }

      #barcode-overlay-canvas {
        z-index: 132;
        position: absolute;
      }

      #viewfinder-canvas {
        z-index: 133;
        position: absolute;
      }
    `];
  }

  render() {
    return html`
    <canvas id="viewfinder-canvas"></canvas>
    <canvas  id="barcode-overlay-canvas"></canvas>

      <div id="barcode-picker-container">
        
        <scandit-barcode-picker 
          id="scandit-barcode-picker"
          configure.licenseKey="${ appSettings.SCANDIT_LICENSE_KEY }"
          configure.engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"
          playSoundOnScan="false"
          guiStyle="none"
          videoFit="cover"
          enableCameraSwitcher="false"
          scanSettings.codeDuplicateFilter="1500"
          scanSettings.enabledSymbologies='["ean13", "qr", "data-matrix", "itf"]'
          scanSettings.maxNumberOfCodesPerFrame="3"
          scanSettings.searchArea='{"x":0.2,"y":0.2,"width":0.6,"height":0.6}'
        >
        </scandit-barcode-picker>
      </div>
      
    `;
  }

  /* ---------------------------------------------------------------------------------------------------------------- */

  barcodeScanned(barcodeData) {
    this.shadowRoot.dispatchEvent(new CustomEvent('show-dialog-loading', { bubbles: true, composed: true }));

    if (!appSettings.DEMO_MODE) {

      console.log("BarcodeData: " + barcodeData);
      let gtin;
      GS1Parser(barcodeData).parsedCodeItems.forEach(parsedCodeItem => {
        if (parsedCodeItem.ai == "01")
        {
          gtin = parsedCodeItem.data;
        }
      });

      console.log("GTIN: " + gtin);

      this.AirLiftApiClient.addItemToCart(this.airLift.cart.CartId, gtin)
        .then(response => {
          console.log(response.Cart);
          store.dispatch(updateAirLiftCart(response.Cart));
        })
        .catch(error => {
          this.shadowRoot.dispatchEvent(new CustomEvent('show-dialog-item-not-found', { bubbles: true, composed: true }));
          console.log(error);
        })
        .finally(final => {
          setTimeout(() => {
            this.shadowRoot.dispatchEvent(new CustomEvent('hide-dialog-loading', { bubbles: true, composed: true }))
            this.shadowRoot.dispatchEvent(new CustomEvent('hide-barcode-scanner', { bubbles: true, composed: true }))
          }
            , 0);

        })

    } else {

      if (this.demoItems.length !== 0) {
        let index = Math.floor(Math.random() * (this.demoItems.length));
        
        setTimeout(() =>{
          this.shadowRoot.dispatchEvent(new CustomEvent('hide-dialog-loading', { bubbles: true, composed: true }))
          setTimeout(() => {
            store.dispatch(updateAirLiftCartLineItems(this.demoItems[index]));
          }, 500);
        }, 750);
      } else {
        fetch('../../assets/demo-items.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => {
          return response.json();
        })
        .then(items => {
          this.demoItems = [...items];
          let index = Math.floor(Math.random() * (this.demoItems.length));
          
          setTimeout(() => {
            this.shadowRoot.dispatchEvent(new CustomEvent('hide-dialog-loading', { bubbles: true, composed: true }))
            setTimeout(() => {
              store.dispatch(updateAirLiftCartLineItems(this.demoItems[index]));
            }, 750);
          }, 1000);
        });
      }

    }
  }

  drawViewFinder(x, y, w, h, r) {

    const viewFinderCanvasElement = this.shadowRoot.getElementById('viewfinder-canvas');
    viewFinderCanvasElement.width = window.innerWidth;
    viewFinderCanvasElement.height = window.innerHeight;
    const viewFinderContext = viewFinderCanvasElement.getContext('2d');

    viewFinderContext.beginPath();
    viewFinderContext.beginPath();
    viewFinderContext.moveTo(x+r, y);
    viewFinderContext.arcTo(x+w, y,   x+w, y+h, r);
    viewFinderContext.arcTo(x+w, y+h, x,   y+h, r);
    viewFinderContext.arcTo(x,   y+h, x,   y,   r);
    viewFinderContext.arcTo(x,   y,   x+w, y,   r);
    viewFinderContext.closePath();
    viewFinderContext.strokeStyle = "rgba(255, 255, 255, 1)";
    viewFinderContext.lineWidth = "3";
    viewFinderContext.stroke();

  }
}

customElements.define('barcode-scanner', ScannerView);