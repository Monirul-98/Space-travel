import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../../assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className="ff-sans-cond">
        <ul className="primary-nav flex underline-indicators ">
          <li>
            <CustomLink
              to="/"
              className="uppercase letter-spacing-3 text-white "
            >
              <span className="mr-3 font-bold">00</span> Home
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/destination"
              className="uppercase letter-spacing-3 text-white"
            >
              <span className="mr-3 font-bold">01</span> Destination
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/crew"
              className="uppercase letter-spacing-3 text-white"
            >
              <span className="mr-3 font-bold">02</span> Crew
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/technology"
              className="uppercase letter-spacing-3 text-white"
            >
              <span className="mr-3 font-bold">03</span> Technology
            </CustomLink>
          </li>
          {/* <li>
            <CustomLink
              to="/design"
              className="uppercase letter-spacing-3 text-white"
            >
              <span className="mr-3 font-bold">04</span> Design
            </CustomLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
