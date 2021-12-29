const http = require('http');
const port = 3000;
const fs = require('fs');

http.createServer(render).listen(port)
console.log(`Server Start on port:${port} <Ctrl + C> to Stop`);

function render(request, response) {
    let ctype = { 'Content-Type': 'text/html' }
    fs.readFile('../dist/index.html', (error, content) => {
        if (!error){
            response.writeHead(200, ctype)
            response.write(content)
        } else {
            response.writeHead(404,ctype)
            response.write(error.message)
        }
        return response.end()
    })
}
