import React from "react";
import "./Dots.css";

const Dots = () => {
  return (
    <div className="dot-indicators flex mb-16">
      <button className="dot-btn">
        <span className="sr-only">Slide title</span>
      </button>

      <button className="dot-btn">
        <span className="sr-only">Slide title</span>
      </button>

      <button className="dot-btn">
        <span className="sr-only">Slide title</span>
      </button>
    </div>
  );
};

export default Dots;
