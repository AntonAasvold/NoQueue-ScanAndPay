import { LitElement, html, css } from 'lit-element';
import { getLocale } from '../appSettings.js';

class CartItem extends LitElement {
  
  static get properties() {
    return {
      articleId:          { type: String },
      color:              { type: String },
      name:               { type: String },
      description:        { type: String },
      itemPrice:          { type: String },
      itemPriceCurrency:  { type: String },
      itemDiscountPrice:  { type: String },
      imageUrl:           { type: String },
      imageMissing:       { type: String },
      size:               { type: String },
      itemId:             { type: String },
      hideCross:          { type: String },
      lineId:             { type: String },
      showSizeAndPrice:   { type: Boolean },
      hideSizeAndPrice:   { type: Boolean}
    };
  }

  constructor() {
    super();
    this.articleId = '';
    this.color = '';
    this.name = '';
    this.description = '';
    this.itemPrice = '';
    this.itemPriceCurrency = '';
    this.itemDiscountPrice = '';
    this.imageUrl = '';
    
    this.imageMissing = '';
    this.size = '';
    this.itemId = '';
    this.removedFromCart = '';
    this.lineId = '';
    this.showSizeAndPrice = true;
    this.hideSizeAndPrice = false;

    this.locale = getLocale().CART_ITEM;

  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      
      if (propName == "showSizeAndPrice" && oldValue) {
        this.hideSizeAndPrice = true;
/*
        this.shadowRoot.getElementById('cart-item-row-size').setAttribute("class" , "cart-item-row-size-hide")
        this.shadowRoot.getElementById('cart-item-row-price').setAttribute("class" , "cart-item-row-price-hide")
        
        setTimeout(() =>
          this.hideSizeAndPrice = true
        , 1000);
*/
      } else if (propName == "showSizeAndPrice" && !this.showSizeAndPrice) {
        this.hideSizeAndPrice = true;
      }

    });
  }

  static get styles() {
    return css`
      #cart-item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #cart-item-row-remove-item-from-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 10px;
      }

      #remove-item-cross {
        height: 12px;
        width: 12px;
      }

      #cart-item-row-image {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
      }

      #cart-item-image {
        max-width: 100%;
        border-radius: 2px;
      }

      #missing-item-image {
        max-width: calc(100% - 2px);
        border-radius: 2px;
        border: 1px solid rgba(83, 83, 83, 0.15);
      }

      .cart-item-row-size {
        display: flex;
        align-items: end;
        justify-content: center;
        font-family: HMSans-Regular;
        font-size: 12px;
        color: #222222;
        padding-top: 5px;
      }

      .cart-item-row-size-hide {
        display: flex;
        align-items: end;
        justify-content: center;
        font-family: HMSans-Regular;
        font-size: 12px;
        color: #222222;
        padding-top: 5px;

        animation: fadeout 1.0s;
        animation-fill-mode: forwards;
      }

      .cart-item-row-price {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: HMSans-Bold;
        font-size: 12px;
        color: #222222;
      }

      .cart-item-row-price-hide {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: HMSans-Bold;
        font-size: 12px;
        color: #222222;

        animation: fadeout 1.0s;
        animation-fill-mode: forwards;
      }

      @keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
      }

    `;
  }

  render(){
    return html`
      <div id="cart-item-container">

        <div id="cart-item-row-remove-item-from-cart">
          <img id="remove-item-cross" @click="${this.removeItemFromCart}" class="cart-item-button-remove" src="data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%3EFoundation%20%2F%20Icon%20%2F%2024%20%2F%20Control%20%2F%20Close%3C%2Ftitle%3E%3Cdefs%3E%3Cpath%20d%3D%22M12%2011.29L21.29%202l.71.71L12.71%2012%2022%2021.29l-.71.71L12%2012.71%202.71%2022%202%2021.29%2011.29%2012%202%202.71%202.71%202%2012%2011.29z%22%20id%3D%22prefix__a%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cuse%20fill%3D%22%23222%22%20xlink%3Ahref%3D%22%23prefix__a%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E">
        </div>

        <div id="cart-item-row-image">
          ${(this.imageUrl !== "") ?
              html`<img id="cart-item-image" src="${ this.imageUrl }">` :
              html`<img id="missing-item-image" src="data:image/png;base64,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p324huLWxyG3HXOoacC31b/qug7XhXjMRECAzKSRl9MIPx4fHR29atv26xumtvMbfNhGCKayLMPhsdvejKO3vVqtnve8YR5y2y+bpnk+9FvTFedwoVxf3VHbDq8x4M34YNsOwdS27ZNdTW6rOwTS+fl52ObgH+Vn9qc5y+kIkFm29T9v+vfu3bv4tPfx48f3+7qIMBx2ukqW67bDHIb+2N+3i1w32ee2w+Gye/fu/eOMrH3VPda2P378+DYmjPrc/X96AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQXECDpe6ACAgQIZCkgQLJsm6IJECCQXkCApO+BCggQIJClgADJsm2KJkCAQHoBAZK+ByogQIBAlgICJMu2KZoAAQLpBQRI+h6ogAABAlkKCJAs26ZoAgQIpBcQIOl7oAICBAhkKSBAsmybogkQIJBeQICk74EKCBAgkKWAAMmybYomQIBAegEBkr4HKiBAgECWAgIky7YpmgABAukFBEj6HqiAAAECWQoIkCzbpmgCBAikFxAg6XugAgIECGQpIECybJuiCRAgkF5AgKTvgQoIECCQpYAAybJtiiZAgEB6AQGSvgcqIECAQJYCAiTLtimaAAEC6QUESPoeqIAAAQJZCgiQLNumaAIECKQX+H9tUewrxqU5dwAAAABJRU5ErkJggg==">`}      
        </div>

        ${(this.hideSizeAndPrice) ?
          html`` :  
          html`
           <div id="cart-item-row-size" class="cart-item-row-size">
              ${ this.locale.SIZE_LABLE } ${ this.size }
            </div>
            <div id="cart-item-row-price" class="cart-item-row-price">
            ${ this.itemPrice } ${ this.locale.CURRENCY_LABLE }
          </div>`}  

      </div>

    `;
  }

  /* ---------------------------------------------------------------------------------------------------------------- */

  removeItemFromCart(event) {
    this.shadowRoot.dispatchEvent(new CustomEvent('delete-item-from-cart', { bubbles: true, composed: true, detail: {lineId: this.lineId} }));
  }
}
customElements.define('cart-item', CartItem);
