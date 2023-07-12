/** @format */

import React, { useRef, useEffect } from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/About Us Component/Banner";
import ContentDescription from "../Component/Partial/About Us Component/content-description";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import TwoSection from "../Component/Partial/About Us Component/two-section";
import $ from "jquery";
import "turn.js";

const AboutUs = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    $(bookRef.current).turn({
      width: 800,
      height: 600,
      autoCenter: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div id="book" ref={bookRef}>
        <Navbar />
        <Banner />
        <ContentDescription />
        <ContentDescription />
        <TwoSection />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
