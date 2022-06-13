import React, { useState, useEffect } from "react";
import "./css/Other_Works.css";
import Folder from "./Folder";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function OtherWorks() {
  const { ref: otherworkref, inView } = useInView({ triggerOnce: true });
  const otherworksanimation = useAnimation();

  useEffect(() => {
    if (inView) {
      otherworksanimation.start({
        y: [80, 0],
        opacity: [0, 1],
        transition: {
          duration: 2,
          delay: 0.2,
          type: "spring",
          bounce: 0.5,
          stiffness: 200,
          damping: 100,
        },
      });
    } else {
      otherworksanimation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const [loadMore, setLoadMore] = useState("false");

  function Loadmorebtn() {
    if (loadMore === "false") {
      setLoadMore("half");
    } else if (loadMore === "half") {
      setLoadMore("true");
    } else if (loadMore === "true") {
      setLoadMore("false");
    }
  }

  return (
    <>
      <div className="container">
        <motion.div
          className="other_things"
          ref={otherworkref}
          animate={otherworksanimation}
        >
          <span className="sub_heading">Other Projects</span>
          <div className="folders">
            <Folder
              color="1"
              title="Thunder Gear"
              description="Thunder Gear is my first portfolio which was made at the age of 13. It is a static website"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Css"
              tool3="JavaScript"
              tool4="Atom"
            />
            <Folder
              color="2"
              title="DG Login"
              description="A Simple Login and Register webapp."
              github="https://github.com"
              demo="http://demo.com"
              tool1="Node.js"
              tool2="Mongodb"
              tool3="Passport.js"
              tool4="Ejs"
            />
            <Folder
              color="3"
              title="HTML Form x Google Sheets"
              title_size="1.3rem"
              description="A Simple way to connect Html form to Google Sheets and send data from the form"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Google Sheets"
              tool3="AppScript"
              tool4="JavaScript"
            />
          </div>
          <div
            className={
              loadMore === "half" || loadMore === "true"
                ? "section-two half_section"
                : "dp-none"
            }
          >
            <Folder
              color="2"
              title="TIC TAC TOE"
              description="Unbeatable TIC TAC TOE game with simple UI"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Css"
              tool3="JavaScript"
              tool4="Atom"
            />
            <Folder
              color="3"
              title="Weight Converter"
              description="Convert Weight into different Units of Weight. Inspired By Traversy Media"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Bootstrap"
              tool3="JavaScript"
              tool4="Atom"
            />
            <Folder
              color="1"
              title="Rock Paper Scissors"
              description="A Simple Rock Paper Scissors game against the computer. Inspired By Dev Ed"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Bootstrap"
              tool3="JavaScript"
              tool4="Atom"
            />
          </div>
          <div
            className={
              loadMore === "true" ? "section-two last_section" : "dp-none"
            }
          >
            <Folder
              color="2"
              title="Word Beater"
              description="Webapp to Increase your typing speed. Type the words shown on screen in 3 seconds and earn your score"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Bootstrap"
              tool3="JavaScript"
              tool4="Atom"
            />
            <Folder
              color="3"
              title="Text to Speeh"
              description="Change some Text to speech in different voice. You can also change Pitch and speed of the voice"
              github="https://github.com"
              demo="http://demo.com"
              tool1="Html"
              tool2="Bootstrap"
              tool3="JavaScript"
              tool4="WebSpeech Api"
            />
          </div>
          <button className="showbtn" onClick={Loadmorebtn}>
            {loadMore === "true" ? "Show Less" : "Load More"}
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default OtherWorks;
