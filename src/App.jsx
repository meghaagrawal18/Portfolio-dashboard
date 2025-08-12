"use client"

import { useState } from "react"
import "./App.css"
import HomeSection from "./components/HomeSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import MessagesSection from "./components/MessagesSection"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" },
    { id: "messages", name: "Messages" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "skills":
        return <SkillsSection />
      case "contact":
        return <ContactSection />
      case "messages":
        return <MessagesSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Portfolio Dashboard</h1>
        <nav className="nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-btn ${activeSection === section.id ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </header>
      <main className="content">{renderContent()}</main>
    </div>
  )
}

export default App
