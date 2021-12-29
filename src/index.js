const app = require('express')()
const port = 3000;
const path = require('path')

app.get('/', (request, response) => {
    render(response, '../dist/index.html')
})

app.get('/about', (request, response) => {
    render(response, '../dist/about.html')
})

app.get('/products', (request, response) => {
    render(response, '../dist/products.html')
})

app.get('/blog', (request, response) => {
    render(response, '../dist/blog.html')
})


function render(response, file) {
    response.status(200)
    response.type('text/html')
    response.sendFile(path.join(__dirname, file))
}

app.use((request, response) => {
    response.status(404)
    response.type('text/plain')
    response.send('404 Not Found ไม่พบหน้านี้')
})

app.listen(port,() =>
    console.log(`==> Server Started port ${port}.... <Ctrl + C> to Stop`))
