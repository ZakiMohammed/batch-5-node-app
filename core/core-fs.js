const fs = require('fs')
const path = require('path')

const fooPath = path.join(__dirname, 'files', 'foo.txt')

// const content = fs.readFileSync(fooPath, { encoding: 'utf-8' })

fs.readFile(fooPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log('Read Error Occurred:', err)
        return
    }

    console.log('Content:', data)
})

// fs.unlink(fooPath, (err) => {
//     if (err) {
//         console.log('Unlink Error Occurred:', err)
//         return
//     }

//     console.log('File Deleted');
// })

// fs.writeFile(fooPath, 'Soo World', { flag: 'a' }, (err) => {
//     if (err) {
//         console.log('Write Error Occurred:', err)
//         return
//     }

//     console.log('File Updated')
// })