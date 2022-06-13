import React from "react";
import "./css/Particles.scss";
import "./css/PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <div class="page-bg"></div>
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
      <div className="error-page-content">
        {/* underline text */}
        {/* how to make a h1 underline */}
        <h1 className="error-page-title">404.</h1>
        <h2 className="error-page-subtitle">Page not found</h2>
        <p className="error-page-text">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="back-to-home">
          Go back to home
        </a>
      </div>
    </>
  );
}

export default PageNotFound;
