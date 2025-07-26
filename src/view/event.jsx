import { FaCalendarAlt } from 'react-icons/fa';

function Event() {
  return (
    <div className="page">
      <FaCalendarAlt size={60} color="#007BFF" />
      <h2>Events</h2>
      <p>Keep up with upcoming school events and activities.</p>
    </div>
  );
}

export default Event;
