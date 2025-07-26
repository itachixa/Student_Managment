import '../Styles/login.css';
import logo from '../assets/SRM.png'; // Make sure the logo is correctly located

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging in as a teacher...");
  };

  return (
    <>
      <div className="login-container">
        {/* SRM Logo */}
        <img src={logo} alt="SRM Logo" className="srm-logo" />

        <h2>SRM Teacher Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Teacher Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
