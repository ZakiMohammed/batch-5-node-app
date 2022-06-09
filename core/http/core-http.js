const http = require('http')

const server = http.createServer((req, res) => {

    let content;

    switch (req.url) {
        case '/':
            content = `<h1>Home Page</h1>`
            break;
        case '/about':
            content = `<h1>About Page</h1>`
            break;
        case '/contact':
            content = `<h1>Contact Page</h1>`
            break;
        default:
            content = `<h1>Page Not Found</h1>`
            break;
    }

    res.setHeader('Content-Type', 'text/html')
    res.end(content)
})

server.listen(3000, () => {
    console.log(`Server running on port 3000`)
})