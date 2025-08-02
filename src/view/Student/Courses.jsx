import { FaBookOpen } from 'react-icons/fa';
import BackButton from '../../components/BackButton';
import "../../Styles/Student/Courses.css"

function Courses() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <center>
      <FaBookOpen size={60} color="#007BFF" />
      <h2>Courses</h2>
      </center>
      <center>
      <p>View your enrolled courses and access materials.</p>
      <section className="page-content">
      <ul>
          <li className="Marks">Data Structure and Algorithms</li>
          <li className="Marks">Transforme and Bonudary  Value Probleme</li>
          <li className="Marks">Advance  programming </li>
          <li className="Marks">Operating Systemes</li>
          <li className="Marks">Universal Human Vailue</li>
          <li className="Marks">Computer Organisation and  Architecture</li>
          <li className="Marks">Digital Thinking And Methodology</li>
          <li className="Marks">Solid  State Device </li>
          <li className="Marks">Microbiology</li>
          <li className="Marks">Professional Ethique</li>
        </ul>
        </section>
        </center>
        
    </div>
  );
}

export default Courses;
