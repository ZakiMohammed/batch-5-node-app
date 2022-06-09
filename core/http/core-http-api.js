const http = require('http')

const server = http.createServer((req, res) => {

    let data = {
        message: 'Not Found'
    }

    if (req.url === '/api/users') {
        data = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Allen' },
            { id: 3, name: 'Billy' },
        ]
    } else if (req.url === '/api/posts') {
        data = [
            { id: 1, userId: 1, title: 'How to write API' },
            { id: 2, userId: 1, title: 'What is Event Loop' },
            { id: 3, userId: 2, title: 'What is single threading' },
        ]
    } else if (req.url === '/') {
        data = {
            message: 'Hello World'
        }
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
})

server.listen(3000, () => {
    console.log(`Server running on port 3000`)
})