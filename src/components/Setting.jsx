import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../Styles/Setting.css";
import BackButton from '../components/BackButton'; 

function Setting() {
  return (
    <div className="setting-container">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <h1 className="setting-title">Settings</h1>

      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <button className="upload-button">Upload Profile Picture</button>
      </div>

      <div className="setting-options">
        <h2>Account Settings</h2>
        <ul>
          <li>Change Password</li>
          <li>Language Preferences</li>
          <li>Notification Settings</li>
        </ul>

        <h2>Profile Settings</h2>
        <ul>
          <li>Edit Profile</li>
          <li>Privacy Settings</li>
          <li>Manage Devices</li>
        </ul>
      </div>
    </div>
  );
}

export default Setting;
