const events = require('events')

class Logger extends events.EventEmitter {
    log(message) {
        this.emit('log', message)
    }
}

const appLogger = new Logger()

appLogger.on('log', (message) => {
    console.log(`LOG [${new Date().toJSON()}]: ${message}`)
})

appLogger.log('Hello World')
appLogger.log('Something went wrong')