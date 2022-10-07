
//herdando eventEmitter 
const {inherits} = require('util')
const {EventEmitter} = require('events')

function character(name) {
    this.name = name
}
inherits(character, EventEmitter)

const chapolin = new character('Chapolin');

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} Colorado`))

console.log('Oh não, quem poderá me defender?');
chapolin.emit('help')