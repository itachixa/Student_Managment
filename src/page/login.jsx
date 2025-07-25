import '../Styles/login.css';
import logo from '../assets/SRM.png'; // Make sure the logo is in this location

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging in...");
  };

  return (
    <>
      <div className="login-container">
        {/* SRM Logo */}
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
    </>
  );
}

export default Login;
