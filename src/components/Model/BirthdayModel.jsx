import React, { useState, useEffect } from "react";
import "./BirthDayModel.css";
import { motion } from "framer-motion";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 2100);
  }, []);

  return (
    <>
      {modal && (
        <motion.div
          className="modal"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1], opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 20 }}
        >
          <div
            onClick={toggleModal}
            className="overlay"
            style={{ zIndex: 21 }}
          ></div>
          <motion.div className="modal-content" style={{ zIndex: 25 }}>
            <h2>Birthday Special</h2>
            <p className="pmodal">
              First to Redeem the Google Play Redeem Code will only get the
              prize
            </p>
            <button
              onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText("B1078BE5YWLKRBDW");
              }}
              className={copied ? "copied" : "notcopied"}
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
            <p className="closeBtn" onClick={toggleModal}>
              <i className="fa-solid fa-close"></i>
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
