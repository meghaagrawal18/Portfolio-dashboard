"use client"

import { useState } from "react"

const ContactSection = () => {
  const [contacts, setContacts] = useState([
    { id: 1, title: "GitHub", value: "megha-agrawal@github.com", link: "https://github.com" },
    { id: 2, title: "LinkedIn", value: "megha-agrawal@linkedin.com", link: "https://linkedin.com" },
    { id: 3, title: "Email", value: "megha.agrawal@email.com", link: "mailto:megha.agrawal@email.com" },
  ])

  const [newContact, setNewContact] = useState({ title: "", value: "", link: "" })

  const addContact = () => {
    if (newContact.title && newContact.value && newContact.link) {
      setContacts((prev) => [...prev, { id: Date.now(), ...newContact }])
      setNewContact({ title: "", value: "", link: "" })
    }
  }

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  return (
    <div className="section">
      <div className="card">
        <h3>Add New Contact Method</h3>
        <input
          type="text"
          placeholder="Contact Title (e.g., GitHub)"
          value={newContact.title}
          onChange={(e) => setNewContact((prev) => ({ ...prev, title: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Contact Value (e.g., username@email.com)"
          value={newContact.value}
          onChange={(e) => setNewContact((prev) => ({ ...prev, value: e.target.value }))}
        />
        <input
          type="url"
          placeholder="Contact Link"
          value={newContact.link}
          onChange={(e) => setNewContact((prev) => ({ ...prev, link: e.target.value }))}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      <div className="card">
        <h3>Current Contact Methods</h3>
        {contacts.map((contact) => (
          <div key={contact.id} className="item">
            <div>
              <strong>{contact.title}</strong>
              <p>{contact.value}</p>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.link}
              </a>
            </div>
            <button onClick={() => removeContact(contact.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactSection
