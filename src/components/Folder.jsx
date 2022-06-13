import React from "react";
import { motion } from "framer-motion";
import "./css/Folder.css";

function Folder(props) {
  const color = ["#9C2828", "#3F9C28", "#282C9C"];
  const index_color = parseInt(props.color) - 1;
  const folder_color = color[index_color];
  const title_size = props.title_size;
  const { demo, github, docs, install, codepen } = props;

  return (
    <>
      <div className="folder">
        <div className="col">
          <div className="top-row">
            <i
              className="fa-regular fa-folder"
              style={{ color: folder_color }}
            ></i>
            <div className="right-row">
              {github != null ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <motion.i
                    className="fa-brands fa-github"
                    whileHover={{ color: folder_color }}
                  ></motion.i>
                </a>
              ) : null}
              {docs != null ? (
                <a
                  href={docs}
                  target="_blank"
                  rel="noreferrer"
                  title="Documentation"
                >
                  <motion.i
                    className="fa-solid fa-file-lines"
                    whileHover={{ color: folder_color }}
                  ></motion.i>
                </a>
              ) : null}
              {install != null ? (
                <a
                  href={install}
                  target="_blank"
                  download
                  rel="noreferrer"
                  title="Download"
                >
                  <motion.i
                    className="fa-solid fa-download"
                    whileHover={{ color: folder_color }}
                  ></motion.i>
                </a>
              ) : null}
              {codepen != null ? (
                <a
                  href={codepen}
                  target="_blank"
                  rel="noreferrer"
                  title="Codepen"
                >
                  <motion.i
                    className="fa-brands fa-codepen"
                    whileHover={{ color: folder_color }}
                  ></motion.i>
                </a>
              ) : null}
              {demo != null ? (
                <a
                  href={props.demo}
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <motion.i
                    className="fa-solid fa-arrow-up-right-from-square folder-demo"
                    whileHover={{ color: folder_color }}
                  ></motion.i>
                </a>
              ) : null}
            </div>
          </div>

          <span className="title" style={{ fontSize: title_size || "1.5rem" }}>
            {props.title}
          </span>
          <span className="description">{props.description}</span>
          <div className="tools">
            <span className="tool1">{props.tool1}</span>
            <span className="tool2">{props.tool2}</span>
            <span className="tool3">{props.tool3}</span>
            <span className="tool4">{props.tool4}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Folder;
