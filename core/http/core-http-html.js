const http = require('http')
const fs = require('fs')
const path = require('path')

const folderPath = path.join(__dirname, 'pages')

const server = http.createServer((req, res) => {
    let page = ''

    if (req.url === '/') {
        page = 'index.html'
    } else if (req.url === '/about') {
        page = 'about.html'
    } else if (req.url === '/contact') {
        page = 'contact.html'
    } else {
        page = 'notfound.html'
    }

    const file = path.join(folderPath, page)

    fs.readFile(file, (err, data) => {
        if (err) {
            const errorPath = path.join(folderPath, 'error.html')
            fs.readFile(errorPath, (err, data) => {
                if (err) {
                    res.end('Error Occurred')
                    return
                }

                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            })
            return
        }

        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log(`Server running on port 3000`)
})