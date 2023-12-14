import { Link } from "react-router-dom";
import "./Pagenotfound.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Letstalk.css";
import { IoClose } from "react-icons/io5";

const Result = ({ success, message }) => {
  return <p className={success ? "confirm" : "error"}>{message}</p>;
};

const Pagenotfound = () => {
  const [result, setResult] = useState({ success: false, message: "" });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Check if any required fields are empty
    if (!data["from-name"] || !data["from-email"] || !data["message"]) {
      setResult({
        success: false,
        message: "Please fill out all required fields.",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_j26a0g7",
        "template_e6zv9ex",
        form.current,
        "ffSefLeM35Sv0KWBr"
      )
      .then(
        (result) => {
          setResult({
            success: true,
            message:
              "Your Message has been successfully sent. I will contact you soon.",
          });
        },
        (error) => {
          setResult({
            success: false,
            message:
              "There was an error with your submission. Please check your input.",
          });
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Link to="/" className="back">
        Close
        <span className="close-icon">
          <IoClose />
        </span>
      </Link>
      <section className="Letstalk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="Cantact-form">
                <div className="contact-heading">Lets Talk</div>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-input">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="form-control1"
                      id="exampleInputEmail1"
                      name=""
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control1"
                      id="exampleInputEmail1"
                      name="from-email"
                    />
                  </div>

                  <div className="mb-3 form-input form">
                    <textarea
                      type="text"
                      name="message"
                      className="form-control1"
                      placeholder="message"
                    />
                  </div>
                  <div className="contact-btn">
                    <input type="submit" value="Send" className="btn2" />
                  </div>
                  <div className="row">
                    <Result success={result.success} message={result.message} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagenotfound;
