import React from "react";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLink,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";
import Footerlogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 ft-1">
            <a className="navbar-brand" href="/">
              <img src={Footerlogo} alt="footer-logo" className="footerlogo" />
            </a>
            <b>Culture Concept</b>
            <p>
              We are tending to the thousands of details it takes to create a
              custom home tailored to your lifestyle
            </p>

            <div className="social-icons">
              <a href="/">
                <FaInstagramSquare />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaTelegramPlane />
              </a>
            </div>
            <div className="registration">
              copy rights all reserved @cultureconcept.in
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 ft-3">
            <div className="address">
              <h5>
                <span>
                  <FaLocationDot />
                </span>
                Address
              </h5>
            </div>
            <div className="address-text">
              Plot no: 727, Flat no: 401, Annamayya Recidency,
              <br /> Road No-38, Ayappa Socity, Madhapur, <br />
              Hyderabad-500081.
            </div>
            <div className="Footer-phone">+91 9966741412</div>
            <div className="registration">hello@cultureconcept.in</div>
          </div>
          <div className="col-lg-2 col-sm-6 ft-4">
            <div className="contact">
              <h5>
                <span>
                  <FaLink />
                </span>
                Link
              </h5>
            </div>
            <div className="nav-links">
              <Link to="/about">About</Link>
              <br />
              <Link to="/projects">Projects</Link>
              <br />
              <Link to="/services">Services</Link>
              <br />
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 ft-6">
            <div className="contact">
              <div className="nav-links">
                <Link to="/policy">Privacy Policy</Link>
                <br />
                <Link to="/policy">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;