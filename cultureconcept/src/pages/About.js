import React from "react";
import Layout from "../components/layout/Layout";
import Aboutimg from "../assets/About-Image.jpg";
import "../pages/About.css";
import { TbStarFilled } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout title={"Culture Concept/About"}>
      <section className="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 about">
              <img className="abt-image" src={Aboutimg} alt="About-image" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h1 className="abt-heading">About CultureConcept</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12  History">
              <p className="para-heading">History of our creation:</p>
              <p className="Paragraph">
                Since our humble beginnings in 2019, We has significantly
                expanded its our collection of exclusive lamps. Today we are
                proud to present you our best lighting design solutions. Sit
                amet just consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        {/* lONGStrip Banner */}
        <section className="long-strip">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="Main-Content">
                  <div className="Long-heading">
                    Architects with different approach
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="content-1">
                  <div className="Long-heading">315</div>
                  <p className="c-small">Happy customers</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="content-1">
                  <div className="Long-heading">17</div>
                  <p className="c-small">Years experience</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="content-1">
                  <div className="Long-heading">95</div>
                  <p className="c-small">Under go training</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="About">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12  Firm-history">
                <p className="para-heading">
                  Designer services are no longer a luxury:
                </p>
                <p className="Paragraph">
                  1. In our present time, we firmly believe that engaging the
                  services of architects and designers is a deliberate choice
                  rather than a luxury.
                </p>
                <p className="Paragraph">
                  2. Our firm belief is that employing the services of
                  architects and designers is a deliberate choice rather than a
                  luxury in today's day and age.
                </p>
                <p className="Paragraph">
                  3. We are sincerely convinced that using the services of
                  architects and designers in our time is not a luxury, but a
                  conscious
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12  Firm-history">
                <p className="p-heading">Thanks for your sweet words to us:</p>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                {/* Testimonial*/}
                <section className="Testimonial">
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-lg-12 col-md-12 col-sm-12"
                        data-aos="zoom-in-right"
                      >
                        <div>
                          <Slider {...settings}>
                            <div>
                              <div
                                className="Test-p"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="1000"
                              >
                                Jaya teja Bathula
                              </div>
                              <div
                                className="Test-designation"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="1000"
                              >
                                Software Engg
                              </div>
                              <div
                                className="Test-para"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="1000"
                              >
                                The interior design service exceeded my
                                expectations with their attention to detail and
                                creativity. They transformed my outdated living
                                room into a modern and functional space.
                              </div>
                              <div
                                className="Stars"
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
                            <div>
                              <div className="Test-p">Hemanth P</div>
                              <div className="Test-designation">Student</div>
                              <div className="Test-para">
                                I highly recommend this interior design service
                                for anyone looking to elevate their home's
                                aesthetic. The team was professional,
                                communicative, and delivered a stunning final
                                product.
                              </div>
                              <div className="Stars">
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                              </div>
                            </div>
                            <div>
                              <div className="Test-p">Pavan Kumar A</div>
                              <div className="Test-designation">Business</div>
                              <div className="Test-para">
                                I was thoroughly impressed with this builder's
                                ability to turn our dream home into a reality.
                                They paid close attention to every detail and
                                delivered a final product that exceeded our
                                expectations.
                              </div>
                              <div className="Stars">
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="col-lg-12 col-md-12 col-sm-12  Firm-history"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <hr />
    </Layout>
  );
};

export default About;
