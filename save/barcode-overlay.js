drawBarcodeOverlay(location, imageSettings, viewTime) {

  const barcodeOverlayCanvasElement = this.shadowRoot.getElementById('barcode-overlay-canvas');
  barcodeOverlayCanvasElement.width = window.innerWidth;
  barcodeOverlayCanvasElement.height = window.innerHeight;
  const barcodeOverlayContext = barcodeOverlayCanvasElement.getContext('2d');

  barcodeOverlayContext.clearRect(0, 0, barcodeOverlayCanvasElement.width, barcodeOverlayCanvasElement.height);
  barcodeOverlayContext.beginPath();

  let xOffset = Math.floor(-(imageSettings.width - barcodeOverlayCanvasElement.width) / 2);
  let yOffset = Math.floor(-(imageSettings.height - barcodeOverlayCanvasElement.height) / 2);

  if(false) {
    viewFinderCanvasElement.style.visibility = "hidden";
    this.drawBarcodeOverlay(ScanResult.detail.barcodes[0].location, ScanResult.detail.imageSettings, 1500);
  }
  
  
  
  let resizeFactorX = 1;
  let resizeFactorY = (this.barcodePickerHight - window.innerHeight * 0.02)/window.innerHeight;
  let sal;
  
  // Screen Adjusted Location

  if (this.barcodePickerHight < window.innerHeight) {
    resizeFactorX = 0.7;
    sal = {
      "topLeft": {
          "x": Math.floor((location.topLeft.x + xOffset) * resizeFactorX),
          "y": Math.floor((location.topLeft.y + yOffset) * resizeFactorY)
      },
      "topRight": {
          "x": Math.floor((location.topRight.x + xOffset) * resizeFactorX),
          "y": Math.floor((location.topRight.y + yOffset) * resizeFactorY)
      },
      "bottomRight": {
          "x": Math.floor((location.bottomRight.x + xOffset) * resizeFactorX),
          "y": Math.floor((location.bottomRight.y + yOffset) * resizeFactorY)
      },
      "bottomLeft": {
          "x": Math.floor((location.bottomLeft.x + xOffset) * resizeFactorX),
          "y": Math.floor((location.bottomLeft.y + yOffset) * resizeFactorY)
      }
    }
  } else {
    sal = {
      "topLeft": {
          "x": Math.floor(location.topLeft.x + xOffset),
          "y": Math.floor(location.topLeft.y + yOffset)
      },
      "topRight": {
          "x": Math.floor(location.topRight.x + xOffset),
          "y": Math.floor(location.topRight.y + yOffset)
      },
      "bottomRight": {
          "x": Math.floor(location.bottomRight.x + xOffset),
          "y": Math.floor(location.bottomRight.y + yOffset)
      },
      "bottomLeft": {
          "x": Math.floor(location.bottomLeft.x + xOffset),
          "y": Math.floor(location.bottomLeft.y + yOffset)
      }
    }
  }

  // Mirrored Screen Adjusted Location
  const msal = {
    "topLeft": {
        "x": Math.floor(barcodeOverlayCanvasElement.width - sal.topLeft.x),
        "y": sal.topLeft.y
    },
    "topRight": {
        "x": Math.floor(barcodeOverlayCanvasElement.width - sal.topRight.x),
        "y": sal.topRight.y
    },
    "bottomRight": {
        "x": Math.floor(barcodeOverlayCanvasElement.width - sal.bottomRight.x),
        "y": sal.bottomRight.y
    },
    "bottomLeft": {
        "x": Math.floor(barcodeOverlayCanvasElement.width - sal.bottomLeft.x),
        "y": sal.bottomLeft.y
    }
  }

  console.log(sal);
  console.log(msal);

  barcodeOverlayContext.moveTo(msal.topLeft.x, msal.topLeft.y);
  barcodeOverlayContext.lineTo(msal.topRight.x, msal.topRight.y);
  barcodeOverlayContext.lineTo(msal.bottomRight.x, msal.bottomRight.y);
  barcodeOverlayContext.lineTo(msal.bottomLeft.x, msal.bottomLeft.y);

  barcodeOverlayContext.closePath();
  barcodeOverlayContext.fillStyle = "rgba(255, 255, 255, 0.2)";
  barcodeOverlayContext.fill();
  barcodeOverlayContext.strokeStyle = "rgba(255, 255, 255, 1)";
  barcodeOverlayContext.lineWidth = "3";
  barcodeOverlayContext.stroke();

  barcodeOverlayCanvasElement.style.visibility = 'visible';

  setTimeout(() =>
  barcodeOverlayCanvasElement.style.visibility = 'hidden'
  , viewTime);
}