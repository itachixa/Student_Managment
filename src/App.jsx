import './index.css';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

function App() {
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
