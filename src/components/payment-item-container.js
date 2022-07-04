import { LitElement, html, css } from 'lit';
import store from '../redux/store.js';
import { getLocale } from '../appSettings.js';

import './payment-item.js';

export class PaymentItemContainer extends LitElement {

  static get properties() {
    return {
      lineItems: { type: Array },
      showSizeAndPrice: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.locale =  getLocale().CART_VIEW;
    this.cart = null;
    this.lineItems = [];
    this.showSizeAndPrice = true;
    this.cartItemContainerElementInitialHight;
  }

  firstUpdated() {
    this.cartItemContainerElementInitialHight = this.shadowRoot.getElementById('payment-item-container').scrollHeight;
    store.subscribe(() => {
      this.cart = store.getState().airlift.cart;
      if (store.getState().airlift.cart.LineItems.length > 0) {
        console.log(store.getState().airlift.cart.LineItems);
        this.lineItems = store.getState().airlift.cart.LineItems;
      }
    });

    var config = {
      attributes: false,
      childList: true,
      subtree: false
    };


    var observer = new MutationObserver(entries => {

      let cartItemElements = this.shadowRoot.querySelectorAll('payment-item');
      let cartItemContainerElement = this.shadowRoot.getElementById('payment-item-container');
     
        setTimeout(() => {
          if (this.cartItemContainerElementInitialHight < cartItemContainerElement.scrollHeight) {
            cartItemContainerElement.scrollTop = cartItemContainerElement.scrollHeight;
          }
        }, 1500);


      if (entries[0].target.childElementCount > 4) {
        cartItemElements.forEach(cartItem => {
          if(cartItem.showSizeAndPrice === true) {
            cartItem.showSizeAndPrice = false;
          }
        })
        this.showSizeAndPrice = false;
      }

      if ( cartItemContainerElement.childElementCount > 8) {
        cartItemElements.forEach(cartItem => {
          cartItem.setAttribute("class", "payment-item-medium");
        })
      }

    });

    observer.observe(this.shadowRoot.getElementById('payment-item-container'), config);


    this.shadowRoot.addEventListener('delete-item-from-cart', (event) => {
      // console.log('delete-item-from-cart event caught');
      this.removeItemFromContainer(this.airLiftCart.cart.cartId, event.detail.lineId);
    });

    this.shadowRoot.addEventListener('update-cart', (event) => {
      //console.log("update-cart even caught");
      // this.updateCart("7bee673b-78df-4ac8-a0bc-0e08e607887f");
    })

    this.appHeaderElement = this.shadowRoot.getElementById('app-header');
  }
  
  static get styles() {
    return css`
      #payment-item-container {
        width: 100%;
        height: 100%;
        gap:10px;

        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        scroll-behavior: smooth;
      }

      #payment-item-container::-webkit-scrollbar { 
        display: none;
      }

      .payment-item-large {
        flex-basis: 20%;
        width: 65px;
        animation: fadein 1.1s;
      }

      .payment-item-medium {
        //flex-basis: 16%;
        animation: fadein 1.0s;
        animation: shrink 1.0s;
        animation-fill-mode: forwards; 
      }

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      @keyframes shrink {
        from { flex-basis: 20%;}
        to { flex-basis: 16%; }
      }

    `;
  }

  render() {
    return html`
      <div id="payment-item-container">
        ${this.lineItems.map(item => html`
          <payment-item
            imageurl="${ item.SaleReturnItem.ImgURL }" 
            name="${ item.SaleReturnItem.Description }" 
            itemprice="${ item.SaleReturnItem.ActualSalesUnitPrice }" 
            itemdiscountprice="" 
            itempricecurrency="SEK" 
            productid="0368300015" 
            color="${ item.SaleReturnItem.Color.Description }" 
            size="${ item.SaleReturnItem.Size.Description }" 
            gtin="${ item.SaleReturnItem.ItemId }" 
            guid="${ item.LineId }" 
            class="payment-item-large"
            .showSizeAndPrice="${ this.showSizeAndPrice }"
          ></payment-item>
        `)}
      </div>
    `;
  }

}

customElements.define('payment-item-container', PaymentItemContainer);