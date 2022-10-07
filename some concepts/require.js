//modulos nativos
const { log } = require('console');
const path = require('path')
console.log(path.basename(__filename));

//meus modulos
const myModule = require('./exports.js')
console.log(myModule);