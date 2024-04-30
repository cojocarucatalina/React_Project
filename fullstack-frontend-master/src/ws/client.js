import React, { useEffect, useState } from 'react';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = new WebSocket('ws://localhost:8080');

  useEffect(() => {
    socket.onmessage = function(event) {
      // Handle incoming message from server
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    return () => {
      socket.close(); // Clean up WebSocket connection on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const sendMessage = () => {
    socket.send(input); // Send message to server
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
