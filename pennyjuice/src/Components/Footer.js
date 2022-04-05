import React from "react";
import './Footer.css'
function Footer() {
  return (
    <>
      <section className="main-footer"> 
      <img src="./images/trainbanner.png" />
      <div className="foot-content">
        <p className="p1">About Us</p>
        <p className="p2">Privacy Policy</p>
        <p className="p3">Conditions of Use</p>
        <p className="p4">Web Accessibility</p>
        <p className="p5">Contact Us</p>
        </div>
        <p className="copyright">@2022 The content on this website is publuicly free to use. Please contact for any additional questions.</p>
      </section>
    </>
  );
}

export default Footer;
