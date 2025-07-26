import { useNavigate } from 'react-router-dom'; // 👈 import du hook
import '../Styles/login.css';
import logo from '../assets/SRM.png';

function Login() {
  const navigate = useNavigate(); // 👈 initialisation du hook

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('../page/Home'); // 👈 redirection vers la page "home"
  };

  return (
    <>
    <div className='Login'>
      <div className="login-container">
        <img src={logo} alt="SRM Logo" className="srm-logo" />
        <h2>SRM Student Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Student Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          <button type="submit">Log In</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
