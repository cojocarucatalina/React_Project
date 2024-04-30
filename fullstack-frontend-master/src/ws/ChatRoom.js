import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:3001'; // Change this to your WebSocket server URL

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = io(SERVER_URL);

  useEffect(() => {
    // Handle incoming messages from the server
    socket.on('message', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Clean up WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const sendMessage = () => {
    // Send message to the server
    socket.emit('message', input);
    setInput(''); // Clear input field
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
