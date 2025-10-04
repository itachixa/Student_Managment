import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import sportImg from "../../assets/img/sport.png";
import sruImg from "../../assets/img/srujan.png";
import hackathonImg from "../../assets/img/hackathon.png";
import "../../Styles/Event.css";
import EventIMG from "../../assets/img/eventBanner.jpeg"; // image décorative à gauche

const eventData = [
  {
    image: sportImg,
    title: "Football Activity",
    text: `A casual football match on a dirt field with patches of grass, surrounded by modern buildings. The sky is overcast, and the scene feels like a relaxed campus sports day.`,
  },
  {
    image: sruImg,
    title: "SRUJAN '22",
    text: `A national-level symposium by SRM Civil Engineering Department with technical and non-technical events, held at TRP Auditorium. Sponsored by L&T and Ultratech.`,
  },
  {
    image: hackathonImg,
    title: "DS Hackathon",
    text: `An AI & ML-focused hackathon by SRM CSE Department, held on Feb 28, 2024 at the NLP Lab. Entry fee Rs 300 per team. Organized by faculty members.`,
  },
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentEvent = eventData[currentIndex];

  return (
    <div className="event-page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Discover <span className="highlight">Events</span>
        </h1>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />
        <header className="event-header">
          <FaCalendarAlt size={60} color="#007BFF" />
          <h2 className="event-title">Upcoming Activities</h2>
          <p className="event-subtitle">
            Stay updated with campus events and student activities.
          </p>
        </header>

        <div className="event-card">
          <img src={currentEvent.image} alt="Event" className="event-img" />
          <h3 className="event-name">{currentEvent.title}</h3>
          <p className="event-description">{currentEvent.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
