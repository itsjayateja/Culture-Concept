import React from "react";
import Layout from "../components/layout/Layout";
import Projectmain from "../assets/Projectmain.png";
import "../pages/Projects.css";
import { TabView, TabPanel } from "primereact/tabview";
import Slide1 from "../assets/Slide-1.png";
import Slide2 from "../assets/Slide-2.png";
import Slide3 from "../assets/Slide-3.png";
import Slide4 from "../assets/Slide-4.png";

const Projects = () => {
  return (
    <Layout title={"Culture Concept/Projects"}>
      <section className="Projectsmain2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 about">
              <img className="abt-image" src={Projectmain} alt="About-image" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h1 className="Service-heading">XCLUSIVE INTERIORS PORTFOLIO</h1>
              <p className="Paragraph">
                1. In our present time, we firmly believe that engaging the
                services of architects and designers is a deliberate choice
                rather than a luxury.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="card">
          <TabView>
            <TabPanel header="Residential">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 card"
                    data-aos="zoom-in-right"
                  >
                    <img
                      src={Slide1}
                      className="Slide-image w-100"
                      alt="Projects"
                    />
                    <div className="Service-name1">Mr.Jaya Teja</div>
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
                    <div className="Service-name">Modular Kitchen</div>
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
                    <div className="Service-name">Modular Furniture</div>
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
                    <div className="Service-name"> Furniture & Decor</div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12"
                    data-aos="zoom-in-right"
                  >
                    <img
                      src={Slide1}
                      className="Slide-image w-100"
                      alt="Projects"
                    />
                    <div className="Service-name">Full Home Interior</div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12"
                    data-aos="zoom-in-right"
                  >
                    <img
                      src={Slide1}
                      className="Slide-image w-100"
                      alt="Projects"
                    />
                    <div className="Service-name">Full Home Interior</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Commercial">
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
                    <div className="Service-name">Full Home Interior</div>
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
                    <div className="Service-name">Modular Kitchen</div>
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
                    <div className="Service-name">Modular Furniture</div>
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
                    <div className="Service-name"> Furniture & Decor</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Architecture">
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
                    <div className="Service-name">Full Home Interior</div>
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
                    <div className="Service-name">Modular Kitchen</div>
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
                    <div className="Service-name">Modular Furniture</div>
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
                    <div className="Service-name"> Furniture & Decor</div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
