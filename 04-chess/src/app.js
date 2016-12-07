//import config from './config'

var express = require('express');
var app = express();
app.use(express.static('./'));
var http = require('http').Server(app);
var port = 3000;
var io = require('socket.io')(http);

http.listen(port, () => {
    console.log(`listening on *: ${port}`);
});

io.on('connection', (socket) => {
  console.log('a chessplayer connected');
  
  socket.on('move', (data) => {
    io.emit('move', data);
    console.log(`move: ${data.from}-${data.to}`);
  });

  socket.on('disconnect', () => {
    console.log('a chessplayer disconnected');
  });
});


