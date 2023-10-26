import React from "react";
import Slider from "react-slick";
import Layout from "../components/layout/Layout.js";
import "./Homepage.css";
import Whatsapp from "../assets/Whatsapp.png";
// import Heroimg from "../assets/Hero.png";
import "../pages/About.css";
import { BsArrowRight } from "react-icons/bs";
import Img1 from "../assets/Hero-1.png";
import Img2 from "../assets/Heo-1.png";
import Img3 from "../assets/Hero-3.png";
import House from "../assets/Hero-main.png";
import { CgScrollV } from "react-icons/cg";
import projectimg from "../assets/Project-img.png";
import videoimg from "../assets/video-img.png";
import Slide1 from "../assets/Slide-1.png";
import Slide2 from "../assets/Slide-2.png";
import Slide3 from "../assets/Slide-3.png";
import Slide4 from "../assets/Slide-4.png";
import Upcoming1 from "../assets/upcoming.png";
import Upcoming2 from "../assets/upcoming1.png";
import Upcoming3 from "../assets/upcoming2.png";
import Upcoming4 from "../assets/upcoming3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbStarFilled } from "react-icons/tb";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.png";
import Clientlogo1 from "../assets/c-t1.png";
import Clientlogo2 from "../assets/c-t2.png";
import Clientlogo3 from "../assets/c-t3.png";
import Clientlogo4 from "../assets/c-t4.png";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout title={"Culture Concept/Home"}>
      {/* Hero Banner */}
      <section className="Hero">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="copy">
                <div className="text-bold">
                  Transform
                  <br />
                  your space
                </div>
                <div className="header-button">
                  <a href="header" className="btn btn-outline filled">
                    Start Project
                    <span className="arrow">
                      <BsArrowRight />
                    </span>
                  </a>
                  <a href="/projects" className="btn btn-outline">
                    View More
                    <span className="arrow">
                      <BsArrowRight />
                    </span>
                  </a>
                </div>
                <div className="text-hero-regular">
                  The mind creates the beautiful.
                  <br />
                  The heart creates the Home,
                  <br />
                  home sweet home
                </div>
                <div className="Hero-images">
                  <div className="Wrap">
                    <img src={Img1} className="hero-image2" alt="works" />
                    <img src={Img2} className="hero-image2" alt="works" />
                    <img src={Img3} className="hero-image2" alt="works" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 house"
              data-aos="zoom-in-left"
            >
              <img
                src={House}
                alt="House Image"
                className="house-image w-100"
              />
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-12"
              data-aos="zoom-in-left"
            >
              <div className="year">Interior Design Agency Since 2015</div>
              <div className="scrollimg">
                <CgScrollV />
                <div className="scroll-text">SCROLL DOWN</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Whatsapp">
          <a href="https://wa.me/9010611618" target="_blank">
            <img src={Whatsapp} alt="whatsapp-logo" className="whatsapp-logo" />
          </a>
        </div>
      </section>
      <hr />
      {/* Client Testimonial */}
      <section className="Client-testimonial">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="client-side">
                Trusted by over
                <span className="side-color">
                  <nbsp /> 10,000+ Clients and Brands.
                </span>
              </div>
              <div className="client-sideparagraph">
                Bring your dream home to life with one-on -one <br />
                Design helps and hand picked products tailored your style,
                <br /> Space and Budget
              </div>
            </div>
          </div>
        </div>

        <div className="clients-logo">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="zoom-in-right"
              >
                <img
                  src={Clientlogo1}
                  className="client-logo w-50"
                  alt="client-logo"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="zoom-in-right"
              >
                <img
                  src={Clientlogo2}
                  className="client-logo w-50"
                  alt="client-logo"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="zoom-in-right"
              >
                <img
                  src={Clientlogo3}
                  className="client-logo w-25"
                  alt="client-logo"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="zoom-in-right"
              >
                <img
                  src={Clientlogo4}
                  className="client-logo w-50"
                  alt="client-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Project */}
      <section className="Projects">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img
                src={projectimg}
                className="project-img w-100"
                alt="project image"
              />
            </div>
            <div
              className="col-lg-8 col-md-4 col-sm-4"
              data-aos="zoom-in-right"
            >
              <div className="project-text">
                The Key difference between ordinary and special, <br />
                <span className="p-change">
                  No matter the season, our spaces are as nuanced as the
                  lifestyles they reflect,
                  <br />
                </span>
                Don’t just dream it.
                <div className="project-score">
                  <div className="Wrap">
                    <div className="num-1">
                      <p className="Number">
                        300<span className="plus">+</span>
                        <p className="number-text">Success Projects</p>
                      </p>
                    </div>
                    <div className="num-1">
                      <p className="Number">
                        200<span className="plus">+</span>
                        <p className="number-text">Premium Designs</p>
                      </p>
                    </div>
                    <div className="num-1">
                      <p className="Number">
                        1200<span className="plus">+</span>
                        <p className="number-text">Happy Customers</p>
                      </p>
                    </div>
                  </div>
                </div>
                <a href="/about" className="btn btn-outline filled">
                  About Us
                  <span className="arrow">
                    <BsArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Video */}
      <section className="video">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="video-text">
                Capture the spirit Of
                <br />
                <span className="v-change">Spring</span> in your Home.
              </div>
              <div className="video-btn">
                <a href="/projects" className="btn btn-outline filled">
                  Projects
                  <span className="arrow">
                    <BsArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-8 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img
                src={videoimg}
                className="project-img w-100"
                alt="project image"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Testimonial*/}
      <section className="Testimonial">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <h1 className="abt-heading">What Our Client Says</h1>
              <p className="client-paragraph">
                We're immensely proud of the work we've done for our clients.
                Here's what some have said.
              </p>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div>
                <Slider {...settings}>
                  <div>
                    <div className="container">
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6 col-sm-12"
                          data-aos="zoom-in-right"
                        >
                          <img
                            src={client1}
                            className="project-img w-100"
                            alt="project image"
                          />
                        </div>
                        <div
                          className="col-lg-6 col-md-6 col-sm-12 client-say"
                          data-aos="zoom-in-right"
                        >
                          <div
                            className="Test-p2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Jaya teja Bathula
                          </div>
                          <div
                            className="Test-designation2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Software Engg
                          </div>
                          <div
                            className="Test-para2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            The interior design service exceeded my expectations
                            with their attention to detail and creativity. They
                            transformed my outdated living room into a modern
                            and <br />
                            functional space.
                          </div>
                          <div
                            className="Stars2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="container">
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6 col-sm-12"
                          data-aos="zoom-in-right"
                        >
                          <img
                            src={client2}
                            className="project-img w-100"
                            alt="project image"
                          />
                        </div>
                        <div
                          className="col-lg-6 col-md-6 col-sm-12 client-say"
                          data-aos="zoom-in-right"
                        >
                          <div
                            className="Test-p2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Hemanth P
                          </div>
                          <div
                            className="Test-designation2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Student
                          </div>
                          <div
                            className="Test-para2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            I highly recommend this interior design service for
                            anyone looking to elevate their home's aesthetic.
                            The team was professional, communicative, and
                            delivered a stunning final product.
                          </div>
                          <div
                            className="Stars2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="container">
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6 col-sm-12"
                          data-aos="zoom-in-right"
                        >
                          <img
                            src={client3}
                            className="project-img w-100"
                            alt="project image"
                          />
                        </div>
                        <div
                          className="col-lg-6 col-md-6 col-sm-12 client-say"
                          data-aos="zoom-in-right"
                        >
                          <div
                            className="Test-p2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Pavan Kumar A
                          </div>
                          <div
                            className="Test-designation2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            Business
                          </div>
                          <div
                            className="Test-para2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            I was thoroughly impressed with this builder's
                            ability to turn our dream home into a reality. They
                            paid close attention to every detail and delivered a
                            final product that exceeded our expectations.
                          </div>
                          <div
                            className="Stars2"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1000"
                          >
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      {/* Slide */}
      <section className="video">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="Slide-text">
                Decorate
                <span className="slide-change">every inch of the house</span>
                <br />
                To make it feel homey
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="Slide2-text">
                Crave out a little piece of paradise with some of <br />
                our top picks, the home of your dreams begins
                <br />
                with the perfect palette for every room
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="Slides">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="zoom-in-right"
              >
                <img
                  src={Slide1}
                  className="Slide-image w-100"
                  alt="Projects"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="zoom-in-right"
              >
                <img
                  src={Slide2}
                  className="Slide-image w-100"
                  alt="Projects"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="zoom-in-right"
              >
                <img
                  src={Slide3}
                  className="Slide-image w-100"
                  alt="Projects"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="zoom-in-right"
              >
                <img
                  src={Slide4}
                  className="Slide-image w-100"
                  alt="Projects"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NewProjects */}
      <section className="Comingsoon">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <h1 className="coming-heading">New Projects</h1>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div>
                <Slider {...settings}>
                  <div>
                    <img
                      src={Upcoming1}
                      className="Slide-image2 w-100"
                      alt="Projects"
                    />
                  </div>
                  <div>
                    <img
                      src={Upcoming2}
                      className="Slide-image2 w-100"
                      alt="Projects"
                    />
                  </div>
                  <div>
                    <img
                      src={Upcoming3}
                      className="Slide-image2 w-100"
                      alt="Projects"
                    />
                  </div>
                  <div>
                    <img
                      src={Upcoming4}
                      className="Slide-image2 w-100"
                      alt="Projects"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </Layout>
  );
};

export default Homepage;
