var colors = require('colors');
var msg = require('./messageHolder');

console.log('A message'.green);
console.log(msg.message.red);
console.log(msg.message2.cyan);
console.log(msg.doSomething().rainbow);