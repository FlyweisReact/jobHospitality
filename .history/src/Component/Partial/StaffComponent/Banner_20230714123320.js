/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="Event_Booking-Banner">
      <div className="upper">
        <h5>Find Talented Staff</h5>
        <p>
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we have helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <img src="./Image/40.png" alt="" />
            <h5>Casual Staff</h5>
            <Link to="/casual-staff">
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
          <div className="content">
            <img src="./Image/41.png" alt="" />
            <h5>Permanent Staff</h5>
            <Link to="/permanent-staff">
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
