import { FaBookOpen } from 'react-icons/fa';
import BackButton from '../components/BackButton';

function Courses() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <FaBookOpen size={60} color="#007BFF" />
      <h2>Courses</h2>
      <p>View your enrolled courses and access materials.</p>
    </div>
  );
}

export default Courses;
