import { AirLiftAPIClient } from './airliftClient';
import { PaymentAPIClient } from './paymentClient';
import store from '../redux/store.js';

class Facade {
    airliftClient = new AirLiftAPIClient();
    paymentClient = new PaymentAPIClient();
    createdCart = null;
    orderId = null;

    async initialize(items) {
        const cartShell = {
            "MetaData": {
                "Brand": "Hm",
                "Market": "DK",
                "Locale": "da-DK",
                "Currency": "DKK",
                "TestFlag": true
            },
            "StoreContext": {
                "BusinessUnitId": "DK0817",
                "TillId": "604",
                "OperatorId": "1337"
            },
            "CartContext": "Isac"
        };

        this.createdCart = await this.airliftClient.creatNewCart(cartShell);

        if (typeof items !== 'undefined') {
          for(let i = 0; i < items.length; i++) {
              const item = items[i];

              console.log('Adding item', item);
              try {
                  this.createdCart = await this.airliftClient.addItemToCart(this.createdCart.Cart.CartId, item);
                  console.log('Added item', item, this.createdCart);
              } catch (e) {
                  console.error('Could not add item to cart', item, e);
              }
          }
        }

        return this.createdCart.Cart;
    }

    async getCheckoutSnippet() {
        let cartToPay = store.getState().airlift.cart;
        console.log(cartToPay);
        const checkoutResult = await this.paymentClient.getKlarnaCheckoutSnippet(cartToPay);

        this.orderId = checkoutResult.orderId;

        return checkoutResult.htmlSnippet;
    }

    async getConfirmationSnippet() {
        const confirmation = await this.paymentClient.getKlarnaConfirmation(this.orderId);

        return confirmation.htmlSnippet;
    }
}
export const FacadeInstance = new Facade();
