import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <span className="footer_text">Design & Made by Sanay Varghese</span>
        <a
          href="https://github.com/sanayvarghese/portfolio_v3"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github footer-git">
            <span>Github</span>
          </i>
        </a>
        <span className="footer_text">Build in 2021</span>
      </div>
    </>
  );
}

export default Footer;
