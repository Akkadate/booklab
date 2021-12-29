const http = require('http');
const port = 3000;

http.createServer(render).listen(port)

console.log(`Server Start on port:${port} <Ctrl + C to Stop`);

function render(request, response) {
    response.write('Hello Node by akkadate')
    response.end()
}