import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout.js";
import ContactImage from "../assets/Contact-Image.jpg";
import "../pages/Contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";

const Result = ({ success, message }) => {
  return <p className={success ? "confirm" : "error"}>{message}</p>;
};

const Contact = () => {
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
    <Layout title={"Culture Concept/Contact"}>
      <section className="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 about">
              <img className="abt-image" src={ContactImage} alt="About-image" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="abt-heading">Contact Us</div>
              <div className="Paragraph1">
                Any questions or suggestions? Write us a message and we will
                contact you!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="contact-text">
                Interested to Join our Group? Contact us with the following
                details or send an e-mail to hello@cultureconcept.com. You will
                be added to one of our available WhatsApp groups.
              </p>
              <div className="cnticons">
                <FaMobileAlt />
                <span className="imgname">Mobile Number</span>
              </div>
              <p className="textimage1">+91 9966741412</p>

              <div className="cnticons">
                <FiMapPin />
                <span className="imgname">Address</span>
              </div>
              <p className="textimage1">
                Culture Concepts, 3rd Floor, <br />
                Plot no 194, Survey Of India
                <br />
                Ayyappa Society, Survey of India Colony, <br />
                Chanda Naik Nagar, Madhapur, Hyderabad,
                <br /> Telangana 500081.
              </p>
              <div className="cnticons">
                <FiMail />
                <span className="imgname">Email Id</span>

                <p className="textimage1">hello@cultureconcept.com</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="Cantact-form">
                <div className="contact-heading">Get In Touch</div>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-input">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      name="from-name"
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      className="form-control"
                      id="exampleInputEmail1"
                      name=""
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="from-email"
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Subject"
                      name="from-name"
                    />
                  </div>
                  <div className="mb-3 form-input form">
                    <textarea
                      type="text"
                      name="message"
                      className="form-control"
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
      {/* <hr /> */}
    </Layout>
  );
};

export default Contact;
