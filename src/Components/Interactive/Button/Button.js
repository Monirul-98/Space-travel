import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div className="ff-sans-cond nav-button cursor-pointer mb-12">
      <button
        aria-selected="true"
        className="uppercase text-light letter-spacing-2"
      >
        Moon
      </button>
      <button
        aria-selected="false"
        className="uppercase text-light letter-spacing-2"
      >
        Mars
      </button>
      <button
        aria-selected="false"
        className="uppercase text-light letter-spacing-2"
      >
        Europe
      </button>
    </div>
  );
};

export default Button;
