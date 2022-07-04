import { GS1Parser } from './gs1-parser.js';  
  
var getGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

var getGtinFromBarcode = (barcode) => {
  var gtin = {};
  console.log(GS1Parser(barcode));  

  GS1Parser(barcode.data).parsedCodeItems.forEach(parsedCodeItem => {
    if (parsedCodeItem.ai == "01")
    {
      gtin = parsedCodeItem.data;
    }
  });

  return gtin;
}

var gs1FromBarcode = (barcode) => {
  var gs1 = {};
  console.log(GS1Parser(barcode.data));  

  GS1Parser(barcode.data).parsedCodeItems.forEach(parsedCodeItem => {
    if (parsedCodeItem.ai == "01")
    {
      gs1.gtin = parsedCodeItem.data;
    }
    if (parsedCodeItem.ai == "21")
    {
      gs1.serial = parsedCodeItem.data;
    }
  });

  return gs1;
}
  
export { getGUID, getGtinFromBarcode, gs1FromBarcode };
  