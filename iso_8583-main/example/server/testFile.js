var ISO8583 = require('iso-8583');
var msg = [
    [0, "1234"],
    [2, "1234567890123456"],
    [4, "000000005699"],
    [11, "000234"],
    [39, "004"],
    [41, "12345"],
    [42, "678901234"],
    [125, "BLAH BLAH"]
];

var message = new ISO8583.Message();
var packedMessage = message.packSync(msg);
console.log(packedMessage);