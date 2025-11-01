import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Student/Calendar.css";
import calendarIMG from "../../assets/img/Calendar.jpeg"

function Calendar() {
  const days = [
    { day: 1, type: "Day 1", description: "First day of the month" },
    { day: 2, type: "Day 2", description: "Class meeting" },
    { day: 3, type: "Day 3", description: "Math quiz" },
    { day: 4, type: "Day 4", description: "Project submission" },
    { day: 5, type: "Day 5", description: "Sports practice" },
    { day: 6, type: "Holiday", description: "Weekend break" },
    { day: 7, type: "Holiday", description: "Weekend break" },
    { day: 8, type: "Day 1", description: "Science fair" },
    { day: 9, type: "Day 2", description: "Midweek review" },
    { day: 10, type: "Day 3", description: "Parent meeting" },
    { day: 11, type: "Day 4", description: "History presentation" },
    { day: 12, type: "Day 5", description: "Art workshop" },
    { day: 13, type: "Holiday", description: "Mock exam" },
    { day: 14, type: "Holiday", description: "Club activities" },
    { day: 15, type: "Day 1", description: "Holiday" },
    { day: 16, type: "Day 2", description: "Back to class" },
    { day: 17, type: "Day 3", description: "Team assignment" },
    { day: 18, type: "Day 4", description: "Health seminar" },
    { day: 19, type: "Day 5", description: "Debate competition" },
    { day: 20, type: "Holiday", description: "Coding challenge" },
    { day: 21, type: "Holiday", description: "Weekly review" },
    { day: 22, type: "Day 1", description: "Sports event" },
    { day: 23, type: "Day 2", description: "Clean-up campaign" },
    { day: 24, type: "Day 3", description: "Final project defense" },
    { day: 25, type: "Day 4", description: "Guest lecture" },
    { day: 26, type: "Day 5", description: "Practical exam" },
    { day: 27, type: "Holiday", description: "Community service" },
    { day: 28, type: "Holiday", description: "Cultural day" },
    { day: 29, type: "Day 1", description: "Quiz competition" },
    { day: 30, type: "Day 2", description: "Last class" },
    { day: 31, type: "Day 3", description: "Month-end review" },
  ];

  return (
    <div className="page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <img src={calendarIMG} alt="" />
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Academic <span className="highlight">Calendar</span>
        </h1>
        <p className="subtitle">
          Stay updated with important events, classes and holidays.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/home/proffesor" label="Back" iconSize={18} />
        <header className="page-header">
          <FaCalendarAlt size={50} color="#0d6efd" />
          <h2 className="page-title">School Calendar - August 2025</h2>
        </header>

        <div className="calendar-container">
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Day Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {days.map((item) => (
                <tr key={item.day}>
                  <td>{item.day}</td>
                  <td className={item.type === "Holiday" ? "holiday" : "school-day"}>
                    {item.type}
                  </td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
