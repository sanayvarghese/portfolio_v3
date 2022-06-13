import React from "react";
import "./Modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            <i className="fa-solid fa-close"></i>
          </p>
          <div className="content">
            <h1>Thankyou for Contacting</h1>
            <p>
              I will be trying to reply as soon as posible to the email that you
              have given.
            </p>
          </div>
          <div className="btnContainer">
            <button className="btnOutline" onClick={onClose}>
              <span className="bold">OK</span>
            </button>
            <button className="btnOutline" onClick={onClose}>
              <span className="bold">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
