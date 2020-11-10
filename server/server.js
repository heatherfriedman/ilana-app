const express = require('express');
const app = express();
const socketIO = require('socket.io');
const path = require('path');

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (_request, response) =>
  response.sendFile(path.resolve(`${__dirname}/../dist/index.html`)),
);
const server = app.listen(port, () => console.log(`server listening on ${port}.`));
const io = socketIO(server);

io.on('connection', socket => {
  console.log('a user connected with id:', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected with id:', socket.id);
  });
  socket.on('chat message', chat => {
    console.log(chat);
    io.emit('chat message', chat);
  });
});
