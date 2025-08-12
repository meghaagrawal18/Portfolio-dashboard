"use client"

import { useState } from "react"

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Hotel Management System",
      description:
        "A comprehensive hotel management system with booking, room management, and customer tracking features.",
      fullDescription:
        "A full-featured hotel management system built with modern web technologies. This application provides comprehensive booking management, room allocation, customer tracking, and administrative features for hotel operations.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      keyFeatures: [
        "Real-time room availability tracking",
        "Customer booking management",
        "Payment processing integration",
      ],
      technicalHighlights: [
        "Implemented real-time updates using WebSocket connections",
        "Optimized database queries for fast search",
      ],
      challengesSolved: [
        "Managing concurrent bookings and room availability",
        "Implementing complex business logic for pricing",
      ],
      github: "https://github.com",
      live: "https://example.com",
      projectImage: null,
      projectImagePreview: null,
    },
  ])

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    fullDescription: "",
    technologies: [],
    keyFeatures: [],
    technicalHighlights: [],
    challengesSolved: [],
    github: "",
    live: "",
    projectImage: null,
    projectImagePreview: null,
  })

  // Individual input states for adding items to arrays
  const [newTech, setNewTech] = useState("")
  const [newFeature, setNewFeature] = useState("")
  const [newHighlight, setNewHighlight] = useState("")
  const [newChallenge, setNewChallenge] = useState("")

  const handleProjectChange = (field, value) => {
    setNewProject((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setNewProject((prev) => ({
          ...prev,
          projectImage: file,
          projectImagePreview: e.target.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setNewProject((prev) => ({
      ...prev,
      projectImage: null,
      projectImagePreview: null,
    }))
  }

  // Functions to add items to arrays
  const addTechnology = () => {
    if (newTech.trim()) {
      setNewProject((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()],
      }))
      setNewTech("")
    }
  }

  const addFeature = () => {
    if (newFeature.trim()) {
      setNewProject((prev) => ({
        ...prev,
        keyFeatures: [...prev.keyFeatures, newFeature.trim()],
      }))
      setNewFeature("")
    }
  }

  const addHighlight = () => {
    if (newHighlight.trim()) {
      setNewProject((prev) => ({
        ...prev,
        technicalHighlights: [...prev.technicalHighlights, newHighlight.trim()],
      }))
      setNewHighlight("")
    }
  }

  const addChallenge = () => {
    if (newChallenge.trim()) {
      setNewProject((prev) => ({
        ...prev,
        challengesSolved: [...prev.challengesSolved, newChallenge.trim()],
      }))
      setNewChallenge("")
    }
  }

  // Functions to remove items from arrays
  const removeFromArray = (arrayName, index) => {
    setNewProject((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }))
  }

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setProjects((prev) => [...prev, { id: Date.now(), ...newProject }])
      setNewProject({
        title: "",
        description: "",
        fullDescription: "",
        technologies: [],
        keyFeatures: [],
        technicalHighlights: [],
        challengesSolved: [],
        github: "",
        live: "",
        projectImage: null,
        projectImagePreview: null,
      })
    }
  }

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }

  const saveData = () => {
    console.log("Saving projects:", projects)
    alert("Projects saved successfully!")
  }

  return (
    <div className="cardWrapper">
      <div className="section">
        {/* Add New Project Card */}
        <div className="card">
          <h3>Add New Project</h3>

          {/* Basic Project Information */}
          <div className="form-section">
            <h4>Basic Information</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  placeholder="Enter project title"
                  value={newProject.title}
                  onChange={(e) => handleProjectChange("title", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>GitHub URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/username/project"
                  value={newProject.github}
                  onChange={(e) => handleProjectChange("github", e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Live Demo URL</label>
                <input
                  type="url"
                  placeholder="https://project-demo.com"
                  value={newProject.live}
                  onChange={(e) => handleProjectChange("live", e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Short Description *</label>
              <textarea
                placeholder="Brief description for project card (2-3 lines)"
                value={newProject.description}
                onChange={(e) => handleProjectChange("description", e.target.value)}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Full Description</label>
              <textarea
                placeholder="Detailed description for project modal (4-6 lines)"
                value={newProject.fullDescription}
                onChange={(e) => handleProjectChange("fullDescription", e.target.value)}
                rows="5"
              />
            </div>
          </div>

          {/* Project Image */}
          <div className="form-section">
            <h4>Project Image</h4>
            <div className="image-upload-container">
              <div className="project-image-preview">
                {newProject.projectImagePreview ? (
                  <div className="image-preview-wrapper">
                    <img src={newProject.projectImagePreview || "/placeholder.svg"} alt="Project Preview" />
                    <button type="button" className="remove-image-btn" onClick={removeImage}>
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <span>No project image selected</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files[0])}
                className="file-input"
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="form-section">
            <h4>Tech Stack</h4>
            <div className="add-item">
              <input
                type="text"
                placeholder="Add technology (e.g., React, Node.js)"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTechnology()}
              />
              <button type="button" onClick={addTechnology}>
                Add Tech
              </button>
            </div>
            <div className="tags">
              {newProject.technologies.map((tech, index) => (
                <span key={index} className="tag">
                  {tech}
                  <button type="button" onClick={() => removeFromArray("technologies", index)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="form-section">
            <h4>Key Features</h4>
            <div className="add-item">
              <input
                type="text"
                placeholder="Add key feature (e.g., Real-time updates)"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addFeature()}
              />
              <button type="button" onClick={addFeature}>
                Add Feature
              </button>
            </div>
            <div className="feature-list">
              {newProject.keyFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span>• {feature}</span>
                  <button type="button" onClick={() => removeFromArray("keyFeatures", index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="form-section">
            <h4>Technical Highlights</h4>
            <div className="add-item">
              <input
                type="text"
                placeholder="Add technical highlight (e.g., Implemented WebSocket connections)"
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addHighlight()}
              />
              <button type="button" onClick={addHighlight}>
                Add Highlight
              </button>
            </div>
            <div className="feature-list">
              {newProject.technicalHighlights.map((highlight, index) => (
                <div key={index} className="feature-item">
                  <span>⚡ {highlight}</span>
                  <button type="button" onClick={() => removeFromArray("technicalHighlights", index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Solved */}
          <div className="form-section">
            <h4>Challenges Solved</h4>
            <div className="add-item">
              <input
                type="text"
                placeholder="Add challenge solved (e.g., Managing concurrent bookings)"
                value={newChallenge}
                onChange={(e) => setNewChallenge(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addChallenge()}
              />
              <button type="button" onClick={addChallenge}>
                Add Challenge
              </button>
            </div>
            <div className="feature-list">
              {newProject.challengesSolved.map((challenge, index) => (
                <div key={index} className="feature-item">
                  <span>🎯 {challenge}</span>
                  <button type="button" onClick={() => removeFromArray("challengesSolved", index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="add-project-btn" onClick={addProject}>
              ➕ Add Project
            </button>
          </div>
        </div>

        {/* Current Projects Card */}
        <div className="card">
          <h3>Current Projects ({projects.length})</h3>
          {projects.length === 0 ? (
            <p className="no-projects">No projects added yet. Add your first project above!</p>
          ) : (
            <div className="projects-list">
              {projects.map((project) => (
                <div key={project.id} className="project-item">
                  <div className="project-content">
                    <div className="project-header">
                      <h4>{project.title}</h4>
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {project.projectImagePreview && (
                      <div className="project-image-small">
                        <img src={project.projectImagePreview || "/placeholder.svg"} alt={project.title} />
                      </div>
                    )}

                    <div className="project-details">
                      <div className="detail-section">
                        <strong>Tech Stack:</strong>
                        <div className="tags">
                          {project.technologies.slice(0, 5).map((tech, index) => (
                            <span key={index} className="tag-small">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="tag-small more">+{project.technologies.length - 5} more</span>
                          )}
                        </div>
                      </div>

                      {project.keyFeatures.length > 0 && (
                        <div className="detail-section">
                          <strong>Key Features ({project.keyFeatures.length}):</strong>
                          <ul className="feature-preview">
                            {project.keyFeatures.slice(0, 3).map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                            {project.keyFeatures.length > 3 && <li>+{project.keyFeatures.length - 3} more...</li>}
                          </ul>
                        </div>
                      )}

                      {project.technicalHighlights.length > 0 && (
                        <div className="detail-section">
                          <strong>Technical Highlights ({project.technicalHighlights.length})</strong>
                        </div>
                      )}

                      {project.challengesSolved.length > 0 && (
                        <div className="detail-section">
                          <strong>Challenges Solved ({project.challengesSolved.length})</strong>
                        </div>
                      )}
                    </div>
                  </div>

                  <button className="remove-project-btn" onClick={() => removeProject(project.id)}>
                    🗑️ Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="card">
          <div className="save-section">
            <button type="button" className="save-btn" onClick={saveData}>
              💾 Save All Projects
            </button>
            <p className="save-description">Save your projects to update your portfolio</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cardWrapper {
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .section {
          width: 100%;
        }

        .card {
          width: 100%;
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          box-sizing: border-box;
        }

        .card h3 {
          margin-bottom: 20px;
          color: #2c3e50;
          font-size: 18px;
        }

        .form-section {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }

        .form-section:last-child {
          border-bottom: none;
        }

        .form-section h4 {
          color: #34495e;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 600;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 5px;
          font-size: 14px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3498db;
        }

        .image-upload-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .project-image-preview {
          width: 100%;
          height: 200px;
          border: 2px dashed #ddd;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .image-preview-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .image-preview-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }

        .remove-image-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(220, 53, 69, 0.9);
          color: white;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .remove-image-btn:hover {
          background: rgba(220, 53, 69, 1);
        }

        .image-placeholder {
          color: #999;
          text-align: center;
          font-size: 14px;
          padding: 20px;
        }

        .file-input {
          padding: 8px 12px !important;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
        }

        .file-input::-webkit-file-upload-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          margin-right: 10px;
        }

        .add-item {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        .add-item input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
        }

        .add-item button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
          white-space: nowrap;
        }

        .add-item button:hover {
          background-color: #2980b9;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .tag {
          background-color: #e3f2fd;
          color: #1976d2;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tag button {
          background: none;
          border: none;
          color: #1976d2;
          cursor: pointer;
          font-size: 16px;
          padding: 0;
          margin: 0;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .tag button:hover {
          background-color: rgba(25, 118, 210, 0.1);
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background-color: #f8f9fa;
          border-radius: 6px;
          border: 1px solid #e9ecef;
        }

        .feature-item span {
          flex: 1;
          font-size: 14px;
          color: #495057;
        }

        .feature-item button {
          background: none;
          border: none;
          color: #dc3545;
          cursor: pointer;
          font-size: 16px;
          padding: 4px;
          margin-left: 10px;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-item button:hover {
          background-color: rgba(220, 53, 69, 0.1);
        }

        .form-actions {
          text-align: center;
          margin-top: 20px;
        }

        .add-project-btn {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .add-project-btn:hover {
          background-color: #218838;
        }

        .no-projects {
          text-align: center;
          color: #666;
          font-style: italic;
          padding: 40px 20px;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .project-content {
          flex: 1;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .project-header h4 {
          margin: 0;
          color: #2c3e50;
          font-size: 18px;
        }

        .project-links {
          display: flex;
          gap: 10px;
        }

        .project-link {
          color: #3498db;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 8px;
          border: 1px solid #3498db;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .project-link:hover {
          background-color: #3498db;
          color: white;
        }

        .project-description {
          color: #666;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .project-image-small {
          margin-bottom: 15px;
        }

        .project-image-small img {
          width: 100%;
          max-width: 300px;
          height: 150px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #ddd;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .detail-section {
          font-size: 14px;
        }

        .detail-section strong {
          color: #2c3e50;
          display: block;
          margin-bottom: 5px;
        }

        .tag-small {
          background-color: #e9ecef;
          color: #495057;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          margin-right: 5px;
          margin-bottom: 3px;
          display: inline-block;
        }

        .tag-small.more {
          background-color: #6c757d;
          color: white;
        }

        .feature-preview {
          margin: 0;
          padding-left: 20px;
        }

        .feature-preview li {
          font-size: 13px;
          color: #666;
          margin-bottom: 3px;
        }

        .remove-project-btn {
          background-color: #dc3545;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          margin-left: 15px;
          white-space: nowrap;
          height: fit-content;
        }

        .remove-project-btn:hover {
          background-color: #c82333;
        }

        .save-section {
          text-align: center;
        }

        .save-btn {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .save-btn:hover {
          background-color: #218838;
        }

        .save-description {
          color: #666;
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .cardWrapper {
            padding: 10px;
          }

          .card {
            padding: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .add-item {
            flex-direction: column;
          }

          .add-item input {
            margin-bottom: 10px;
          }

          .project-item {
            flex-direction: column;
            gap: 15px;
          }

          .project-header {
            flex-direction: column;
            gap: 10px;
          }

          .remove-project-btn {
            align-self: flex-start;
            margin-left: 0;
          }

          .project-image-small img {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectsSection
