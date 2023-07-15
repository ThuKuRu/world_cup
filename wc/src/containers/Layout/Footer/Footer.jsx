import React from "react";
import { FooterStyle } from "./index.style";
import FooterLogo from "../img/FooterLogo.png";
import Facebook from "../img/fb.png";
import Instagram from "../img/insta.png";
import Twitter from "../img/twitter_1.png";

const Footer = () => {
  return (
    <FooterStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="footerContainer">
        <div className="constact">
          <img className="logo" src={FooterLogo} alt="/" />
          <div className="socialMedia">
            <img className="icon" src={Facebook} alt="/" />
            <img className="icon" src={Instagram} alt="/" />
            <img className="icon" src={Twitter} alt="/" />
          </div>
        </div>
        <ul className="list">
          <li>
            <h3>Blog</h3>
          </li>
          <li>Tech</li>
          <li>Adventures</li>
          <li>Music</li>
        </ul>
        <ul className="list">
          <li>
            <h3>Product</h3>
          </li>
          <li>App</li>
          <li>Desktop</li>
          <li>Cloud</li>
        </ul>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Enter your email to get notified about our news solutions</p>
          <div className="input">
            <input type="email" />
            <button>
              <span class="material-symbols-outlined">mail</span>
            </button>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
