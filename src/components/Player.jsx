
import React from 'react';

function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://placehold.co/300x300?text=Player"
}) {
  return (
    <div
      className="card shadow"
      style={{
        width: "18rem",
        borderRadius: "15px",
        overflow: "hidden",
        margin: "15px",
        backgroundColor: "#ffffff"
      }}
    >
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{
          height: "200px",
          objectFit: "cover"
        }}
      />

      <div className="card-body text-center">
        <h3 className="card-title fw-bold">{name}</h3>

        <p className="card-text">
          <strong>Team:</strong> {team}
        </p>

        <p className="card-text">
          <strong>Nationality:</strong> {nationality}
        </p>

        <p className="card-text">
          <strong>Jersey Number:</strong> {jerseyNumber}
        </p>

        <p className="card-text">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}

export default Player;

