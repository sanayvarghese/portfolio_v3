import React, { useEffect, useState } from "react";
import WorkContainer from "../components/Work_Container";
import "./css/Work.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Folder from "../components/Folder";
import VideoModal from "../components/Model/VideoModal";

// Projects Images

import shoppinglist from "../images/Projects/shoppinglist.jpg";
import dragongear from "../images/Projects/dragongear.PNG";
import thundergear from "../images/Projects/thundergear.PNG";
import urlshortner from "../images/Projects/urlshortner.PNG";

function Work() {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  // =======================Work Container==========================//

  const folderslist = [
    {
      color: "1",
      title: "Cloud Gun",
      description:
        "Cloud storage where you can securely upload and store your photos, videos, and files",
      github: "https://github.com/sanayvarghese/Cloud_Gun",
      demo: "https://cloudgun.tk/",
      tool1: "React",
      tool2: "Firebase",
      tool3: "Css",
      tool4: "VS Code",
    },
    {
      color: "2",
      title: "Google Sheets x Excel",
      description:
        "Free and easy way to connet Microsoft Excel with Google Sheet for realtime data.",
      docs: "https://blog.sanayvarghese.tk/posts/sync-excel-googlesheet/",
      demo: "https://linkifly.tk/excelxsheets_demo",
      tool1: "Microsoft Excel",
      tool2: "Google Sheets",
    },
    {
      color: "3",
      title: "HTML Form x Google Sheets",
      title_size: "1.3rem",
      description:
        "A Simple way to connect Html form to Google Sheets and send data from the form",
      github: "https://github.com/sanayvarghese/html_x_googlesheet",
      docs: "https://blog.sanayvarghese.tk/posts/html-googlesheets/",
      tool1: "Html",
      tool2: "Google Sheets",
      tool3: "AppScript",
      tool4: "JavaScript",
    },
  ];

  //==========================Animation===============================//

  const { ref: workheading, inView: workheadinginvew } = useInView({
    triggerOnce: true,
  });
  // eslint-disable-next-line
  const workanimation = useAnimation();
  const { ref: otherworkref, inView: otherworkinview } = useInView({
    triggerOnce: true,
  });
  // eslint-disable-next-line
  const otherworksanimation = useAnimation();
  useEffect(() => {
    if (otherworkinview) {
      // eslint-disable-next-line
      otherworksanimation.start({
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
      otherworksanimation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [otherworkinview]);
  useEffect(() => {
    if (workheadinginvew) {
      // eslint-disable-next-line
      workanimation.start({
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
      workanimation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [workheadinginvew]);
  // =====================LoadMore===============================//
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
      <div className="work-main" id="work">
        <motion.span
          className="header_work"
          ref={workheading}
          animate={workanimation}
        >
          Work
        </motion.span>
        <div className="container">
          <WorkContainer
            left="false"
            github="https://github.com/sanayvarghese/dragongear.tk"
            demo="https://dragongear.tk"
            image={dragongear}
            title="Dragon Gear"
            description="A minimal, responsive static website made with HTML, CSS, Scss, and
          JavaScript. Made at age of 14. Inspired By Travery Media"
            tools1="VS Code"
            tools2="JavaScript"
            tools3="Scss"
            tools4="Css"
            tools5="Html"
            description_color1="#2b1431"
            description_color2="#2d0d37"
            icon_color="#6c1f8a"
          />

          <WorkContainer
            left="true"
            github="https://github.com/sanayvarghese/Linkifly"
            demo="https://linkifly.tk/"
            image={urlshortner}
            title="Linkifly URL Shortner"
            description="Fast and efficient URL Shortener where you can shorten your long URL with custom key words."
            tools1="Node.js"
            tools2="Ejs"
            tools3="Mongodb"
            tools4="Css"
            tools5="VS Code"
            description_color1="#0A111C"
            description_color2="#170D37"
            icon_color="#1f388a"
          />
          <WorkContainer
            left="false"
            github="https://github.com/sanayvarghese/Shopping_List"
            install="https://linkifly.tk/shoppinglist"
            image={shoppinglist}
            title="Shopping List"
            description="Add your Shopping list items and make it accessible on multiple devices with offline support and secure authentication."
            tools1="VS Code"
            tools2="Expo"
            tools3="Firebase"
            tools4="React-Native"
            description_color1="#0A1C19"
            description_color2="#0D3715"
            icon_color="#288a1f"
            imageonclick={() => {
              setOpenVideoModal(true);
            }}
            promo={() => {
              setOpenVideoModal(true);
            }}
          />
          <WorkContainer
            left="true"
            github="https://github.com/sanayvarghese/thundergear"
            demo="http://thundergear.tk"
            image={thundergear}
            title="Thunder Gear"
            description="Thunder Gear is my first portfolio which was made at the age of 12. It is a static website"
            tools1="Html"
            tools2="Css"
            tools3="JavaScript"
            tools4="Atom"
            description_color1="#1C0A0A"
            description_color2="#370D0D"
            icon_color="#8a1f1f"
          />
        </div>
        <VideoModal
          open={openVideoModal}
          onClose={() => setOpenVideoModal(false)}
        />
        <div className="container-otherworks">
          <motion.div
            className="other_things"
            ref={otherworkref}
            animate={otherworksanimation}
          >
            <span className="sub_heading">Other Projects</span>
            <div className="folders">
              {folderslist.map((folder, index) => {
                return (
                  <Folder
                    color={folder.color}
                    title={folder.title}
                    description={folder.description}
                    github={folder.github}
                    demo={folder.demo}
                    docs={folder.docs}
                    install={folder.install}
                    codepen={folder.codepen}
                    tool1={folder.tool1}
                    tool2={folder.tool2}
                    tool3={folder.tool3}
                    tool4={folder.tool4}
                    tool5={folder.tool5}
                  />
                );
              })}
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
                title="DG Login"
                description="A Simple Login and Register webapp."
                github="https://dglogin.herokuapp.com/"
                demo="https://dglogin.herokuapp.com/"
                tool1="Node.js"
                tool2="Mongodb"
                tool3="Passport.js"
                tool4="Ejs"
              />
              <Folder
                color="3"
                title="TIC TAC TOE"
                description="Unbeatable TIC TAC TOE game with simple UI"
                github="https://github.com/sanayvarghese/TicTacToe"
                demo="https://tictactoe.sanayvarghese.tk/"
                tool1="Html"
                tool2="Css"
                tool3="JavaScript"
                tool4="Atom"
              />

              <Folder
                color="1"
                title="Rock Paper Scissors"
                description="A Simple Rock Paper Scissors game against the computer. Inspired By Dev Ed"
                github="https://github.com/sanayvarghese/rockpaperscissors"
                demo="https://rockpaperscissors.sanayvarghese.tk/"
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
                color="3"
                title="Word Scorer"
                description="Webapp to Increase your typing speed. Type the words shown on screen in 3 seconds and earn your score"
                github="https://github.com/sanayvarghese/Word_Scorer"
                demo="https://wordscorer.sanayvarghese.tk/"
                tool1="Html"
                tool2="Bootstrap"
                tool3="JavaScript"
                tool4="Atom"
              />
              <Folder
                color="1"
                title="Weight Converter"
                description="Convert Weight into different Units of Weight. Inspired By Traversy Media"
                github="https://github.com/sanayvarghese/weightconverter"
                demo="https://weightconverter.sanayvarghese.tk/"
                tool1="Html"
                tool2="Bootstrap"
                tool3="JavaScript"
                tool4="Atom"
              />
              <Folder
                color="2"
                title="Text to Speeh"
                description="Change some Text to speech in different voice. You can also change Pitch and speed of the voice"
                github="https://github.com/sanayvarghese/text-to-speech"
                demo="https://text-speech.sanayvarghese.tk/"
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
      </div>
    </>
  );
}

export default Work;
