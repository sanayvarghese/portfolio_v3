import React from "react";
import "./Loading.css";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";

function Loading() {
  const zoomin = {
    opacity: [0, 1],
    transition: {
      duration: 1.5,
    },
  };
  const logoanimation = {
    rotate: [0, 360],

    transition: {
      duration: 2.2,
      delay: 0.5,
    },
  };
  const exit = {
    opacity: [1, 0],
    transition: {
      duration: 1,
      delay: 3,
    },
  };

  return (
    <>
      <div className="loading_container">
        <motion.div animate={zoomin}>
          <motion.div className="exit" animate={logoanimation}>
            <motion.img
              src={logo}
              alt=""
              animate={exit}
              title="Logo"
              className="loading_logo"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Loading;
