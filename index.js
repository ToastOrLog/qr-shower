console.log('index run')

var QRcode = require('qrcode');

QRcode.toString("zz是×√+,我在他旁边的玩手机",{type:'terminal'}, function (err, string) {
    console.log(string)
    
})