const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'catalina',
  password: 'octombrie',
  database: 'chat'
});

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  pool.query('SELECT * FROM messages ORDER BY timestamp ASC', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      socket.emit('init', results);
    }
  });

  socket.on('newMessage', (msg) => {
    pool.query('INSERT INTO messages (userId, message, timestamp) VALUES (?, ?, NOW())', [msg.userId, msg.message], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        io.emit('message', msg);  
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
