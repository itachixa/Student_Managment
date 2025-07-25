import './index.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='Page'>
        <div className='Pag'>
          <div className="button-container">
            <Mybutton name="Student" path="./page/Student" />
            <Mybutton name="teacher" path="./page/teacher" />
          </div>
        </div>
      </div>
    </>
  );
}

function Mybutton({ name, path }) {
  return (
    <div>
      <Link to={path}>
        <button>{name}</button>
      </Link>
    </div>
  );
}

export default App;
