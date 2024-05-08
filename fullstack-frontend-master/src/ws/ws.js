// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     // Broadcast received message to all clients
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });
import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:8080'); // Change the URL accordingly

    // Set up event listeners
    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      setReceivedMessage(event.data);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Store the WebSocket object in state
    setSocket(ws);

    // Clean-up function to close WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const sendMessage = () => {
    if (socket && message) {
      socket.send(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <h2>Received Message:</h2>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
};

export default WebSocketComponent;
