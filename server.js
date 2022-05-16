const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('static/index.html').pipe(res)
    } else if (req.url != undefined && req.url.startsWith("/static")) {
        console.log("server received a request to ", req.url)
        
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('static/index.html').pipe(res)
    }
})

server.listen(process.env.PORT || 3000)
