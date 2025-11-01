import React from "react";
import { FaBookOpen } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Student/Courses.css";
import CoursesIMG from "../../assets/img/Course.jpeg";

function Courses() {
  const courses = [
    {
      name: "Data Structure and Algorithms",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Data%20Structures%20And%20Algorithm",
    },
    {
      name: "Transform and Boundary Value Problems",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Transforms%20And%20Boundary%20Value%20Problems",
    },
    {
      name: "Advanced Programming Practice",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Advanced%20Programming%20Practice",
    },
    {
      name: "Operating Systems",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Operating%20Systems",
    },
    {
      name: "Universal Human Values",
      link: "#", // tu peux ajouter un vrai lien plus tard
    },
    {
      name: "Computer Organization and Architecture",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Computer%20Organization%20And%20Architecture",
    },
    {
      name: "Digital Thinking and Methodology",
      link: "https://thehelpers.vercel.app/semesters/3/subjects/Social%20Engineering",
    },
    {
      name: "Professional Ethics",
      link: "#", // à compléter
    },
  ];

  return (
    <div className="courses-page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <img src={CoursesIMG} alt="Courses Visual" />
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Explore Your <span className="highlight">Courses</span>
        </h1>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />

        <header className="courses-header">
          <center>
            <FaBookOpen size={60} color="#0d6efd" />
            <h2 className="courses-title">Courses</h2>
          </center>
          <p className="courses-subtitle">
            View your enrolled courses and access study materials.
          </p>
        </header>

        <section className="courses-list">
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-link"
                >
                  📘 {course.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Courses;
