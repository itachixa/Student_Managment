import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // ← Import de ton fichier firebase
import '../Styles/login.css';
import logo from '../assets/SRM.png';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('../page/Home'); // redirection si tout va bien
    } catch (error) {
      alert("Erreur de connexion : " + error.message);
    }
  };

  return (
    <div className='Login'>
      <div className="login-container">
        <img src={logo} alt="SRM Logo" className="srm-logo" />
        <h2>SRM Student Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Student Email</label>
          <input type="email" id="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
