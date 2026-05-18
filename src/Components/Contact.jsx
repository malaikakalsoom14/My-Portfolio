import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      
      <div className="footer-left">
        <span className="footer-number">05</span>
        <h2>Contact</h2>
        <p>
          Let's work together and create
          <br />
          something amazing.
        </p>
      </div>

      <div className="footer-right">

        <div className="footer-box">
          <h4>Email</h4>
          <p>malaikakalsoom14@gmail.com</p>
        </div>

        <div className="footer-box">
          <h4>Phone</h4>
          <p>+92 334 9818047</p>
        </div>
 <div className="footer-box">
          <h4>Location</h4>
          <p>Bahawalpur,Pakistan</p>
        </div>
<div className="footer-box">
          <h4>Social</h4>
 <div className="social-links">
            <a href="https://www.linkedin.com/in/malaika-kalsoom-b98492290/">LinkedIn</a>
            <a href="https://github.com/malaikakalsoom14">GitHub</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;