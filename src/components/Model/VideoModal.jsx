import React from "react";
import ReactPlayer from "react-player";
import "./VideoModal.css";

function VideoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="videomodalContainer"
      >
        <div className="videomodalRight">
          <p className="videocloseBtn" onClick={onClose}>
            <i className="fa-solid fa-close"></i>
          </p>
          <div className="videocontent">
            <h1>Shopping List</h1>

            <ReactPlayer
              url="https://firebasestorage.googleapis.com/v0/b/brad-gallery1.appspot.com/o/InShot_20210812_190012645.mp4?alt=media&token=87ab5c8b-a60b-4173-b927-3f0e946b26eb"
              controls={true}
              width="100%"
              height="300px"
              volume={0.5}
            />
          </div>
          <div className="videobtnContainer">
            <button className="videobtnOutline" onClick={onClose}>
              <span className="bold">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
