import { LitElement, html, css } from 'lit';
import { appStyles } from '../app-style.js';
import store from '../redux/store.js';
import './cart-item-container.js';


export class CartDrawer extends LitElement {

  static get properties() {
    return {
      itemsInCart: {type: Number}
    };
  }

  constructor() {
    super();
    this.itemsInCart = 0;
    this.amountToPay = 0;
  }

  firstUpdated() {
    store.subscribe(() => {
      if(typeof store.getState().airlift.cart !== null) {
        this.itemsInCart = store.getState().airlift.cart.LineItems.length;
        this.amountToPay = store.getState().airlift.cart.Totals.TotalAmount;
      }
    });
  }
  
  static get styles() {
    return [
      appStyles,
      css`
        #cart-drawer {
          width: 100vw;
          height: 50vh;
          position: relative;
          overflow: hidden;

          display: flex;
          flex-direction: column;
          justify-content: center;
          
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
        }

        #cart-body {
          height: 80%;
          padding-top: 20px;
          padding-left: 15%;
          padding-right: 15%;
          padding-bottom: 10px;
          overflow-y: hidden;
        }

        #cart-footer {
          width: 100%;
          height: 20%;
          padding-bottom: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
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

        #cart-pay-button {
          width: 220px;
          height: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          background-color: #222220;

          font-family: HMSans-Bold;
          font-size: 14px;
          color: #ffffff;
        }
    `
    ]
  }

  handlePayClick() {
    console.log('Pay clicked');
    this.shadowRoot.dispatchEvent(new CustomEvent('show-payment-options', { bubbles: true, composed: true }))
  }

  render() {
    return html`
      <div id="cart-drawer">
        <div id="cart-body">
          <cart-item-container></cart-item-container>
        </div>

        <div id="cart-footer">
          <div id="cart-item-count">${this.itemsInCart} items</div>
          <div id="cart-pay-button"  @click=${this.handlePayClick}>Pay ${this.amountToPay.toFixed(2)} kr</div>
        </div>

      </div>
    `;
  }

}

customElements.define('cart-drawer', CartDrawer);
