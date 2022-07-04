export class PaymentAPIClient {

  constructor() {
    this.baseURL = 'https://airlift-hackathon.azurewebsites.net';
    // this.baseURL = 'https://localhost:7299';
  }

  /* ------------------------------------------------------------------------------------------------------------------ */
  /* Payment API's  */

  /* ------------------------------------------------------------------------------------------ */
  // Create Cart - POST /cart
  async getKlarnaCheckoutSnippet(data) {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const URL = `${this.baseURL  }/api/klarna/createorder?baseUrl=${encodeURIComponent(baseUrl)}`;
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
      throw {
        name: 'Unable to generate Klarna snippet!',
        http_status: response.statusText ,
        http_status_code: response.status
      }
    }
  
    return await response.json();
  }

  async getKlarnaConfirmation(orderId) {
    const URL = `${this.baseURL  }/api/klarna/readorder/${orderId}`;

    const response = await fetch(URL);

    if (response.status !== 200) {
      throw {
        name: 'Unable to generate Klarna snippet!',
        http_status: response.statusText ,
        http_status_code: response.status
      }
    }
  
    return await response.json();
  }
  
} 