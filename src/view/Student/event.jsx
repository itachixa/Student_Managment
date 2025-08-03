import { FaCalendarAlt } from 'react-icons/fa';
import BackButton from '../../components/BackButton';
import sportImg from "../../assets/img/sport.png";
import sruImg from "../../assets/img/srujan.png";
import hackathonImg from "../../assets/img/hackathon.png";
import "../../Styles/Event.css";
import { useState, useEffect } from "react";

// === Base des événements ===
const eventData = [
  {
    image: sportImg,
    title: "Football Activity",
    text: `This image shows a group of people playing football on a large, open field that appears to be mostly dirt with some patches of grass. In the background, there are several tall, modern buildings, one of which is very distinctive with a yellow and blue facade. The sky is overcast, suggesting a cloudy day. The scene looks like a casual sports activity taking place on what is likely a university or college campus.`
  },
  {
    image: sruImg,
    title: "SRUJAN '22",
    text: `This poster is for SRUJAN '22, a national-level symposium organized by the Department of Civil Engineering at SRM Institute of Science and Technology, Ramapuram Campus. Held on September 22, 2022, at the TRP Auditorium, it offered a variety of technical events like Buzz-er and Archi-Medes, and non-technical events such as Tug-of-War, Futsal, and Mobile Gaming, with prizes for the winners. Sponsors include L&T Construction and Ultratech.`
  },
  {
    image: hackathonImg,
    title: "DS Hackathon",
    text: `This poster advertises a DS Hackathon organized by the Department of Computer Science and Engineering at SRM Institute of Science and Technology, focused on AI & Machine Learning. Scheduled for February 28, 2024, from 8:30 AM to 4:30 PM at the NLP Lab, the event requires Rs 300 for teams of 2 to 3. Registration is via QR code. Faculty: Ms. B. Abirami, Ms. M. Chitra, Ms. C. Kadirparvathi.`
  }
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotation automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentEvent = eventData[currentIndex];

  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <center>
        <FaCalendarAlt size={60} color="#007BFF" />
        <h2>Events</h2>
      </center>
      <p>Keep up with upcoming school events and activities.</p>

      <div className="slider-container">
        <div className="containe slide-in">
          <div className="bloc">
            <center>
              <img src={currentEvent.image} alt="Event Poster" className="event-img" />
            </center>
          </div>
          <div className="bloc">
            <h3>{currentEvent.title}</h3>
            <p>{currentEvent.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
