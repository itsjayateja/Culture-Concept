import { Link } from "react-router-dom";
import "./Pagenotfound.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Letstalk.css";
import { IoClose } from "react-icons/io5";
import {useFormik} from "formik"
import * as Yup from 'yup';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {Loader, Loader2} from "lucide-react"
const Result = ({ success, message }) => {
  return <p className={success ? "confirm" : "error"}>{message}</p>;
};

const Pagenotfound = () => {
  const [result, setResult] = useState({ success: false, message: "" });
  const [isLoading,setIsLoading]=useState(false)
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
  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required('Phone Number is Required'),
    email: Yup.string().required('Email is Required'),
    message: Yup.string().required('Message is Required'),

});

    const formik = useFormik({

        initialValues: {
            phoneNumber:'',
            email:'',
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
      // const  handleKeyPress = async(e) => {
      //   console.log('called')
      //   if (e.key === 'Enter') {
      //     formik.submitForm()
      //   }
      // }
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

                <div ref={form} >
                  <div className="mb-3 form-input">
                    <input
                      onChange={(e)=>formik.setFieldValue("phoneNumber",e.target.value)}
                      type="number"
                      value={formik.values.phoneNumber}
                      placeholder="Phone Number"
                      className="form-control1"
                      // id="exampleInputEmail1"
                      // name=""
                    />
                     {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.phoneNumber}</div>
                                ) : null}
                  </div>
                 
                  <div className="mb-3 form-input">
                    <input
                     onChange={(e)=>formik.setFieldValue("email",e.target.value)}
                      type="email"
                         value={formik.values.email}
                      placeholder="Email"
                      className="form-control1"
                      // id="exampleInputEmail1"
                      // name="from-email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.email}</div>
                                ) : null}
                  </div>
                  
                  <div className="mb-3 form-input form">
                    <textarea
                     onChange={(e)=>formik.setFieldValue("message",e.target.value)}
                      type="text"
                         value={formik.values.message}
                      // name="message"
                      className="form-control1"
                      placeholder="message"
                    />
                          {formik.touched.message && formik.errors.message ? (
                                    <div style={{color:'red'}} className=" text-red-600">{formik.errors.message}</div>
                                ) : null}
                  </div>

                  <div className="contact-btn">
                    <button disabled={isLoading} className='btn2' onClick={(e)=> formik.submitForm()}>
                     {isLoading && <Loader2 size={12} className="animate-spin" />} Send
                    </button>
                  </div>
                  {/* <div className="row">
                    <Result success={result.success} message={result.message} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagenotfound;
