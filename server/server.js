const express = require('express');
const app = express();
const socketIO = require('socket.io');
const path = require('path');

const port = process.env.PORT || 3001;

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (_request, response) =>
  response.sendFile(path.resolve(`${__dirname}/../dist/index.html`)),
);
const server = app.listen(port, () => console.log(`server listening on ${port}.`));
const io = socketIO(server);

io.on('connection', socket => {
  const { roomId, name } = socket.handshake.query;
  socket.join(roomId);
  socket.on('connection', user => {
    io.in(roomId).emit('connection', user);
  });

  socket.on(NEW_CHAT_MESSAGE_EVENT, data => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });
  socket.on('disconnect', () => {
    socket.leave(roomId);
  });
});
