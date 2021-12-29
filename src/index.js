const http = require('http');
const port = 3000;
const fs = require('fs');

http.createServer(render).listen(port)
console.log(`Server Start on port:${port} <Ctrl + C> to Stop`);

function render(request, response) {
    let url =request.url
    url =(url.endsWith('/')) ? url : url + '/'
    
    let fileName ='../dist/'   //ไฟล์ที่เก็บอยู่ในโฟลเดอร์ html
    switch (url) {
        case '/': fileName += 'index.html' ; break
        case '/about/' : fileName += 'about.html' ; break
        case '/product/' : fileName += 'product.html' ; break
        case '/blog/' : fileName += 'blog.html' ; break
    }

   
    fs.readFile(fileName, (error, content) => {
        let ctype ={'Content-Type' : 'text/html'}
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
