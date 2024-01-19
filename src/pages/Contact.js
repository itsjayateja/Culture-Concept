import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout.js";
import ContactImage from "../assets/Contact-Image.jpg";
import "../pages/Contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from 'yup'
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
const Result = ({ success, message }) => {
  return <p className={success ? "confirm" : "error"}>{message}</p>;
};

const Contact = () => {
  const [result, setResult] = useState({ success: false, message: "" });
  const form = useRef();
  const [isLoading,setIsLoading]=useState(false)
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
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    phoneNumber: Yup.string().required('Phone Number is Required'),
    email: Yup.string().required('Email is Required'),
    subject: Yup.string().required('Subject is Required'),
    message: Yup.string().required('Message is Required'),

});

    const formik = useFormik({

        initialValues: {
            phoneNumber:'',
            name:'',
            email:'',
            subject:'',
            message:''
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
          setIsLoading(true)
       
          try {
            console.log("here are values",values)
            const response = await axios.post(
              "https://script.google.com/macros/s/AKfycbyRxDUeJyFJXgUoc73TMEunlZfOnaer0yhnAXRUpV6AOsqTrmRWtGBahL1pjSbx7uDb/exec",
              new URLSearchParams({...values}),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            );
            if(response.status===200){
              console.log(response)
              toast.success("Sent Successfully")
            }
            } catch (error) {
             
              toast.error("Something Went Wrong!")
              console.log(error)
                 
            }finally{
              setIsLoading(false)
            }
        },
      });
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

                <form ref={form} >
                  <div className="mb-3 form-input">
                    <input
                      type="text"
                      onChange={(e)=>formik.setFieldValue("name",e.target.value)}
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      name="from-name"
                    />
                    {formik.touched.name && formik.errors.name ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.name}</div>
                                ) : null}
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="phone"
                      onChange={(e)=>formik.setFieldValue("phoneNumber",e.target.value)}
                      placeholder="Phone Number"
                      className="form-control"
                      id="exampleInputEmail1"
                      name=""
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.phoneNumber}</div>
                                ) : null}
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="email"
                      onChange={(e)=>formik.setFieldValue("email",e.target.value)}
                      placeholder="Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="from-email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.email}</div>
                                ) : null}
                  </div>
                  <div className="mb-3 form-input">
                    <input
                      type="text"
                      onChange={(e)=>formik.setFieldValue("subject",e.target.value)}
                      className="form-control"
                      id="username"
                      placeholder="Subject"
                      name="from-name"
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.subject}</div>
                                ) : null}
                  </div>
                  <div className="mb-3 form-input form">
                    <textarea
                      type="text"
                      onChange={(e)=>formik.setFieldValue("message",e.target.value)}
                      name="message"
                      className="form-control"
                      placeholder="message"
                    />
                    {formik.touched.message && formik.errors.message ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.message}</div>
                                ) : null}
                  </div>
                  <div style={{marginBottom:"20px"}} className="contact-btn">
                    <button disabled={isLoading}  onClick={(e)=>{
                      e.preventDefault()
                      formik.submitForm()
                    }}  value="Send" className="btn2">{isLoading && <Loader2 size={12} className="animate-spin" />} Send</button>
                  </div>
                  {/* <div className="row">
                    <Result success={result.success} message={result.message} />
                  </div> */}
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
