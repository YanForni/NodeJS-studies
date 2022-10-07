const {EventEmitter} = require('events')
const { statSync } = require('fs')

const ev = new EventEmitter()

// recebendo evento sempre
ev.on('saySomething', (message) => {
    console.log('Ouvindo você ' + message);
})

//recebendo evento apenas uma vez
ev.once('saySomething', (message) => {
    console.log('ouvindo apenas uma vez ' + message);
})

//emitindo evento
ev.emit('saySomething', 'yan')
ev.emit('saySomething', 'joão')
ev.emit('saySomething', 'golias')
