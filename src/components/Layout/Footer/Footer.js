import React from "react";
import "./Footer.scss";
import logoImg from "../../../images/logo.svg";
import facebookLogo from "../../../images/icon-facebook.svg";
import twitterLogo from "../../../images/icon-twitter.svg";
import instagramLogo from "../../../images/icon-instagram.svg";
import pinterestLogo from "../../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"footer-logo"}>
        <img src={logoImg} alt="Shortly Logo" />
      </div>
      <div className={"footer-links"}>
        <div className={"footer-links-column"}>
          <h2>Features</h2>
          <a href="#inputLink">Link Shortening</a>
          <a href="#inputLink">Branded Link</a>
          <a href="#inputLink">Analytics</a>
        </div>
        <div className={"footer-links-column"}>
          <h2>Resources</h2>
          <a href="#inputLink">Blog</a>
          <a href="#inputLink">Developers</a>
          <a href="#inputLink">Support</a>
        </div>
        <div className={"footer-links-column"}>
          <h2>Company</h2>
          <a href="#inputLink">About</a>
          <a href="#inputLink">Our team</a>
          <a href="#inputLink">Careers</a>
          <a href="#inputLink">Connect</a>
        </div>
      </div>
      <div className={"footer-socials"}>
        <a href={"#inputLink"}>
          <img src={facebookLogo} alt={"Facebook Logo"} />
        </a>
        <a href={"#inputLink"}>
          <img src={twitterLogo} alt={"Twitter Logo"} />
        </a>
        <a href={"#inputLink"}>
          <img src={instagramLogo} alt={"Instagram Logo"} />
        </a>
        <a href={"#inputLink"}>
          <img src={pinterestLogo} alt={"Pinterest Logo"} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
