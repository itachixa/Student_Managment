import { FaComments } from 'react-icons/fa';
import BackButton from '../components/BackButton';

function Chat() {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <center>
      <FaComments size={60} color="#007BFF" />
      <h2>Chat</h2>
      </center>
      <p>Start conversations and chat with classmates or teachers.</p>
    </div>
  );
}

export default Chat;
