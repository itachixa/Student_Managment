import { FaChartBar } from 'react-icons/fa';
import BackButton from '../components/BackButton';

function Marks() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <FaChartBar size={60} color="#007BFF" />
      <h2>Marks</h2>
      <p>Check your test, exam, and assignment marks here.</p>
    </div>
  );
}

export default Marks;
