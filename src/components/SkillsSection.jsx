"use client"

import { useState } from "react"

const SkillsSection = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { id: 2, name: "Backend", skills: ["Node.js", "Express", "Python"] },
  ])

  const [newCategory, setNewCategory] = useState({ name: "", skills: [] })
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim()) {
      setNewCategory((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (index) => {
    setNewCategory((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addCategory = () => {
    if (newCategory.name && newCategory.skills.length > 0) {
      setCategories((prev) => [...prev, { id: Date.now(), ...newCategory }])
      setNewCategory({ name: "", skills: [] })
    }
  }

  const removeCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id))
  }

  return (
    <div className="section">
      <div className="card">
        <h3>Add New Skill Category</h3>
        <input
          type="text"
          placeholder="Category Name (e.g., Frontend)"
          value={newCategory.name}
          onChange={(e) => setNewCategory((prev) => ({ ...prev, name: e.target.value }))}
        />

        <div className="add-item">
          <input type="text" placeholder="Add skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
          <button onClick={addSkill}>Add Skill</button>
        </div>

        <div className="tags">
          {newCategory.skills.map((skill, index) => (
            <span key={index} className="tag">
              {skill} <button onClick={() => removeSkill(index)}>×</button>
            </span>
          ))}
        </div>

        <button onClick={addCategory}>Add Category</button>
      </div>

      <div className="card">
        <h3>Current Skill Categories</h3>
        {categories.map((category) => (
          <div key={category.id} className="item">
            <div>
              <strong>{category.name}</strong>
              <div className="tags">
                {category.skills.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={() => removeCategory(category.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
