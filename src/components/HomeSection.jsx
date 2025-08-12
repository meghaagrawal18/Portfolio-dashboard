"use client"

import { useState } from "react"

const HomeSection = () => {
  const [data, setData] = useState({
    name: "Megha Agrawal",
    title: "Full Stack Developer",
    description:
      "Get ready to turn your ideas into digital reality. I'm a passionate developer specializing in creating modern web applications with cutting-edge technologies.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    website: "https://mywebsite.com",
    email: "megha.agrawal@email.com",
    phone: "+1 (555) 123-4567",
  })

  const [images, setImages] = useState({
    profileImage: null,
    bannerImage: null,
    profileImagePreview: null,
    bannerImagePreview: null,
  })

  const [words, setWords] = useState(["student", "developer", "programmer", "creator"])
  const [newWord, setNewWord] = useState("")

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (imageType, file) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImages((prev) => ({
          ...prev,
          [imageType]: file,
          [`${imageType}Preview`]: e.target.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (imageType) => {
    setImages((prev) => ({
      ...prev,
      [imageType]: null,
      [`${imageType}Preview`]: null,
    }))
  }

  const addWord = () => {
    if (newWord.trim()) {
      setWords((prev) => [...prev, newWord.trim()])
      setNewWord("")
    }
  }

  const removeWord = (index) => {
    setWords((prev) => prev.filter((_, i) => i !== index))
  }

  const saveData = () => {
    // Here you would typically save to a database or local storage
    console.log("Saving data:", { data, images, words })
    alert("Data saved successfully!")
  }

  return (
    <div className="cardWrapper">
      <div className="section">
        {/* Basic Information Card */}
        <div className="card">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Professional Title</label>
              <input
                type="text"
                placeholder="e.g., Full Stack Developer"
                value={data.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Write a brief description about yourself"
              value={data.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows="4"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Images Card */}
        <div className="card">
          <h3>Profile Images</h3>
          {/* Profile Image */}
          <div className="image-section">
            <h4>Profile Image</h4>
            <div className="image-upload-container">
              <div className="image-preview">
                {images.profileImagePreview ? (
                  <div className="image-preview-wrapper">
                    <img src={images.profileImagePreview || "/placeholder.svg"} alt="Profile Preview" />
                    <button type="button" className="remove-image-btn" onClick={() => removeImage("profileImage")}>
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <span>No profile image selected</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange("profileImage", e.target.files[0])}
                className="file-input"
              />
            </div>
          </div>
        </div>

        {/* Social Links Card */}
        <div className="card">
          <h3>Social Links & Contact</h3>
          <div className="form-row">
            <div className="form-group">
              <label>GitHub URL</label>
              <input
                type="url"
                placeholder="https://github.com/username"
                value={data.github}
                onChange={(e) => handleChange("github", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>LinkedIn URL</label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={data.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Instagram URL</label>
              <input
                type="url"
                placeholder="https://instagram.com/username"
                value={data.instagram}
                onChange={(e) => handleChange("instagram", e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Personal Website</label>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              value={data.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Words Card */}
        <div className="card">
          <h3>Dynamic Words</h3>
          <p className="card-description">These words will rotate in your portfolio's hero section</p>
          <div className="add-item">
            <input
              type="text"
              placeholder="Add new word (e.g., designer, creator)"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addWord()}
            />
            <button type="button" onClick={addWord}>
              Add Word
            </button>
          </div>
          <div className="tags">
            {words.map((word, index) => (
              <span key={index} className="tag">
                {word}
                <button type="button" onClick={() => removeWord(index)}>
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="card">
          <div className="save-section">
            <button type="button" className="save-btn" onClick={saveData}>
              💾 Save All Changes
            </button>
            <p className="save-description">Save your changes to update your portfolio</p>
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

        .card-description {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
          font-style: italic;
        }

        .image-section {
          margin-bottom: 25px;
        }

        .image-section h4 {
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 16px;
        }

        .image-upload-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .image-preview {
          width: 150px;
          height: 150px;
          border: 2px dashed #ddd;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .banner-preview {
          width: 100%;
          height: 120px;
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
          top: 5px;
          right: 5px;
          background: rgba(220, 53, 69, 0.9);
          color: white;
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          cursor: pointer;
          font-size: 16px;
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
          font-size: 12px;
          padding: 10px;
        }

        .banner-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
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

        .save-section {
          text-align: center;
        }

        .save-btn {
          background-color: #28a745 !important;
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
          background-color: #218838 !important;
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

          .image-preview {
            width: 120px;
            height: 120px;
          }

          .banner-preview {
            height: 100px;
          }

          .add-item {
            flex-direction: column;
          }

          .add-item input {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default HomeSection
