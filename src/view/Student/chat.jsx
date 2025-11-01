import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Chat.css";

const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:3008"
    : "https://schoolapp-neon-backend.onrender.com";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const chatEndRef = useRef(null);

  // 🧍‍♂️ Utilisateur connecté
  const currentUser = {
    id: Number(localStorage.getItem("studentId")) || 1,
    email: localStorage.getItem("userEmail") || "you@srm.edu", // facultatif
  };

  // 📜 Scroll automatique vers le bas
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 📩 Récupérer les messages
  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_BASE}/messages`);
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      // trie du plus ancien au plus récent
      setMessages(data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)));
      setLoading(false);
      scrollToBottom();
    } catch (err) {
      console.error("Error loading messages:", err);
      setLoading(false);
    }
  };

  // 🔁 Rafraîchissement auto toutes les 3 secondes
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  // 💬 Envoi de message
  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const msg = {
      sender: { id: currentUser.id },
      receiver: null, // chat général
      content: newMessage.trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg),
      });

      if (!res.ok) throw new Error("Failed to send message");
      const savedMsg = await res.json();
      setMessages((prev) => [...prev, savedMsg]);
      setNewMessage("");
      scrollToBottom();
    } catch (err) {
      console.error("Send error:", err);
      alert("❌ Could not send message. Please retry.");
    }
  };

  return (
    <div className="page chat-page">
      <BackButton to="/Home" label="Back" iconSize={18} />

      <div className="chat-header">
        <FaComments size={60} color="#007BFF" />
        <h2>General Chat Room</h2>
        <p>Discuss with your classmates and professors in real-time.</p>
      </div>

      {loading ? (
        <p className="loading">Loading messages...</p>
      ) : (
        <div className="chat-box">
          {messages.length === 0 && <p>No messages yet...</p>}
          {messages.map((msg, index) => {
            const isMe = msg.sender?.id === currentUser.id;
            return (
              <div key={index} className={`chat-message ${isMe ? "me" : "other"}`}>
                <div className="sender">
                  {isMe ? "You" : msg.sender?.email || "Unknown"}
                </div>
                <div className="bubble">{msg.content}</div>
                <div className="timestamp">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            );
          })}
          <div ref={chatEndRef}></div>
        </div>
      )}

      <div className="chat-input">
        <input
          type="text"
          placeholder="Write your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Chat;
