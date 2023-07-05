/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import PopularJobs from "../Component/Shared/popular-jobs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HeadingCont title={"Who we Are?"} />
   
      <AboutUs />
      <PopularJobs />
    </>
  );
};

export default HomePage;
