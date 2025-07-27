import { FaCalendarAlt } from 'react-icons/fa';
import BackButton from '../components/BackButton';

function Event() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <FaCalendarAlt size={60} color="#007BFF" />
      <h2>Events</h2>
      <p>Keep up with upcoming school events and activities.</p>
    </div>
  );
}

export default Event;
