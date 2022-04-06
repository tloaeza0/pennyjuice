import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
function Footer() {
  return (
    <>
      <section className="main-footer">
        <div>
          
        </div>
        <div className="foot-content">
          <p className="p1">About Us</p>
          <p className="p2">Privacy Policy</p>
          <p className="p3">Conditions of Use</p>
          <p className="p4">Web Accessibility</p>
          <p className="p5">Contact Us</p>
        </div>
        <p className="copyright">
          @2022 The content on this website is publicly free to use. Please
          contact for any additional questions.
        </p>
      </section>
    </>
  );
}

export default Footer;
