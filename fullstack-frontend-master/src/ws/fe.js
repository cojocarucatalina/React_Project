import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export default function DisplayMessages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:8080");
    setSocket(socket);

    socket.on('init', (initialMessages) => {
      setMessages(initialMessages);
    });

    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => socket.disconnect();
  }, []);

  const onInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const messageData = { userId, message: newMessage };
    socket.emit('newMessage', messageData);
    setNewMessage("");
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Chat</h2>
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <span className="user-id">{message.userId}: </span>
              <span>{message.message}</span>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="message-form">
          <input
            type="text"
            placeholder="Enter Message"
            name="message"
            value={newMessage}
            onChange={onInputChange}
            className="message-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}
