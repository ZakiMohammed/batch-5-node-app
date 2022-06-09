const path = require('path')

// const fooPath = __dirname + '\\files\\foo.txt'

const fooPath = path.join(__dirname, 'files', 'foo.txt')

console.log(fooPath)

console.log(path.extname(fooPath))
console.log(path.basename(fooPath))
console.log(path.dirname(fooPath))

const parsed = path.parse(fooPath)

console.log(parsed)

const formatted = path.format(parsed)

console.log(formatted)