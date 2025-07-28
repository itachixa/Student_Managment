import './index.css'
import { Link } from 'react-router-dom'
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)

      const wantsInstall = window.confirm("🎉 Voulez-vous installer l'application sur votre appareil Android ?")

      if (wantsInstall && deferredPrompt) {
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L’utilisateur a accepté l’installation.')
          } else {
            console.log('L’utilisateur a refusé l’installation.')
          }
          setDeferredPrompt(null)
        })
      }
    })
  }, [deferredPrompt])

  return (
    <div className='Page center-page'>
      <div className="button-container">
        <Mybutton name="Student" path="./page/Student" icon={<FaUserGraduate />} />
        <Mybutton name="Teacher" path="./page/teacher" icon={<FaChalkboardTeacher />} />
      </div>
    </div>
  )
}

function Mybutton({ name, path, icon }) {
  return (
    <Link to={path} className="button-link">
      <button className="icon-button">
        <span className="icon">{icon}</span>
        <span className="label">{name}</span>
      </button>
    </Link>
  )
}

export default App
