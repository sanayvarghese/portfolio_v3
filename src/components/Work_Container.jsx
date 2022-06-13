import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./css/Work_Container.css";

function WorkContainer(props) {
  const { ref: workcontaineref, inView } = useInView({ triggerOnce: true });
  // eslint-disable-next-line
  const workcontaineranimation = useAnimation();

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line
      workcontaineranimation.start({
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
      workcontaineranimation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [inView]);

  const left = props.left === "true";

  const { demo, github, docs, install, codepen } = props;

  return (
    <>
      <motion.div
        className="work_container"
        ref={workcontaineref}
        animate={workcontaineranimation}
      >
        <div className={left ? "work_container_left" : "dp-none"}>
          <div className="heading1_left" style={{ display: "none" }}>
            {props.title}
          </div>
          <motion.div
            className="project_pic_left"
            whileHover={{
              scale: 1.05,
              boxShadow: "1px 1px 1px 1px #000",
              filter: "none",
            }}
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(100%)",
            }}
            onClick={props.onClick}
          ></motion.div>
          <div className="right_left">
            <div className="col">
              <div className="heading2_left">{props.title}</div>
              <div
                className="proj_description_left"
                style={{
                  background: `transparent linear-gradient(180deg, ${props.description_color1} 0%, ${props.description_color2} 100%) 0% 0% no-repeat padding-box`,
                }}
              >
                <span className="des_text_left">{props.description}</span>
              </div>
              <div className="bellow_des_left">
                <div className="tools_left row">
                  <span className="tool_name_left">{props.tools1}</span>
                  <span className="tool_name_left">{props.tools2}</span>
                  <span className="tool_name_left">{props.tools3}</span>
                  <span className="tool_name_left">{props.tools4}</span>
                  <span className="tool_name_left">{props.tools5}</span>
                </div>
                <div className="links_left">
                  {github != null ? (
                    <a
                      href={github}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Github"
                    >
                      <motion.i
                        className="fa-brands fa-github"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}

                  {demo != null ? (
                    <a
                      href={demo}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Demo"
                    >
                      <motion.i
                        className="fa-solid fa-arrow-up-right-from-square"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                  {docs != null ? (
                    <a
                      href={docs}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Documentation"
                    >
                      <motion.i
                        className="fa-solid fa-file-lines"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                  {install != null ? (
                    <a
                      href={install}
                      target="_blank"
                      download
                      className="link_work"
                      rel="noreferrer"
                      title="Download"
                    >
                      <motion.i
                        className="fa-solid fa-download"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                  {codepen != null ? (
                    <a
                      href={codepen}
                      target="_blank"
                      download
                      className="link_work"
                      rel="noreferrer"
                      title="Download"
                    >
                      <motion.i
                        className="fa-brands fa-codepen"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================RIGHT================================= */}
        <div className={left ? "dp-none" : "work_container_right"}>
          <div className="heading1_right" style={{ display: "none" }}>
            {props.title}
          </div>
          {props.imageonclick ? (
            <motion.div
              className="project_pic_right"
              whileHover={{
                scale: 1.05,
                boxShadow: "1px 1px 1px 1px #000",
              }}
              style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={props.imageonclick}
            ></motion.div>
          ) : (
            <motion.div
              className="project_pic_right"
              whileHover={{
                scale: 1.05,
                boxShadow: "1px 1px 1px 1px #000",
                filter: "none",
              }}
              style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                filter: "grayscale(100%)",
              }}
            ></motion.div>
          )}
          <div className="right_right">
            <div className="col">
              <div className="heading2_right">{props.title}</div>
              <div
                className="proj_description_right"
                style={{
                  background: `transparent linear-gradient(180deg, ${props.description_color1} 0%, ${props.description_color2} 100%) 0% 0% no-repeat padding-box`,
                }}
              >
                <span className="des_text_right">{props.description}</span>
              </div>
              <div className="bellow_des_right">
                <div className="tools_right row">
                  <span className="tool_name_right">{props.tools5}</span>
                  <span className="tool_name_right">{props.tools4}</span>
                  <span className="tool_name_right">{props.tools3}</span>
                  <span className="tool_name_right">{props.tools2}</span>
                  <span className="tool_name_right">{props.tools1}</span>
                </div>
                <div className="links_right">
                  {github != null ? (
                    <a
                      href={github}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Github"
                    >
                      <motion.i
                        className="fa-brands fa-github"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}

                  {demo != null ? (
                    <a
                      href={demo}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Demo"
                    >
                      <motion.i
                        className="fa-solid fa-arrow-up-right-from-square"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                  {docs != null ? (
                    <a
                      href={docs}
                      target="_blank"
                      className="link_work"
                      rel="noreferrer"
                      title="Documentation"
                    >
                      <motion.i
                        className="fa-solid fa-file-lines"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                  {install != null ? (
                    <a
                      href={install}
                      target="_blank"
                      download
                      className="link_work"
                      rel="noreferrer"
                      title="Download"
                    >
                      <motion.i
                        className="fa-solid fa-download"
                        whileHover={{ color: props.icon_color }}
                      ></motion.i>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WorkContainer;
