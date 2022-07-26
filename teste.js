const myModule = require('./getflag.js')
const name = myModule('--name')
const greeting = myModule('--greeting')

console.log(`Olá ${name}, ${greeting}`);