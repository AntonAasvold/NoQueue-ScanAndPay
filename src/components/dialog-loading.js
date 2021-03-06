import { LitElement, html, css } from 'lit-element';

export class DialogLoading extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      .loader-container {
        width: calc(100vw - 0px);
        height: calc(100vh - 0px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px;
        background-color: rgba(255, 255, 255, 0.95);
      }

      .st0 {
        fill:#222222;
      }
      
      .st1 {
        display:none;
      }

      .st2 {
        display:inline;
      }


      .tshirt {
        display: inline-block;
        position: relative;
        width: 150px;
        height: 150px;
      }

      .tshirt-loader { animation: tshirt-animation 2.25s linear infinite; }
      .tshirt-loader:nth-child(1) { animation-delay: 0s; }
      .tshirt-loader:nth-child(2) { animation-delay: -0.05s; }
      .tshirt-loader:nth-child(3) { animation-delay: -0.10s; }
      .tshirt-loader:nth-child(4) { animation-delay: -0.15s; }
      .tshirt-loader:nth-child(5) { animation-delay: -0.20s; }
      .tshirt-loader:nth-child(6) { animation-delay: -0.25s; }
      .tshirt-loader:nth-child(7) { animation-delay: -0.30s; }
      .tshirt-loader:nth-child(8) { animation-delay: -0.35s; }
      .tshirt-loader:nth-child(9) { animation-delay: -0.40s; }
      .tshirt-loader:nth-child(10) { animation-delay: -0.45s; }
      .tshirt-loader:nth-child(11) { animation-delay: -0.50s; }
      .tshirt-loader:nth-child(12) { animation-delay: -0.55s; }
      .tshirt-loader:nth-child(13) { animation-delay: -0.60s; }
      .tshirt-loader:nth-child(14) { animation-delay: -0.65s; }
      .tshirt-loader:nth-child(15) { animation-delay: -0.70s; }
      .tshirt-loader:nth-child(16) { animation-delay: -0.75s; }
      .tshirt-loader:nth-child(17) { animation-delay: -0.80s; }
      .tshirt-loader:nth-child(18) { animation-delay: -0.85s; }
      .tshirt-loader:nth-child(19) { animation-delay: -0.90s; }
      .tshirt-loader:nth-child(20) { animation-delay: -1.00s; }
      .tshirt-loader:nth-child(21) { animation-delay: -1.05s; }
      .tshirt-loader:nth-child(22) { animation-delay: -1.10s; }
      .tshirt-loader:nth-child(23) { animation-delay: -1.15s; }
      .tshirt-loader:nth-child(24) { animation-delay: -1.20s; }
      .tshirt-loader:nth-child(25) { animation-delay: -1.25s; }
      .tshirt-loader:nth-child(26) { animation-delay: -1.30s; }
      .tshirt-loader:nth-child(27) { animation-delay: -1.35s; }
      .tshirt-loader:nth-child(28) { animation-delay: -1.40s; }
      .tshirt-loader:nth-child(29) { animation-delay: -1.45s; }
      .tshirt-loader:nth-child(30) { animation-delay: -1.50s; }
      .tshirt-loader:nth-child(31) { animation-delay: -1.55s; }
      .tshirt-loader:nth-child(32) { animation-delay: -1.60s; }
      .tshirt-loader:nth-child(33) { animation-delay: -1.65s; }
      .tshirt-loader:nth-child(34) { animation-delay: -1.70s; }
      .tshirt-loader:nth-child(35) { animation-delay: -1.75s; }
      .tshirt-loader:nth-child(36) { animation-delay: -1.80s; }
      .tshirt-loader:nth-child(37) { animation-delay: -1.85s; }
      .tshirt-loader:nth-child(38) { animation-delay: -1.90s; }
      .tshirt-loader:nth-child(39) { animation-delay: -1.95s; }
      .tshirt-loader:nth-child(40) { animation-delay: -2.00s; }
      .tshirt-loader:nth-child(41) { animation-delay: -2.05s; }
      .tshirt-loader:nth-child(42) { animation-delay: -2.10s; }
      .tshirt-loader:nth-child(43) { animation-delay: -2.15s; }
      .tshirt-loader:nth-child(44) { animation-delay: -2.20s; }
      .tshirt-loader:nth-child(45) { animation-delay: -2.25s; }

      @keyframes tshirt-animation {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="loader-container">
      <svg class="tshirt" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 77 63" xml:space="preserve">
        <g class="tshirt-loader">
          <path class="st0" d="M5.3,26c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L5.3,26z"/>
          <path class="st0" d="M4.5,28c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L4.5,28z"/>
          <rect x="3.9" y="26.5" transform="matrix(0.7164 -0.6977 0.6977 0.7164 -17.4499 11.0743)" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M8.8,31l-0.7,0.7c0.4,0.4,0.9,0.4,1.4,0.1L8.8,31z"/>
          <path class="st0" d="M9.2,30c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L9.2,30z"/>
          <path class="st0" d="M9.8,31.4c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L9.8,31.4z"/>
          <rect x="7.6" y="30.6" transform="matrix(0.7163 -0.6978 0.6978 0.7163 -19.0668 14.7689)" class="st0" width="2" height="0.5"/>
          <rect x="8.7" y="29.8" transform="matrix(0.7727 -0.6348 0.6348 0.7727 -17.5274 12.7181)" class="st0" width="0.5" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M12.6,26.6c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L12.6,26.6z"/>
          <path class="st0" d="M14.7,27.4c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L14.7,27.4z"/>
          <rect x="13.1" y="26" transform="matrix(0.7728 -0.6347 0.6347 0.7728 -14.0324 14.8073)" class="st0" width="1.1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M18.5,23h1c0-0.4-0.2-0.7-0.6-0.9c-0.3-0.2-0.8-0.1-1.1,0.1L18.5,23z"/>
          <path class="st0" d="M17.5,22.6c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L17.5,22.6z"/>
          <path class="st0" d="M17.5,23.5c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="18.1" y="22.2" transform="matrix(0.7728 -0.6346 0.6346 0.7728 -10.5379 16.8946)" class="st0" width="0.5" height="2"/>
          <rect x="17.5" y="23" class="st0" width="2" height="0.5"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,28.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,29c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="28.1" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,33.7c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,34.6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="33.7" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,39.3c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,40.2c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="39.3" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,44.8c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,45.8c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="44.8" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,50.4c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,51.3c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="50.4" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,56c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M17.5,56.9c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1H17.5z"/>
          <rect x="17.5" y="56" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M18.5,62h-1c0,0.6,0.4,1,1,1V62z"/>
          <path class="st0" d="M19.5,61.5c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1H19.5z"/>
          <path class="st0" d="M19,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="17.5" y="61.5" class="st0" width="2" height="0.5"/>
          <rect x="18.5" y="61" class="st0" width="0.5" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M23.8,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M24.7,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="23.8" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M29.5,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M30.4,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="29.5" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M35.2,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M36.1,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="35.2" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M40.9,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M41.8,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="40.9" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M46.6,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M47.5,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="46.6" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M52.3,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M53.2,63c0.6,0,1-0.4,1-1s-0.4-1-1-1V63z"/>
          <rect x="52.3" y="61" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M58.5,62v1c0.6,0,1-0.4,1-1H58.5z"/>
          <path class="st0" d="M58,61c-0.6,0-1,0.4-1,1s0.4,1,1,1V61z"/>
          <path class="st0" d="M59.5,61.5c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="58" y="61" class="st0" width="0.5" height="2"/>
          <rect x="57.5" y="61.5" class="st0" width="2" height="0.5"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,56.9c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,56c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="56" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,51.3c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,50.4c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="50.4" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,45.8c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,44.8c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="44.8" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,40.2c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,39.3c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="39.3" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,34.6c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,33.7c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="33.7" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M57.5,29c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M59.5,28.1c0-0.6-0.4-1-1-1s-1,0.4-1,1H59.5z"/>
          <rect x="57.5" y="28.1" class="st0" width="2" height="0.9"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M58.5,23l0.6-0.8c-0.3-0.2-0.7-0.3-1.1-0.1c-0.3,0.2-0.6,0.5-0.6,0.9H58.5z"/>
          <path class="st0" d="M57.5,23.5c0,0.6,0.4,1,1,1s1-0.4,1-1H57.5z"/>
          <path class="st0" d="M58.2,24.1c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L58.2,24.1z"/>
          <rect x="57.5" y="23" class="st0" width="2" height="0.5"/>
          <rect x="57.7" y="22.9" transform="matrix(0.6346 -0.7728 0.7728 0.6346 3.5338 53.8076)" class="st0" width="2" height="0.5"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M63.6,25.9c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L63.6,25.9z"/>
          <path class="st0" d="M63.1,28.1c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L63.1,28.1z"/>
          <rect x="62.3" y="26.5" transform="matrix(0.6347 -0.7728 0.7728 0.6347 2.2723 58.8071)" class="st0" width="2" height="1.1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M68.2,31l-0.6,0.8c0.4,0.3,1,0.3,1.4-0.1L68.2,31z"/>
          <path class="st0" d="M68.4,29.9C68,29.5,67.4,29.6,67,30c-0.4,0.4-0.3,1.1,0.1,1.4L68.4,29.9z"/>
          <path class="st0" d="M69.2,31.4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L69.2,31.4z"/>
          <rect x="67" y="30.6" transform="matrix(0.6348 -0.7727 0.7727 0.6348 1.0106 63.8049)" class="st0" width="2" height="0.5"/>
          <rect x="68.1" y="29.8" transform="matrix(0.6978 -0.7163 0.7163 0.6978 -1.4244 58.2903)" class="st0" width="0.5" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M71.1,26.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L71.1,26.6z"/>
          <path class="st0" d="M73.1,27.4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L73.1,27.4z"/>
          <rect x="71.6" y="26" transform="matrix(0.6977 -0.7164 0.7164 0.6977 2.4546 59.8169)" class="st0" width="0.9" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M76,23l0.7,0.7c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.4-0.7L76,23z"/>
          <path class="st0" d="M75,22.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L75,22.6z"/>
          <path class="st0" d="M76.3,21.9c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L76.3,21.9z"/>
          <rect x="75.6" y="22.2" transform="matrix(0.6976 -0.7165 0.7165 0.6976 6.3352 61.3434)" class="st0" width="0.5" height="2"/>
          <rect x="74.8" y="22.6" transform="matrix(0.6417 -0.7669 0.7669 0.6417 9.6398 66.3306)" class="st0" width="2" height="0.5"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M71.3,20.4c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L71.3,20.4z"/>
          <path class="st0" d="M71.9,18.3c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L71.9,18.3z"/>
          <rect x="70.6" y="18.9" transform="matrix(0.6416 -0.767 0.767 0.6416 10.8358 61.8589)" class="st0" width="2" height="1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M67,16.7c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L67,16.7z"/>
          <path class="st0" d="M67.5,14.6c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L67.5,14.6z"/>
          <rect x="66.2" y="15.2" transform="matrix(0.6416 -0.767 0.767 0.6416 12.0802 57.1867)" class="st0" width="2" height="1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M62.6,13.1c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L62.6,13.1z"/>
          <path class="st0" d="M63.1,10.9c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L63.1,10.9z"/>
          <rect x="61.9" y="11.5" transform="matrix(0.6416 -0.767 0.767 0.6416 13.3191 52.5071)" class="st0" width="2" height="1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M58.2,9.4c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L58.2,9.4z"/>
          <path class="st0" d="M58.7,7.3c-0.4-0.4-1.1-0.3-1.4,0.1C57,7.8,57,8.4,57.5,8.8L58.7,7.3z"/>
          <rect x="57.5" y="7.9" transform="matrix(0.6416 -0.767 0.767 0.6416 14.5604 47.8309)" class="st0" width="2" height="1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M53.8,5.7c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L53.8,5.7z"/>
          <path class="st0" d="M54.4,3.6c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4L54.4,3.6z"/>
          <rect x="53.1" y="4.2" transform="matrix(0.6416 -0.767 0.767 0.6416 15.802 43.1551)" class="st0" width="2" height="1"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M49.7,1l0.6-0.8C50.1,0.1,49.9,0,49.6,0c-0.3,0-0.5,0.2-0.7,0.4L49.7,1z"/>
          <path class="st0" d="M49.4,2.1c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4L49.4,2.1z"/>
          <path class="st0" d="M48.6,0.8c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1L48.6,0.8z"/>
          <rect x="48.9" y="0.9" transform="matrix(0.6416 -0.767 0.767 0.6416 16.9945 38.6764)" class="st0" width="2" height="0.5"/>
          <path class="st0" d="M49.7,1c-0.8-0.6-0.8-0.6-0.8-0.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
            c0,0,0,0,0,0c0,0,0,0-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.3l1.5,1.3c0.1-0.1,0.2-0.3,0.3-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0
            c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0C50.5,1.6,50.5,1.6,49.7,1z"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M45.7,5.8c0.5-0.3,0.6-0.9,0.3-1.4c-0.3-0.5-0.9-0.6-1.4-0.3L45.7,5.8z"/>
          <path class="st0" d="M43.8,4.6c-0.5,0.3-0.7,0.9-0.4,1.4c0.3,0.5,0.9,0.7,1.4,0.4L43.8,4.6z"/>
          <path class="st0" d="M44.7,4.1c-0.3,0.2-0.6,0.3-0.9,0.5l0.9,1.8c0.4-0.2,0.7-0.4,1-0.6L44.7,4.1z"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M39.1,8c0.6,0,1-0.5,0.9-1c0-0.6-0.5-1-1-0.9L39.1,8z"/>
          <path class="st0" d="M38,6c-0.6,0-1,0.4-1,0.9c0,0.6,0.4,1,0.9,1L38,6z"/>
          <path class="st0" d="M39,6c-0.2,0-0.3,0-0.5,0v2c0.2,0,0.4,0,0.6,0L39,6z"/>
          <path class="st0" d="M38.5,6c-0.2,0-0.3,0-0.5,0l-0.1,2c0.2,0,0.4,0,0.6,0V6z"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M32.3,6.4c0.5,0.3,1.1,0.1,1.4-0.4c0.3-0.5,0.1-1.1-0.4-1.4L32.3,6.4z"/>
          <path class="st0" d="M32.3,4.1c-0.5-0.3-1.1-0.1-1.4,0.3c-0.3,0.5-0.1,1.1,0.3,1.4L32.3,4.1z"/>
          <path class="st0" d="M33.2,4.6c-0.3-0.2-0.6-0.3-0.9-0.5l-1.1,1.7c0.3,0.2,0.7,0.4,1,0.6L33.2,4.6z"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M27.3,1l0.8-0.6C27.9,0.2,27.7,0,27.4,0c-0.3,0-0.5,0.1-0.8,0.2L27.3,1z"/>
          <path class="st0" d="M26.9,2.1c0.4,0.4,1,0.5,1.4,0.1c0.4-0.4,0.5-1,0.1-1.4L26.9,2.1z"/>
          <path class="st0" d="M26.3,0.5c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L26.3,0.5z"/>
          <path class="st0" d="M28.4,0.8c-0.1-0.1-0.2-0.2-0.2-0.3c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
            c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.8,0.6c-0.8,0.6-0.8,0.6-0.8,0.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
            c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3L28.4,0.8z"/>
          <rect x="26.9" y="0.2" transform="matrix(0.767 -0.6416 0.6416 0.767 5.5772 17.666)" class="st0" width="0.5" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M23.9,5.1c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L23.9,5.1z"/>
          <path class="st0" d="M21.9,4.2c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L21.9,4.2z"/>
          <rect x="22.4" y="3.7" transform="matrix(0.767 -0.6416 0.6416 0.767 2.345 15.791)" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M19.5,8.8c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L19.5,8.8z"/>
          <path class="st0" d="M17.5,7.9c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L17.5,7.9z"/>
          <rect x="18.1" y="7.3" transform="matrix(0.767 -0.6416 0.6416 0.767 -1.029 13.833)" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M15.2,12.5c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L15.2,12.5z"/>
          <path class="st0" d="M13.1,11.5c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L13.1,11.5z"/>
          <rect x="13.7" y="11" transform="matrix(0.767 -0.6416 0.6416 0.767 -4.403 11.8747)" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M10.8,16.1c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L10.8,16.1z"/>
          <path class="st0" d="M8.8,15.2c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L8.8,15.2z"/>
          <rect x="9.3" y="14.7" transform="matrix(0.767 -0.6416 0.6416 0.767 -7.7768 9.9164)" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M6.4,19.8c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L6.4,19.8z"/>
          <path class="st0" d="M4.4,18.9c-0.4,0.4-0.5,1-0.1,1.4c0.4,0.4,1,0.5,1.4,0.1L4.4,18.9z"/>
          <rect x="4.9" y="18.3" transform="matrix(0.767 -0.6416 0.6416 0.767 -11.1507 7.9584)" class="st0" width="1" height="2"/>
        </g>
        <g class="tshirt-loader">
          <path class="st0" d="M1,23l-0.6-0.8C0.1,22.4,0,22.7,0,22.9c0,0.3,0.1,0.5,0.3,0.7L1,23z"/>
          <path class="st0" d="M0.6,24c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L0.6,24z"/>
          <path class="st0" d="M2,23.5c0.4-0.4,0.5-1,0.1-1.4c-0.4-0.4-1-0.5-1.4-0.1L2,23.5z"/>
          <rect x="0.2" y="22.9" transform="matrix(0.7164 -0.6977 0.6977 0.7164 -15.8331 7.3806)" class="st0" width="2" height="0.5"/>
          <rect x="0.9" y="21.8" transform="matrix(0.767 -0.6417 0.6417 0.767 -14.3853 6.0831)" class="st0" width="0.5" height="2"/>
        </g>
      </svg>
      </div>
    `;
  }
}

customElements.define('dialog-loading', DialogLoading);