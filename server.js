// server.js
const http = require('http');

const hostname = '0.0.0.0'; // 接收所有地址请求
const port = process.env.PORT || 80;  // 使用环境变量 PORT

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World from Node.js without Express!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
