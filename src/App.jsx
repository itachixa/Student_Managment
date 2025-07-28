import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      alert("🎉 Vous pouvez installer l'application sur votre appareil Android !");
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className='Page center-page'>
      <div className="button-container">
        <Mybutton name="Student" path="./page/Student" icon={<FaUserGraduate />} />
        <Mybutton name="Teacher" path="./page/teacher" icon={<FaChalkboardTeacher />} />
      </div>
    </div>
  );
}

function Mybutton({ name, path, icon }) {
  return (
    <Link to={path} className="button-link">
      <button className="icon-button">
        <span className="icon">{icon}</span>
        <span className="label">{name}</span>
      </button>
    </Link>
  );
}

export default App;
