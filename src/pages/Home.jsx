import React from "react";
import "./css/Home.css";
import { motion } from "framer-motion";

function Home() {
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="main" id="home">
      <div className="home">
        <motion.div
          className="textdiv"
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <p className="basic-text">Hi there 👋, I'm</p>
          <p className="big-text">Sanay George Varghese.</p>
          <p className="basic-text2">STUDENT + DEVELOPER 👨‍💻</p>
          <p className="basic-text3">I'm a self-taught front-end developer.</p>
        </motion.div>
      </div>
      <div className="side">
        <motion.div
          className="links-left"
          animate={{ y: 0, opacity: [0, 1] }}
          transition={{ duration: 2, delay: 1.6 }}
        >
          <a
            href="https://github.com/sanayvarghese"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/_sanay_varghese_/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCa0FFnj0Mn6il_TWu8QO1Og"
            target="_blank"
            rel="noreferrer"
            title="Youtube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://hackerrank.com/sanayvarghese"
            target="_blank"
            rel="noreferrer"
            title="HackerRank"
          >
            <i className="fa-brands fa-hackerrank"></i>
          </a>
          <div className="link-left-after"></div>
        </motion.div>

        <motion.div
          className="emaildiv"
          animate={{ y: 0, opacity: [0, 1] }}
          transition={{ duration: 2, delay: 1.6 }}
        >
          <a
            className="email"
            href="mailto:helloto.sanay@gmail.com"
            title="Mail"
          >
            helloto.sanay@gmail.com
          </a>
          <div className="email-right"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
