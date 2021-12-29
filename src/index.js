const http = require('http');
const port = 3000;

http.createServer(render).listen(port)
console.log(`Server Start on port:${port} <Ctrl + C> to Stop`);

function render(request, response) {
    response.writeHead(200, {'Content-Type':'text/html'})
    let html =`
    <!Doctype html>
    <html>
    <head>
    <title> Node.js</title>
    </head>
    <body>
        <h2>Welcome to Node.js</h2>
        <b>Node.js run JavaScript at Server Side</b>
    </body>
    </html>
    `
    response.write(html);
    response.end();
}