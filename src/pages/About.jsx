import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./css/About.css";
import face from "../images/face.jpg";
import flag from "../images/flag.png";
import codepenlogo from "../images/codepen.png";
import githublogo from "../images/github.png";
import hackerranklogo from "../images/hackerrank.png";
import instagramlogo from "../images/insta.png";
import thmlogo from "../images/thm.png";
import ytlogo from "../images/yt.png";
import cssbattle from "../images/cssbattle.png";
import blog from "../images/blog.png";

function About() {
  const { ref: aboutref, inView } = useInView({ triggerOnce: true });
  // eslint-disable-next-line
  const aboutanimation = useAnimation();

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line
      aboutanimation.start({
        y: [80, 0],
        opacity: [0, 1],
        transition: {
          duration: 1.5,
          delay: 0.2,
          type: "spring",
          bounce: 0.5,
          stiffness: 200,
          damping: 100,
        },
      });
    } else {
      // eslint-disable-next-line
      aboutanimation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [inView]);
  return (
    <>
      <motion.div
        className="about-main"
        id="about"
        ref={aboutref}
        animate={aboutanimation}
      >
        <span className="header_about">About Me</span>
        <div className="container">
          <div className="row_about ">
            <div className="about-txt ">
              <p className="para1">
                My name is Sanay George Varghese. I am a self-taught developer
                and a student.
              </p>
              <p className="para2">
                I love making websites and apps for all platforms. I mainly
                focused on front-end development. I have little experience in
                Ethical Hacking. I started programming at the age of 12.
              </p>
              <p className="para3">
                Here are some of the programming languages, frameworks, and
                libraries I've been working with:
              </p>
              <div className="row">
                <div className="col">
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Html</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Css</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">JavaScript</span>
                  </div>
                </div>
                <div className="col">
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Python</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Flutter</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">React.js</span>
                  </div>
                </div>
                <div className="col">
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Visual Basic</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">React Native</span>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-play"></i>
                    <span className="languages-text">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_about">
              <div className="circle">
                <img
                  src={face}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="details_calender">
                <motion.div
                  className="age"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "1px 1px 1px 1px #000",
                  }}
                >
                  <div className="details_calender_content">
                    <span className="cal_header_text">
                      AGE
                      <i
                        class="fa-solid fa-user-group"
                        style={{ color: "#444" }}
                      ></i>
                    </span>
                    <span className="cal_val">17</span>
                  </div>
                </motion.div>
                <motion.div
                  className="education"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "1px 1px 1px 1px #000",
                  }}
                >
                  <div className="details_calender_content">
                    <span className="cal_header_text ">Education👨‍🎓</span>
                    <span className="cal_val edu_text">
                      Christ Central School
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  className="country"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "1px 1px 1px 1px #000",
                  }}
                >
                  <div className="details_calender_content">
                    <span className="cal_header_text">Country🌏</span>
                    <span className="cal_val">
                      <img src={flag} alt=" " className="flag" />
                      IND
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="social_media">
            <span className="social_media_header">Links</span>
            <div className="social_media_icons">
              <motion.a
                href="https://www.instagram.com/sanay_.wh00/"
                className="sm-links-btn instagram"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="Instagram"
              >
                <img src={instagramlogo} alt=" " />
                <span>Instagram</span>
              </motion.a>
              <motion.a
                href="https://github.com/sanayvarghese"
                className="sm-links-btn github"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="Github"
              >
                <img src={githublogo} alt=" " />
                <span>Github</span>
              </motion.a>
              <motion.a
                href="https://hackerrank.com/sanayvarghese"
                className="sm-links-btn hackerrank"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="HackerRank"
              >
                <img src={hackerranklogo} alt=" " />
                <span>HackerRank</span>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/channel/UCa0FFnj0Mn6il_TWu8QO1Og"
                className="sm-links-btn youtube"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="Youtube"
              >
                <img src={ytlogo} alt=" " />
                <span>Youtube</span>
              </motion.a>
              <motion.a
                href="https://tryhackme.com/p/DgH4ck3r"
                className="sm-links-btn tryhackme"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="TryHackMe"
              >
                <img src={thmlogo} alt=" " />
                <span>TryHackMe</span>
              </motion.a>
              <motion.a
                href="https://codepen.io/sanayvarghese"
                className="sm-links-btn codepen"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="CodePen"
              >
                <img src={codepenlogo} alt=" " />
                <span>CodePen</span>
              </motion.a>
              <motion.a
                href="https://cssbattle.dev/player/wZcj0WYY8RSmQ5zTTVCTXtFC41i2"
                className="sm-links-btn cssbattle"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="CSS Battle"
              >
                <img src={cssbattle} alt=" " />
                <span>CssBattle</span>
              </motion.a>
              <motion.a
                href="https://blog.sanayvarghese.tk/"
                className="sm-links-btn blog"
                whileHover={{ scale: 1.05, boxShadow: "1px 1px 1px 1px #000" }}
                title="Blog"
              >
                <img src={blog} alt=" " />
                <span>Blog</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
