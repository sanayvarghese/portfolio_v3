import React, { useState, useEffect } from "react";
import "./css/Contact.css";
import emailjs from "emailjs-com";
import Modal from "../components/Model/Modal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref: contactref, inView } = useInView({ triggerOnce: true });
  // eslint-disable-next-line
  const contactanimation = useAnimation();

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line
      contactanimation.start({
        y: [80, 0],
        opacity: [0, 1],
        transition: {
          duration: 1.5,
          delay: 0.5,
          type: "spring",
          bounce: 0.5,
          stiffness: 200,
          damping: 100,
        },
      });
    } else {
      // eslint-disable-next-line
      contactanimation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [inView]);

  const [openModal, setOpenModal] = useState(false);
  const contact_form = document.getElementById("form_contact");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xrxm4k",
        "template_9zmsk9m",
        e.target,
        "twUUnzQi3UuiONRvb"
      )
      .then(() => {
        contact_form.reset();
        setOpenModal(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <motion.div
        className="contact-main"
        id="contact"
        ref={contactref}
        animate={contactanimation}
      >
        <span className="header_contact">Contact</span>
        <div className="col">
          <span className="heading_sub">Get In Touch</span>
          <span className="top_text_contact">
            Feel free to send an email on{" "}
            <p className="underline-a">
              <a href="mailto:helloto.sanay@gmail.com" title="Mail">
                helloto.sanay@gmail.com
              </a>
            </p>
          </span>
          <span className="middle_text_contact">or</span>
          <form onSubmit={sendEmail} id="form_contact">
            <div className="contact-form">
              <div className="field_container">
                <span className="field_text">Name: </span>
                <input type="text" className="input" name="name" required />
              </div>
              <div className="field_container">
                <span className="field_text">Email: </span>
                <input type="email" className="input" name="email" required />
              </div>
              <div className="field_container">
                <span className="field_text_msg">Message: </span>
                <textarea
                  name="message"
                  id="message"
                  cols="31"
                  rows="3"
                  className="message_box"
                  required
                ></textarea>
              </div>

              <div className="btn">
                <button className="submit_btn" value="Send" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>

          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
