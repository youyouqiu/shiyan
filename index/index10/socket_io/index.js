const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Welcome Realtime Server!</h1>');
});

// 在线用户
let onlineUsers = {};
// 当前在线人数
let onlineCount = 0;

io.on('connection', (socket) => {
  console.log('socket', socket);

  // 监听新用户加入
  socket.on('login', (res) => {
    // 将新加入的用户唯一标识作为socket的名称
    socket.name = res.userId;
    // 检查在线列表并加入
    if (!onlineUsers.hasOwnProperty(res.userId)) {
      onlineUsers[res.userId] = res.userName;
      // 在线人数+1
      onlineCount++;
    }
    // 向所有客户端广播新用户加入信息
    io.emit('login', {
      onlineUsers,
      onlineCount,
      user: res
    });
    console.log(`${res.userName} - 加入了聊天室`);
  });

  // 监听用户退出
  socket.on('disconnect', (res) => {
    // 在线列表删除退出的用户信息
    if (onlineUsers.hasOwnProperty(socket.name)) {
      // 退出的用户信息
      const outUser = {
        userId: socket.name,
        userName: onlineUsers[socket.name]
      }
      // 删除
      delete onlineUsers[socket.name];
      // 在线人数-1
      onlineCount--;
      // 向所有客户端广播用户退出信息
      io.emit('logout', {
        onlineUsers,
        onlineCount,
        user: res
      });
      console.log(`${res.userName} - 退出了聊天室`);
    }
  });

  // 监听用户发布聊天内容
  socket.on('message', (res) => {
    // 向所有客户端广播用户发布消息
    io.emit('message', res);
    console.log(`${res.userName}：${res.content}`);
  });
});

http.listen(3000, () => {
  console.log('listening on *: 3000');
});
