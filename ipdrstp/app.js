const app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  rtsp = require('rtsp-ffmpeg');
server.listen(6148); //열고싶은 포트번호 입력
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});