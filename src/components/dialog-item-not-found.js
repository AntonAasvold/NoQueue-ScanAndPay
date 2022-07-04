import { LitElement, html, css } from 'lit-element';

export class DialogItemNotFound extends LitElement {
  static get properties() {
    return {
      headerText: {type: String},
      bodyText: {type: String}
    };
  }

  constructor() {
    super();
    this.headerText = '';
    this.bodyText = '';
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
        font-family: HMSans-Bold;
        letter-spacing: 3px;
        font-size: 22pt;
        color: rgba(34, 34, 34, 1);
      }

      .body-text {
        font-family: HMSans-Bold;
        letter-spacing: 3px;
        font-size: 12pt;
        color: rgba(34, 34, 34, 1);
      }

      #ok-button {
        height: 50px;
        width: 80%;
        margin-top: 14px;
        margin-left: 5px;
        margin-right: 5px;
      }
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(34, 34, 34, 1);
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 0px;
        font-family: HMSans-SemiBold;
        font-size: 10pt;
        letter-spacing: 3px;
        color: rgba(255, 255, 255, 1);
      }
    `;
  }

  render() {
    return html`
      <div id="dialog-item-not-found">
        <p class="header-text">ITEM NOT FOUND</p>
        <br>
        <p class="body-text">We were unable to find your item. </p>
        <br>
        <br>
        <br>
        <button class="button" id="ok-button" @click="${this.buttonOkTapped}">OK</button>
        
      </div>
    `;
  }

  buttonOkTapped() {
    this.shadowRoot.dispatchEvent(new CustomEvent('hide-dialog-item-not-found', { bubbles: true, composed: true}));
  }

}

customElements.define('dialog-item-not-found', DialogItemNotFound);
