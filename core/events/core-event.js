const events = require('events')

const myEvent = new events.EventEmitter()

myEvent.addListener('play', () => console.log('I am playing'))

myEvent.emit('play')