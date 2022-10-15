import React from "react";
import "./Interactive.css";

const Interactive = () => {
  return (
    <section className="container">
      <h1 className="numbered-title mb-12">
        <span className=" faded">03</span> Interactive elements
      </h1>
      <div></div>
      <div className="flex mt-14">
        <div>
          <a
            className="large-button uppercase ff-serif fs-600 bgc-white text-dark rounded-full"
            href="/"
          >
            Explore
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Interactive;
