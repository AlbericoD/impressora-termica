const escpos = require('escpos');
const device  = new escpos.USB();
const options = { encoding: "GB18030" /* default */ }
const printer = new escpos.Printer(device, options);
console.log('init print....')

device.open(function(){
  printer
  .font('a')
  .align('ct')
  .style('bu')
  .size(1, 1)
  .text('PoobInfo test')
  .text('termica, impressora')
  .barcode('1234567', 'EAN8')
  .qrimage('https://github.com/song940/node-escpos', function(err){
    this.cut();
    this.close();
  });
});