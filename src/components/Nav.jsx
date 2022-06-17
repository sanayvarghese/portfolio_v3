import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Nav.css";
import "./css/gradient.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [NavBlur, setNavBlur] = useState(true);

  const closeMenu = () => setClick(false);

  const navblurchange = () => {
    if (window.scrollY >= 100) {
      setNavBlur(false);
    } else {
      setNavBlur(true);
    }
  };

  window.addEventListener("scroll", navblurchange);

  return (
    <div className="nav-container">
      <section class={NavBlur ? "seperator-wrapper" : "seperator-wrapper blur"}>
        <div class="seperator gradient"></div>
      </section>
      <nav className={NavBlur ? "navbar" : "navbarblur"}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          onClick={closeMenu}
          title="Logo"
        >
          <motion.img
            src={require("../images/logo.png")}
            className="logo"
            alt="L:ogo"
            animate={{ rotate: [0, 0, 360], scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1.8, delay: 0.5 }}
          />
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <motion.li
            className="nav-item home-nav"
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            className="nav-item about-nav"
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </motion.li>
          <motion.li
            className="nav-item work-nav"
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Work
            </Link>
          </motion.li>
          <motion.li
            className="nav-item contact-nav"
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </motion.li>
          <motion.li
            className="nav-item nav_outlinedbtn"
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 2 }}
          >
            <a href="https://blog.sanayvarghese.tk">Blog</a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
