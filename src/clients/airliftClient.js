import { appSettings, getApiURL } from '../appSettings.js';

export class AirLiftAPIClient {

  constructor() {
    this.baseURL = getApiURL();
  }

  httpResponseException(name, httpStatus, httpStatusCode) {
    this.name = name;
    this.http_status = httpStatus;
    this.http_status_code = httpStatusCode;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */
  /* Airlift API - Cart Operations */

  /* ------------------------------------------------------------------------------------------ */
  // Create Cart - POST /cart
  async creatNewCart(data) {
    const URL = `${this.baseURL}/api/v1/carts`;

    console.log(data);

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    });
  
    if (response.status !== 200) {
      throw new httpResponseException('Createing new cart faild!', response.statusText, response.status);
    }
  
    return await response.json();
  }


  /* ------------------------------------------------------------------------------------------ */
  // Add new item to existing cart by cartId - POST /cart/{cartId}
  async addItemToCart(cartId, barcodeData) {
    const URL = `${this.baseURL}/api/v1/carts/${cartId}/items`;
    console.log(URL);

    const item = {
      ItemIdentity: {
        EntryMethod: 'SCANNED',
        Identifier: barcodeData,
        IdentifierType: 'GTIN'
      }
    }

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(item)
    });

    if (response.status === 404) {
      throw new Error(`404 response received, ${JSON.stringify(await response.json())}`);
    }
  
    if (!response.ok) {
      throw new Error(`Unable to add item to cart! ${response.statusText}, ${response.status}`);
    }
    return await response.json();
  }


  /* ------------------------------------------------------------------------------------------ */
  // Add tender to existing cart by cartId - POST /cart/{cartId}
  async addTenderToCart(cartId, item) {
    const URL = `${this.baseURL  }/cart/${  cartId}`;

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(item)
    });
  
    if (response.status !== 200) {
      throw new httpResponseException('Unable to add tender to cart!', response.statusText, response.status);
    }
  
    return await response.json();
  }


  /* ------------------------------------------------------------------------------------------ */
  // Delete item from cart by cartId and imageMissingUrl - DELETE /cart/{cartId}/{itemId}
  async deleteItemFromCart(cartId, itemId) {


    const URL = `${this.baseURL  }/cart/${  cartId  }/${  itemId}`;
    console.log(URL);

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    });
  
    if (response.status !== 200) {
      throw new httpResponseException('Deleting item from cart failed!', response.statusText, response.status);
    }
  
    return await response.json();
  }


  /* ------------------------------------------------------------------------------------------ */
  // Get existing cart by cartId - GET /cart/{cartId}
  async getCart(cartId) {
    const URL = `${this.baseURL  }/cart/${  cartId}`;

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    });
  
    if (response.status !== 200) {
      throw new httpResponseException('Failed to get cart', response.statusText, response.status);
    }
  
    return await response.json();
  }


  /* ------------------------------------------------------------------------------------------ */
  // Checkout cart by cartId - POST /checkout/{cartId}
  async checkoutCart(cartId, item) {
    const URL = `${this.baseURL  }/checkout/${  cartId}`;

    const response = await fetch(URL,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(item)
    });
  
    if (response.status !== 200) {
      throw new httpResponseException('Unable to checkout cart', response.statusText, response.status);
    }
  
    return await response.json();
  }
  
} 