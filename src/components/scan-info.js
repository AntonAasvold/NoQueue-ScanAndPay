import { LitElement, html, css } from 'lit-element';

export class ScanInfo extends LitElement {
  static get properties() {
    return {
      text: {type: String}
    };
  }

  constructor() {
    super();
    this.text = 'Scan the barcode on the item’s label.';
  }

  static get styles() {
    return css`
      #scan-info-container {
        width: 100vw;
        height: 120px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 1);

        font-family: HMSans-Bold;
        font-style: normal;
        font-size: 18px;

        color: rgba(34, 34, 34, 0.65); 
      }
      
      #text-container {
        width: 45vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
      }
    `;
  }

  render() {
    return html`
      <div id="scan-info-container">
        <div id="text-container">
        ${this.text}
        </div>
      </div>
    `;
  }

}

customElements.define('scan-info', ScanInfo);
