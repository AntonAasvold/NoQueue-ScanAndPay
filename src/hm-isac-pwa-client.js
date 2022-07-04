import { LitElement, html, css } from 'lit';
import store from './redux/store.js';
import { updateAirLiftCart } from './redux/airLiftSlice.js';

import { appSettings, getLocale } from './appSettings.js';

import './components/dialog-loading.js';
import './components/dialog-item-not-found.js';
import './components/dialog-item-already-in-cart.js';

import './components/barcode-scanner.js';
import './components/scan-info.js';
import './components/cart-drawer.js';
import './components/payment-drawer.js';

import { FacadeInstance } from './clients/facade.js';

export class HmIsacPwaClient extends LitElement {

  constructor() {
    super();  
    this.bottomDrawerOpen = false;
  }

  firstUpdated() {
    const cartDrawerElement = this.shadowRoot.getElementById('cart-drawer');
    const scanInfoElement = this.shadowRoot.getElementById('scan-info');
    const scannerViewElement = this.shadowRoot.getElementById('barcode-scanner');

    this.shadowRoot.addEventListener('item-added-to-cart', (event) => {
      console.log('item-added-to-cart event caught');
      if (!this.bottomDrawerOpen) {

        scanInfoElement.setAttribute("class" , "scan-info-hidden");

        setTimeout(() => {
          cartDrawerElement.classList.toggle('show');
          scannerViewElement.classList.toggle('small');
          this.bottomDrawerOpen = true;
        }
        , 1000);
        
      }
    });

    /* ------------------------------------------------------------------------------------ */
    /* Loading dialog */
    this.shadowRoot.addEventListener('show-dialog-loading', (event) => {
      console.log('show-dialog-loading event caught');
      this.shadowRoot.getElementById('dialog-loading').style.visibility = 'visible';
    });

    this.shadowRoot.addEventListener('hide-dialog-loading', (event) => {
      console.log('hide-dialog-loading event caught');
      this.shadowRoot.getElementById('dialog-loading').style.visibility = 'hidden';
    });

    /* ------------------------------------------------------------------------------------ */
    /* Loading dialog */
    this.shadowRoot.addEventListener('show-dialog-item-not-found', (event) => {
      console.log('show-dialog-item-not-found event caught');
      this.shadowRoot.getElementById('dialog-item-not-found').style.visibility = 'visible';
    });

    this.shadowRoot.addEventListener('hide-dialog-item-not-found', (event) => {
      console.log('hide-dialog-item-not-found event caught');
      this.shadowRoot.getElementById('dialog-item-not-found').style.visibility = 'hidden';
    });

    /* ------------------------------------------------------------------------------------ */
    /* Show / Hide payment options */
    this.shadowRoot.addEventListener('show-payment-options', (event) => {
      console.log('show-payment-options event caught');
      this.shadowRoot.getElementById('payment-drawer').style.visibility = 'visible';
    });

    this.shadowRoot.addEventListener('hide-payment-options', (event) => {
      console.log('hide-payment-options event caught');
      this.shadowRoot.getElementById('payment-drawer').style.visibility = 'hidden';
    });

/*
    FacadeInstance.initialize()
      .then(cart => {
        store.dispatch(updateAirLiftCart(cart));
      });
*/
  }

  static get styles() {
    return css`
      #dialog-loading {
        z-index: 201;
        visibility: hidden;
        position: absolute;
      }

      #dialog-item-not-found {
        z-index: 202;
        visibility: hidden;
        position: absolute;
      }

      #dialog-item-already-in-cart {
        z-index: 203;
        visibility: hidden;
        position: absolute;
      }

      #barcode-scanner {
        z-index: 100;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        visibility: visible;
        position: fixed;
      }

      #barcode-scanner.small {
        z-index: 100;
        width: 100vw;
        height: 55vh;
        overflow: hidden;
        visibility: visible;
        position: fixed;
        transition: all 1s;
      }

      .scan-info {
        z-index: 110;
        visibility: visible;
        position: fixed;
        bottom: 0;
      }

      .scan-info-hidden {
        z-index: 110;
        visibility: visible;
        position: fixed;
        bottom: 0;
        animation: fadeout 1.0s;
        animation-fill-mode: forwards; 
      }

      #cart-drawer {
        z-index: 120;
        bottom: -50vh;
        height: 0;
        opacity: 1;
      }

      #cart-drawer.show {
        z-index: 120;
        opacity: 1;
        position: fixed;
        width: 100%;
        height: 50vh;
        bottom: 0;
        overflow: hidden;
        transition: all 1s;
      }

      #payment-drawer {
        z-index: 130;
        bottom: -100vh;
        height: 0;
        opacity: 1;
        visibility: hidden;
      }

      #payment-drawer.show {
        z-index: 130;
        opacity: 1;
        position: fixed;
        width: 100%;
        height: 100vh;
        bottom: 0;
        overflow: hidden;
        transition: all 1s;
      }

      @keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
      }
    `;
  }

  render() {
    return html`
      <dialog-loading id="dialog-loading"></dialog-loading>
      <dialog-item-not-found id="dialog-item-not-found"></dialog-item-not-found>
      <dialog-item-already-in-cart id="dialog-item-already-in-cart"></dialog-item-already-in-cart>

      <barcode-scanner id="barcode-scanner"></barcode-scanner>
      <scan-info id="scan-info" class="scan-info"></scan-info>
      <cart-drawer id="cart-drawer"></cart-drawer>
      <payment-drawer id="payment-drawer" class="show"></payment-drawer>
    `;
  }
}

customElements.define('hm-isac-pwa-client', HmIsacPwaClient);
