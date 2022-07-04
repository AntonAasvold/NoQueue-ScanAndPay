import { LitElement, html, css } from 'lit';
import { appStyles } from '../app-style.js';
import './cart-item-container.js';
import { FacadeInstance } from '../clients/facade.js';
import store from '../redux/store.js';
import './payment-item-container.js';

export class PaymentDrawer extends LitElement {

  static get properties() {
    return {

    };
  }

  constructor() {
    super();
    this.cartToPay = null;
    this.itemsInCart = 0;
  }

  firstUpdated() {
    store.subscribe(() => {
      this.cart = store.getState().airlift.cart;
      if (store.getState().airlift.cart.LineItems.length > 0) {
        this.itemsInCart = store.getState().airlift.cart.LineItems.length;
      }
    });

  }

  handlePayWithKlarnaClick() {
    console.log('Pay clicked');
    FacadeInstance.getCheckoutSnippet().then(htmlSnippet => {

      var checkoutContainer = document.getElementById('payment-container')
      var checkoutParentContainer = document.getElementById('payment-outer-container')
      checkoutParentContainer.style.visibility = 'visible'
      checkoutContainer.innerHTML = htmlSnippet
      var scriptsTags = checkoutContainer.getElementsByTagName('script')
      // This is necessary otherwise the scripts tags are not going to be evaluated
      for (var i = 0; i < scriptsTags.length; i++) {
        var parentNode = scriptsTags[i].parentNode
        var newScriptTag = document.createElement('script')
        newScriptTag.type = 'text/javascript'
        newScriptTag.text = scriptsTags[i].text
        parentNode.removeChild(scriptsTags[i])
        parentNode.appendChild(newScriptTag)
      }
    });
  }
  
  static get styles() {
    return [
      appStyles, 
      css`
        #payment-drawer {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;

          background-color: rgba(255, 255, 255, 1);
        }

        #payment-body {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-items: center;
        }

        #cart-item-count {
          height: 40px;
          font-family: HMSans-Regular;
          font-size: 14px;
          color: #222220;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
        }
      `
    ]
  }

  render() {
    return html`
      <div id="payment-drawer">
        <div id="payment-body">

          <payment-item-container showSizeAndPrice="${false}"></payment-item-container>

          <div id="cart-item-count">${this.itemsInCart} items</div>
          <br>
          <button id="swish-button" class="button-wide">Swish</button>
          <br>
          <button id="klarna-button" class="button-wide" @click=${this.handlePayWithKlarnaClick}>Klarna</button>
          <br>
          <button id="apple-pay-button" class="button-wide">Apple Pay</button>
          <br>

      </div>
      </div>
    `;
  }
}

customElements.define('payment-drawer', PaymentDrawer);
