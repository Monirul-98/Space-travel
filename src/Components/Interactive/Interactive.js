import React from "react";
import Button from "./Button/Button";
import Dots from "./Button/Dots/Dots";
import Numbers from "./Button/Numbers/Numbers";
import "./Interactive.css";
import Navigation from "./Navigation/Navigation";

const Interactive = () => {
  return (
    <section className="container">
      <h1 className="numbered-title mb-12">
        <span className=" faded">03</span> Interactive elements
      </h1>
      <Navigation></Navigation>
      <div className="flex mt-24 ml-16 justify-between">
        <div>
          <a
            className="large-button uppercase ff-serif fs-600 bgc-white text-dark rounded-full"
            href="/"
          >
            Explore
          </a>
        </div>
        <div className="mb-12 mr-40">
          <Button></Button>
          <Dots></Dots>
          <Numbers></Numbers>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
