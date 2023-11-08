import React from "react";
import Layout from "../components/layout/Layout";
import Servicesimg from "../assets/Services.png";
import "../pages/Services.css";
import Slide1 from "../assets/Slide-1.png";
import Slide2 from "../assets/Slide-2.png";
import Slide3 from "../assets/Slide-3.png";
import Slide4 from "../assets/Slide-4.png";
import { GiBrain } from "react-icons/gi";
import { PiIntersectThreeDuotone } from "react-icons/pi";
import { TbHandFinger, TbHomeHeart } from "react-icons/tb";

const Services = () => {
  return (
    <Layout title={"Culture Concept/Services"}>
      <section className="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 about">
              <img className="abt-image" src={Servicesimg} alt="About-image" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h1 className="Service-heading">Services</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="long-strip">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
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
              className="col-lg-3 col-md-6 col-sm-6"
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
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Long-heading">95</div>
                <p className="c-small">Under go training</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Long-heading">20</div>
                <p className="c-small">Design Experts</p>
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
                Discover the world of interior design
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img
                src={Slide1}
                className="Slide-image3  w-100"
                alt="Projects"
              />
              <div className="Service-name">Full Home Interior</div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img src={Slide2} className="Slide-image3 w-100" alt="Projects" />
              <div className="Service-name">Modular Kitchen</div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img src={Slide3} className="Slide-image3 w-100" alt="Projects" />
              <div className="Service-name">Modular Furniture</div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="zoom-in-right"
            >
              <img src={Slide4} className="Slide-image3 w-100" alt="Projects" />
              <div className="Service-name"> Furniture & Decor</div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="Services-Strip">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Service-icons">
                  <GiBrain />
                </div>
                <div className="Service-heading2">
                  Understand your requirements
                </div>
                <p className="s-small">
                  Craft ideal tailored design solutions for your needs and
                  preferences.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Service-icons">
                  <PiIntersectThreeDuotone />
                </div>
                <div className="Service-heading2">
                  Reimagine with a 3D design layout
                </div>
                <p className="s-small">
                  Experts create 3D visuals, bringing your envisioned space to
                  life vividly.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Service-icons">
                  <TbHandFinger />
                </div>
                <div className="Service-heading2">
                  Material Selection within budget
                </div>
                <p className="s-small">
                  Guide in curating ideal style with materials, textures,
                  furniture, budget. Create unique, perfect space.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="content-1">
                <div className="Service-icons">
                  <TbHomeHeart />
                </div>
                <div className="Service-heading2">
                  Step into your Beautiful Home
                </div>
                <p className="s-small">
                  Receive keys, warranty, completion letter - your dream home is
                  ready!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Services-points">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="Policy-Headingmain">Reasons to choose us </p>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="card">
                <p className="Heading">Broad Appeal:</p>
                <p className="s-small">
                  "Culture Concept" is a name that suggests a broad and
                  inclusive approach to interior design. It implies that your
                  company can work with a wide range of design styles and
                  cultural influences, making it appealing to a diverse
                  clientele.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4 policy-box"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <p className="Heading">Unique and Memorable:</p>
              <p className="s-small">
                The name is distinct and memorable, which can help your company
                stand out in a crowded market. It's not a generic or overused
                name for an interior design company, which can help you create a
                unique brand identity.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4 policy-box"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <p className="Heading">Flexibility:</p>
              <p className="s-small">
                "Culture Concept" can be interpreted in various ways, allowing
                you to adapt your design services to different client needs. It
                can encompass contemporary, traditional, or fusion designs,
                giving you flexibility in your design projects.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-4 policy-box"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <p className="Heading">Storytelling:</p>
              <p className="s-small">
                The name "Culture Concept" invites storytelling. You can share
                the story of how your design inspirations are drawn from
                different cultures, creating a sense of depth and authenticity
                in your brand.
              </p>
            </div>
            {/* </div> */}
          </div>
          {/* <p className="Heading"> </p>
                <p className="Heading">Global Appeal: </p>If you plan to work
                with clients from different cultural backgrounds or offer
                international design services, the name "Culture Concept"
                communicates your global perspective.
                <p className="Heading">Reflects Design Philosophy: </p>If your
                design philosophy is based on the idea that culture plays a
                significant role in influencing design, this name clearly
                conveys your approach to potential clients.
              </p> */}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
