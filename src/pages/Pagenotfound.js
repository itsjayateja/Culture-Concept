import React from "react";
import { Link } from "react-router-dom";
import "./Pagenotfound.css";
import pnfimg from "../assets/pnf.png";

const Pagenotfound = () => {
  return (
    <>
      <div className="pnf">
        <img src={pnfimg} alt="notfound" className="pnr-image" />
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Goback
        </Link>
      </div>
    </>
  );
};

export default Pagenotfound;
