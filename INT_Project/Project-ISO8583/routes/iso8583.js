const ISO8583 = require('iso8583-js');

let x = new ISO8583({
    header: 'ISO015000017'
});

// Init the structure
x.init([
    ['PRIMARY_ACCOUNT_NUMBER', { bitmap: 2, length: 18 }],
    ['LOCAL_DATE', { bitmap: 13, length: 6 }]
    // ['AMOUNT', { bitmap: 12, length: 6 }]
]);


// Set the value
x.set('PRIMARY_ACCOUNT_NUMBER', '366577921569117691');
x.set('LOCAL_DATE', '112406');
// x.set('AMOUNT', '9999');


// Wrap the message
console.log('X value--->>>>', x);
console.log('**************************************************************************');

console.log(x.wrapMsg()); // -> 4008000000000000366577921569117691112406
console.log('**************************************************************************');
// Unwrap the message
console.log(x.unWrapMsg('4008000000000000366577921569117691112406'));


let randomNUM = Math.floor(Math.random() * 5) + 1;

console.log(randomNUM);