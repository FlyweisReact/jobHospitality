/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="Event_Booking-Banner Find-Work-Banner">
      <div className="upper">
        <h5>Find Work</h5>
        <p>
          Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
          <br />
          we have helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <p className="desc">LOOKING FOR</p>
            <h5>Casual & Permanent Job</h5>
            <Link to="/permanent-job">
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
