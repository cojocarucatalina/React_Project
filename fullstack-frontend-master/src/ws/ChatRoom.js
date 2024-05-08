import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./ChatRoom1.css"; // Import CSS file for styling

export default function ChatRoom1() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    userId: "",
    message: "",
  });
  const [userId, setUserId] = useState("");
  const [ws, setWs] = useState(null);
  const [showFetchedMessages, setShowFetchedMessages] = useState(true);
  const [showMyMessages, setShowMyMessages] = useState(false);

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const thirdSegment = pathSegments[2]; 
    setUserId(thirdSegment);
    
    const socket = new WebSocket("ws://localhost:8080");
    setWs(socket);

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    fetchMessages(); // Fetch messages when component mounts

    return () => {
      socket.close();
    };
  }, [location.pathname]);

  const onInputChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const messageWithUserId = { ...newMessage, userId: userId };
      
      await axios.post("http://localhost:8080/message", messageWithUserId);
      
      setNewMessage({ userId: "", message: "" });
      
      fetchMessages();
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  const onDelete = async (messageId) => {
    try {
      // Send delete request to the backend
      await axios.delete(`http://localhost:8080/messages/${messageId}`);
      // Fetch updated messages
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleToggleFetchedMessages = () => {
    setShowFetchedMessages(!showFetchedMessages);
  };

  const handleToggleMyMessages = () => {
    setShowMyMessages(!showMyMessages);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Chat</h2>
        <div className="chat-container">
          {messages.map((message, index) => (
            (showFetchedMessages || message.userId === userId) && // Show fetched messages only if showFetchedMessages is true or if it's the user's own message
            (!showMyMessages || message.userId === userId) && ( // Show messages only if showMyMessages is false or if it's the user's own message
              <div key={index} className={`message ${message.userId === userId ? "my-message" : ""}`}>
                {message.userId === userId && (
                  <button onClick={() => onDelete(message.id)} className="delete-button">Delete</button>
                )}
                <span className="user-id">{message.userId}: </span>
                <span>{message.message}</span>
              </div>
            )
          ))}
        </div>
        <div className="buttons-container">
          <button onClick={handleToggleFetchedMessages} className="toggle-button">
            {showFetchedMessages ? "Hide Fetched Messages" : "Show Fetched Messages"}
          </button>
          <button onClick={handleToggleMyMessages} className="toggle-button">
            {showMyMessages ? "Show All Messages" : "Show My Messages Only"}
          </button>
        </div>
        <form onSubmit={onSubmit} className="message-form">
          <input
            type="text"
            placeholder="Enter Message"
            name="message"
            value={newMessage.message}
            onChange={onInputChange}
            className="message-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}
