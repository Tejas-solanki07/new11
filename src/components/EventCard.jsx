import React from "react";

const EventCard = () => {
  return (
    <div className="event-card">
      <h1>Be The Master Of Volume - Kostya</h1>

      <p className="location">
        Jio Convention Centre, Mumbai • 8.5 km away
      </p>

      <p className="price">₹1000 onwards</p>

      <div className="details">
        <p>🕒 3 PM</p>
        <p>⏱ 4 Hours</p>
        <p>🌐 Hindi, English</p>
      </div>

      <button className="book-btn">Book Tickets</button>
    </div>
  );
};

export default EventCard;