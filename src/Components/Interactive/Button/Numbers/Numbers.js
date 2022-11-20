import React from "react";
import "./Numbers.css";

const Numbers = () => {
  return (
    <div className="flex flex-col items-start">
      <button className="numbered-btn">1</button>
      <button className="numbered-btn">2</button>
      <button className="numbered-btn">3</button>
    </div>
  );
};

export default Numbers;
