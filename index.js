const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

// Handle socket connections
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat', (msg) => {
        //console.log(msg)
        io.emit('chat_transfer', msg)
    })

       // Handle disconnection
       socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
  });



// Start the server
expressServer.listen(3000, () => {
    console.log('Server runing')
})