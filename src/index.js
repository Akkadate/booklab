const app = reqire('express')()
app.use((request, response) => {
    response.status(200)
    response.type('text/html')
    response.send(`
   <!doctype html>
    <html lang="en">

<body>
    <h2>Welcome to Node.js</h2>
    <ul>
        <li>Node.js is JavaScript Runtime Enviroment</li>
        <li>Node.js uses Google V8 engine</li>
    </ul>
 
</body>
</html>
    `)
})
app.listen(3000,() =>
    console.log('server start....'))
