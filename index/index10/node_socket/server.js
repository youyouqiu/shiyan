const http = require('http');
const ws = require('nodejs-websocket');
const fs = require('fs');

const server = ws.createServer((conn) => {
  console.log('connection sussess');
  conn.on('text', (res) => {
    server.connections.forEach((connection) => {
      connection.sendText(res);
    });
  });
});

server.listen(8080, () => {
  console.log('listening on *: 8080');
});
