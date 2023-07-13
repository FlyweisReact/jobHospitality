/** @format */

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import EventBooking from "./Pages/EventBooking";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import FindWork from "./Pages/FindWork";
import Staff from "./Pages/Staff";
import Courses from "./Pages/Courses";
import Community from "./Pages/Community";
import StaffLoginIn from "./Pages/StaffLoginIn";
import BookAnEvent from "./Pages/book-an-event";
import BookFullService from "./Pages/book-full-service";
import PermanentJob from "./Pages/permanent-job";
import CasualStaff from "./Pages/casual-staff";
import PermanentStaff from "./Pages/permanent-staff";
import ClientLoginIn from "./Pages/client-logIn";
import { AnimatePresence } from "framer-motion";
import HOC from "./Pages/HOC";

const AnimatedRoutes = () => {
  const location = useLocation();

  const Wrapper = ({ childer }) => {
    return <HOC> {childer} </HOC>;
  };

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Wrapper childer={<HomePage />} />} />
          <Route path="/about-us" element={<Wrapper childer={<AboutUs />} />} />
          <Route path="/event-booking" element={ <Wrapper childer={<EventBooking />} />}   />
          <Route path="/contact-us" element={  <Wrapper childer={<ContactUs />} />} <ContactUs />} />
          <Route path="/sign-in" element={ <Wrapper childer={<SignIn />} />} <SignIn />} />
          <Route path="/find-work" element={ <Wrapper childer={<FindWork />} />} <FindWork />} />
          <Route path="/staff" element={ <Wrapper childer={<Staff />} />} <Staff />} />
          <Route path="/courses" element={  <Wrapper childer={<Courses />} />}  />
          <Route path="/community" element={  <Wrapper childer={<Community />} />} />
          <Route path="/staff-logIn" element={  <Wrapper childer={<StaffLoginIn />} />} />
          <Route path="/book-an-event" element={  <Wrapper childer={<BookAnEvent />} />} />
          <Route path="/book-full-bar" element={  <Wrapper childer={<BookFullService />} />}  />
          <Route path="/permanent-job" element={ <Wrapper childer={<PermanentJob />} />}/>
          <Route path="/casual-staff" element={  <Wrapper childer={<CasualStaff />} />}  />
          <Route path="/permanent-staff" element={  <Wrapper childer={<PermanentStaff />} />} />
          <Route path="/client-login" element={ <Wrapper childer={<ClientLoginIn />} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
