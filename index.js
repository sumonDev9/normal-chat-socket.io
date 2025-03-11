const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

io.on('connection', (socket) => {
    console.log('a user connected');
  });




expressServer.listen(3000, () => {
    console.log('Server runing')
})