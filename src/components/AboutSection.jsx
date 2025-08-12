"use client"

import { useState } from "react"

const AboutSection = () => {
  const [about, setAbout] = useState({
    whoAmI: "I'm a highly motivated, passionate web developer...",
    description: "I specialize in creating responsive, user-friendly applications...",
  })

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      description: "Building responsive web applications",
      period: "2023 - Present",
    },
    { id: 2, title: "Full Stack Developer", description: "End-to-end web development", period: "2022 - 2023" },
  ])

  const [newExp, setNewExp] = useState({ title: "", description: "", period: "" })

  const addExperience = () => {
    if (newExp.title && newExp.description && newExp.period) {
      setExperiences((prev) => [...prev, { id: Date.now(), ...newExp }])
      setNewExp({ title: "", description: "", period: "" })
    }
  }

  const removeExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id))
  }

  return (
    <div className="section">
      <div className="card">
        <h3>About Content</h3>
        <textarea
          placeholder="Who Am I?"
          value={about.whoAmI}
          onChange={(e) => setAbout((prev) => ({ ...prev, whoAmI: e.target.value }))}
          rows="3"
        />
        <textarea
          placeholder="Description"
          value={about.description}
          onChange={(e) => setAbout((prev) => ({ ...prev, description: e.target.value }))}
          rows="3"
        />
      </div>

      <div className="card">
        <h3>Add Experience</h3>
        <input
          type="text"
          placeholder="Job Title"
          value={newExp.title}
          onChange={(e) => setNewExp((prev) => ({ ...prev, title: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Period (e.g., 2023 - Present)"
          value={newExp.period}
          onChange={(e) => setNewExp((prev) => ({ ...prev, period: e.target.value }))}
        />
        <textarea
          placeholder="Description"
          value={newExp.description}
          onChange={(e) => setNewExp((prev) => ({ ...prev, description: e.target.value }))}
          rows="2"
        />
        <button onClick={addExperience}>Add Experience</button>
      </div>

      <div className="card">
        <h3>Current Experiences</h3>
        {experiences.map((exp) => (
          <div key={exp.id} className="item">
            <div>
              <strong>{exp.title}</strong> - {exp.period}
              <p>{exp.description}</p>
            </div>
            <button onClick={() => removeExperience(exp.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutSection
