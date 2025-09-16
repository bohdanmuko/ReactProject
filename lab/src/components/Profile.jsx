import React from "react";
import "./Profile.css"

function Profile({ name, role, avatarUrl }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default Profile;