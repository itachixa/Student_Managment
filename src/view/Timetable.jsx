import { FaClock } from 'react-icons/fa';
import BackButton from '../components/BackButton';

function Timetable() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <FaClock size={60} color="#007BFF" />
      <h2>Timetable</h2>
      <p>Access your daily and weekly schedule.</p>
    </div>
  );
}

export default Timetable;
