const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome yo our Home Page!!');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`OOPS!!!!`);
})

server.listen(5000);