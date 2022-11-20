import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <nav className="ff-sans-cond ">
        <ul className="primary-nav flex justify-center underline-indicators">
          <li className="active">
            <a
              href="/"
              className="uppercase letter-spacing-2 text-white active"
            >
              <span className="mr-3 font-bold">00</span> Active
            </a>
          </li>
          <li>
            <a href="/" className="uppercase letter-spacing-2 text-white">
              <span className="mr-3 font-bold">01</span> Hovered
            </a>
          </li>
          <li>
            <a href="/" className="uppercase letter-spacing-2 text-white">
              <span className="mr-3 font-bold">02</span> Idle
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
