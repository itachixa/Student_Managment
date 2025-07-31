import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import '../Styles/Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'Alice', text: 'Salut tout le monde ! 😊' },
    { sender: 'Bob', text: 'Salut Alice ! Tu as révisé pour le contrôle de physique ?' },
    { sender: 'Alice', text: 'Un peu, mais j’ai encore des questions.' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { sender: 'Moi', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="page chat-page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <div className="chat-header">
        <FaComments size={60} color="#007BFF" />
        <h2>Chat</h2>
        <p>Start conversations and chat with classmates or teachers.</p>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === 'Moi' ? 'me' : 'other'}`}>
            <strong>{msg.sender}:</strong> <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Écris ton message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
}

export default Chat;
