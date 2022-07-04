import { LitElement, html, css } from 'lit-element';

export class DialogItemAlreadyInCart extends LitElement {
  static get properties() {
    return {
      headerText: { type: String },
      bodyText: { type: String },
    };
  }

  constructor() {
    super();
    this.headerText = '';
    this.bodyText = '';
  }

  buttonOkTapped() {
    this.dispatchEvent(
      new CustomEvent('hide-dialog', { bubbles: true, composed: true })
    );
  }

  static get styles() {
    return css`
      #dialog-item-not-found {
        width: calc(100vw - 0px);
        height: calc(100vh - 0px);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.85);
      }

      .header-text {
        font-family: HMAmpersand-Bold;
        letter-spacing: 3px;
        font-size: 20pt;
        color: rgba(34, 34, 34, 1);
      }

      .body-text {
        font-family: HMAmpersand-Bold;
        letter-spacing: 3px;
        font-size: 12pt;
        color: rgba(34, 34, 34, 1);
      }

      paper-button {
        background-color: rgba(34, 34, 34, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: HMAmpersand-DemiBold;
        letter-spacing: 3px;
        font-size: 20pt;
        color: rgba(255, 255, 255, 1);
      }
    `;
  }

  render() {
    return html`
      <div id="dialog-item-not-found">
        <p class="header-text">ALREADY IN BAG</p>
        <br />
        <p class="body-text">Scanned item is already in bag.</p>
        <br />
        <br />
        <br />
        <button @click="${this.buttonOkTapped}">OK</button>
      </div>
    `;
  }
}

customElements.define('dialog-item-already-in-cart', DialogItemAlreadyInCart);
