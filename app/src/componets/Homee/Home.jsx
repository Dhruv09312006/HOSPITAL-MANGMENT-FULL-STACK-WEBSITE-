import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Background Video */}
      <video
        src="https://media.istockphoto.com/id/1632593384/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BF%D0%BE%D0%B6%D0%B8%D0%BB%D0%BE%D0%B9-%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82-%D0%B8-%D0%BC%D0%B5%D0%B4%D1%81%D0%B5%D1%81%D1%82%D1%80%D0%B0-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D1%8E%D1%82-%D1%81-%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%BC-%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%BE%D0%BC-%D0%B8-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%BC.mp4?s=mp4-640x640-is&k=20&c=OAX8bizQDohg0dceiRfMyunuOoxFLuXB53FjYQSRo0w="
        autoPlay
        loop
        muted
        className="home-video"
      />

      {/* Dark overlay for good visibility */}
      <div className="dark-overlay"></div>

      {/* Home Content */}
      <div className="home-text">
        <h1>
          WE CARE ABOUT <br />
          <span>YOUR HEALTH</span>
        </h1>

        <p>
          Our doctors are highly experienced professionals, dedicated to
          providing the best medical care and personal attention for every
          patient.
        </p>
      </div>

    </div>
  );
}
