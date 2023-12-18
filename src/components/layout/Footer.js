import React from "react";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
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
          <div className="col-lg-4 col-md-6 col-sm-6 ft-1">
            <a className="navbar-brand" href="/">
              <img src={Footerlogo} alt="footer-logo" className="footerlogo" />
            </a>
            <b>Culture Concept</b>
            <p>
              We are tending to the thousands of details it takes to create a
              custom home tailored to your lifestyle
            </p>

            <div className="social-icons">
              <a
                href="https://instagram.com/cultureconcept.in?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com/cultureconceptinterio?mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a href="https://x.com/cultconintsol?s=11" target="_blank">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/culture-concept-interior-solutions/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="registration">
              All rights reserved. Copyright © cultureconcept.in.            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 ft-3">
            <a
              href="https://www.google.com/maps/place/Culture+Concept+Interior+Solutions/@17.5288886,78.35442,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8d93c883c051:0xf654317d73b1e1a8!8m2!3d17.5288835!4d78.3569949!16s%2Fg%2F11j8wwny89?entry=ttu"
              target="_blank"
            >
              <div className="address">
                <h5>
                  <span>
                    <FaLocationDot />
                  </span>
                  Address
                </h5>
              </div>
              <div className="address-text">
                Culture Concept, 3rd floor, Plot no: 194, <br />
                Survay Of India, Road No-38, Ayappa Socity,
                <br />
                Madhapur, Hyderabad-500081.
              </div>
            </a>
            <div className="Footer-phone">
              <a href="tel:9966741412" target="_blank">
                +91 9966741412
              </a>
            </div>
            <div className="registration">
              <a
                href="mailto:hello@cultureconcept.in?subject=Project Enquiry"
                target="_blank"
              >
                hello@cultureconcept.in
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ft-4">
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
          <div className="col-lg-2 col-md-6 col-sm-6 ft-6">
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
