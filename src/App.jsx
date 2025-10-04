import './index.css'
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import images
import StudentImg from './assets/img/Student.jpeg'
import TeacherImg from './assets/img/Teacher.jpeg'
import SRMImg from './assets/SRM.png'

function App() {
  const [role, setRole] = useState("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // ✅ Sélection dynamique du backend : local → hébergé
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:3008"
      : "https://schoolapp-neon-backend.onrender.com";

  // Dynamically select image based on role
  const currentImage = role === "student" ? StudentImg : TeacherImg

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_BASE}/users`)
      if (!res.ok) throw new Error("Error fetching users")
      const users = await res.json()

      // Vérifie si user existe
      const user = users.find(
        (u) => u.email === email && u.password === password && u.role === role
      )

      if (user) {
        // ✅ Sauvegarde de l’ID dans le localStorage
        if (role === "student") {
          localStorage.setItem("studentId", user.id)
          navigate("/Home")
        } else if (role === "faculty") {
          localStorage.setItem("facultyId", user.id)
          navigate("/home/proffesor")
        }
      } else {
        alert("❌ Invalid credentials or role mismatch")
      }
    } catch (err) {
      console.error("Login error:", err)
      alert("⚠️ Error while connecting to server")
    }
  }

  return (
    <div className="page">
      {/* LEFT SIDE */}
      <div className="left-panel">
        <center><img className='ico' src={SRMImg} alt="SRM ico" /></center>
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Simplify <span className="highlight">Scheduling</span><br />
          And Timetable<br /> Management
        </h1>
        <div className="illustration">
          <center><img src={currentImage} alt={role} /></center>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <h2>Login</h2>
        <p className="subtitle">Choose your category to access tailored features</p>

        {/* Role Selection */}
        <div className="role-selection">
          <button
            className={`role-btn ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
          >
            <FaUserGraduate /> I'm a Student
          </button>
          <button
            className={`role-btn ${role === "faculty" ? "active" : ""}`}
            onClick={() => setRole("faculty")}
          >
            <FaChalkboardTeacher /> I'm a Teacher
          </button>
        </div>

        {/* Form */}
        <form className="form" onSubmit={handleLogin}>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your school email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="create-btn">Login</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
        <a href="/register-school" className="admin-link">
          Administrators, register your school here
        </a>
      </div>
    </div>
  )
}

export default App
