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
    text: `A friendly football match is taking place on a dirt field dotted with patches of grass, giving the ground a rustic and natural appearance. Around the field, modern buildings with glass façades and geometric designs dominate the landscape, suggesting a university campus or a contemporary office complex. The sky, covered with light gray clouds, spreads a soft, even light over the scene, creating a calm and relaxed atmosphere.
On the field, players dressed in casual outfits — t-shirts, shorts, and sneakers — take part in the game with enthusiasm. The match feels spontaneous, with no referee or strict rules, played purely for the joy of sharing a sporting moment among friends or classmates. Their movements convey a joyful energy and a lighthearted sense of competition, typical of an easygoing afternoon after classes or work.
Around the pitch, a few informal spectators — perhaps friends or students — watch the game, chatting and laughing, while a gentle breeze stirs the dust from the ground. The entire scene radiates a feeling of camaraderie, simplicity, and authenticity. It’s not a grand official match, but rather a slice of everyday life — where sport, friendship, and relaxation blend harmoniously in the peaceful atmosphere of a campus under a soft, overcast autumn sky.`,
  },
  {
    image: sruImg,
    title: "SRUJAN '22",
    text: `A national-level symposium organized by the SRM Civil Engineering Department, bringing together students, researchers, and professionals for a series of technical and non-technical events. The event took place at the prestigious TRP Auditorium, providing an inspiring setting for knowledge exchange, innovation showcases, and friendly competitions.

Sponsored by industry leaders Larsen & Toubro (L&T) and Ultratech Cement, the symposium aimed to promote creativity, teamwork, and engineering excellence among participants. The program featured hands-on workshops, technical presentations, and engaging cultural or fun events, striking a perfect balance between learning and enjoyment.

The overall atmosphere reflected the academic strength and vibrant spirit of the SRM Civil Engineering community, offering a unique platform to share ideas, build connections, and celebrate innovation in the field of modern construction and civil engineering.`,
  },
  {
    image: hackathonImg,
    title: "DS Hackathon",
    text: `An AI & Machine Learning–focused hackathon organized by the SRM Computer Science and Engineering Department, held on February 28, 2024, at the NLP Laboratory. The event brought together enthusiastic students, innovators, and tech enthusiasts to explore the latest trends and applications in artificial intelligence and machine learning.
With an entry fee of ₹300 per team, the hackathon provided a competitive yet collaborative environment where participants could design, develop, and present creative AI-based solutions to real-world challenges. Teams worked intensively throughout the day, combining technical knowledge, problem-solving skills, and teamwork to bring their ideas to life.
The event was organized by the faculty members of the department, ensuring a well-structured and educational experience. Mentors and judges from both academia and industry offered valuable insights and feedback, motivating participants to push their limits. Overall, the hackathon served as a platform for innovation, learning, and collaboration, reflecting SRM’s commitment to nurturing talent in the fast-evolving fields of Artificial Intelligence and Machine Learning.`,
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
        <BackButton to="/home/proffesor" label="Back" iconSize={18} />
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
