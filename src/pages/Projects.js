import React from "react";
import Layout from "../components/layout/Layout";
import Projectmain from "../assets/Projectmain.png";
import "../pages/Projects.css";
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
              <h1 className="Service-heading">PORTFOLIO</h1>
              <p className="Paragraph1">
              Dive into our Portfolio, where each design reflects a deliberate choice, transforming spaces into bespoke statements of luxury and style.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="Projects-heading1">Residential</div>
              <p className="Projects-subtext">
                Effective space planning is essential. Designers consider the
                layout and flow of rooms, furniture placement, and traffic
                patterns to make the best use of available space.
              </p>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide1}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Jaya Teja</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide2}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Subhani</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide3}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Vamshi</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide4}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Surya</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide2}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Mahesh</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide3}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Mr.Shyam</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="zoom-in-right"
            >
              <div className="Projects-heading1">Commercial</div>
              <p className="Projects-subtext">
                Explore the use of technology in commercial spaces, including
                audio-visual systems, smart offices, and IT infrastructure.
              </p>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide1}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Sixpep</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide2}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Yrall</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide3}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Prasad Fashions</div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in-right"
            >
              <div className="card">
                <img
                  src={Slide4}
                  className="Slide-image w-100"
                  alt="Projects"
                />
                <div className="Service-name1">Decooders</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="portfolio">
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
      </section> */}
      <hr />
    </Layout>
  );
};

export default Projects;
