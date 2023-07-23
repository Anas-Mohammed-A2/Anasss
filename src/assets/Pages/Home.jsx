import React, { useEffect } from "react";
// LIPRARY
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

// STYLE
import "../Css/Style.css";
// Imges
import NextJs from "../imges/nextjs.png";
import ReactJs from "../imges/react.png";
import Js from "../imges/js.png";
import FrontImg1 from "../imges/web-programming.png";
import FrontImg2 from "../imges/web-programming (1).png";
import Graphic1 from "../imges/graphic-design (4).png";
import Graphic2 from "../imges/graphic-design (3).png";
import Back1 from "../imges/backend.png";
import Back2 from "../imges/backend (1).png";
import Shape from "../imges/Shape.png";

const Home = () => {
  return (
    <div className="Bodyy">
      {/* Start  SecHome*/}
      <section className="SecHome">
        <Container>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="DivLogoHome">
                <img src="../imges/logobg.png" alt="" className="LogoHome" />
                <img src={NextJs} alt="" className="NexLogo LogoSkil" />
                <img src={ReactJs} alt="" className="ReactLogo LogoSkil" />
                <img src={Js} alt="" className="JsLogo LogoSkil" />
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="DivRight">
                <h4>HELLO I'M</h4>
                <h1>Anas Mohammad</h1>
                <h2>
                  I'M A
                  <span>
                    <Typewriter
                      words={[
                        "Front End Developer",
                        "Graphic Design",
                        "Freelancer",
                        "React Developer",
                      ]}
                      loop="true"
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <div className="prghrap">
                  <p>
                    There are many variations of sum availabled in alley of type
                    and scrambled it some.
                  </p>
                </div>
                <button className="BTNNSITE">
                  Download CV <i class="fa-solid fa-download downloadI"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End  SecHome*/}

      {/* Start  SecServices*/}
      <section className="SecServices">
        <Container>
          <div className="Titel">
            <span className="TitleName">My services</span>
            <h1 className="TitleDes">What I do For My Clients </h1>
          </div>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
              <div className="CardService">
                <img src={FrontImg2} alt="" className="ImgCradd" />
                <img src={FrontImg1} alt="" className="ImgCrad" />
                <div className="CardText">
                  <h3 className="NameJob">FrontEnd Development</h3>
                  <p className="CardDes">
                    I Will Design Your Personal Website Or Your Company Website
                    With High Professionalism, I Have A Lot Of Experience In
                    Designing Frontend.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
              <div className="CardService">
                <img src={Graphic1} alt="" className="ImgCrad" />
                <img src={Graphic2} alt="" className="ImgCradd" />{" "}
                <div className="CardText">
                  <h3 className="NameJob">Graphic Design</h3>
                  <p className="CardDes">
                    I Will Do Anything Graphic Design Related to, Logo, Banner,
                    Flyer, Brochure Vector Artwork Because I Have A Lot Of
                    Experience In Designing.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
              <div className="CardService">
                <img src={Back1} alt="" className="ImgCrad" />
                <img src={Back2} alt="" className="ImgCradd" />{" "}
                <div className="CardText">
                  <h3 className="NameJob">Backend Development</h3>
                  <p className="CardDes">
                    I will design the backend through which you can control all
                    the products of your site, add or remove anything, and all
                    your Clients data can be saved
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End  SecServices*/}

      {/* Start  SecAbout*/}
      <section className="SecAbout">
        <Container>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="DiveLiftAbout">
                <span className="TitleName">About me</span>
                <h1 className="TitleNameSec">
                  Need a Creative Product? I can Help You!
                </h1>
                <p className="DesCrip">
                  Hi! I’m Anas Mohammad, and I have a passion for building clean
                  web applications with intuitive functionality. I enjoy the
                  process of turning ideas into reality using creative
                  solutions. I’m always curious about learning new skills,
                  tools, and concepts. In addition to working on various solo
                  full-stack projects, I have worked with creative teams, which
                  involves daily stand-ups and communications, source control,
                  and project management.
                </p>

                <button className="BTNNSITEB1 btn2">
                  Download CV <i class="fa-solid fa-download downloadI"></i>
                </button>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <div className="AboutRight">
                <img src="../imges/logobg.png" alt="" className="LogoAbout" />
                <img src={Shape} alt="" className="ShapeAbout" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End  SecAbout*/}
    </div>
  );
};

export default Home;
