/** @format */

import React from "react";
import { motion } from "framer-motion";

const HOC = ({ children }) => {
  return (
    // <motion.div
    //   initial={{
    //     width: 0,
    //     transition: { duration: 1 },
    //   }}
    //   animate={{
    //     width: "100%",
    //   }}
    //   exit={{
    //     x: window.innerWidth,
    //     transition: { duration: 0.5 },
    //   }}
    // >
   <div>
   {children}
   </div>
    // </motion.div>
  );
};

export default HOC;
