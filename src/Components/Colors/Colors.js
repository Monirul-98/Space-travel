import React from "react";
import "./Colors.css";

const Colors = () => {
  return (
    <div className="container">
      <h1 className="numbered-title">
        <span className=" faded">01</span> Colors
      </h1>
      <section id="colors" className="grid">
        <div className="text-white">
          <div className="color-box color-box-dark bg-dark">#0B0D17</div>
          <div className="text-light">
            <p>
              <span className="color-name">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="color-name">HSL</span> 230°, 35%, 7%
            </p>
          </div>
        </div>
        <div className="text-dark">
          <div className="color-box color-box-light bg-light">#D0D6F9</div>
          <div className="text-light">
            <p>
              <span className="color-name">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="color-name">HSL</span> 231°, 77%, 90%
            </p>
          </div>
        </div>
        <div className="text-dark">
          <div className="color-box color-box-white bg-white">#0B0D17</div>
          <div className="text-light">
            <p>
              <span className="color-name">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="color-name">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Colors;
