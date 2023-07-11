/** @format */
import { Link } from "react-router-dom";
import React from "react";


const Banner = () => {
  return (
    <div className="Banner">
      <div className="content">
        <h2>
          Find & Hire Experts <br /> for any Job
        </h2>
        <p>
          Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
          <br />
          we've helped recruit excellent applicants over the years.
        </p>
        <div className="two_button">
          <Link to="/find-work">
            <button>
              {" "}
              <img src="./Image/1.svg" alt="" /> Find Work
            </button>
          </Link>

          <Link to="/staff">
            <button>
              {" "}
              <img src="./Image/1.svg" alt="" /> Find Talented Staff
            </button>
          </Link>
        </div>
        <Link to="/courses">
          <button className="Bottom_Button">
            {" "}
            <img src="./Image/1.svg" alt="" /> School for Bartending...JOIN NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
