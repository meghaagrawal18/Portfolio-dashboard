"use client"

import { useState } from "react"

const MessagesSection = () => {
  const [messages, setMessages] = useState([
    
  ])

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const deleteAllMessages = () => {
    if (window.confirm("Are you sure you want to delete all messages?")) {
      setMessages([])
    }
  }

  return (
    <div className="section">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Messages ({messages.length})</h3>
          <button onClick={deleteAllMessages} style={{ backgroundColor: "#dc3545" }}>
            Delete All
          </button>
        </div>

        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="message">
              <div>
                <strong>{message.name}</strong> - {message.email}
                <p>{message.message}</p>
                <small>{message.date}</small>
              </div>
              <button onClick={() => deleteMessage(message.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MessagesSection
