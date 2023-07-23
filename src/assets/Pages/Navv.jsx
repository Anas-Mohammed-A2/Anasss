import React, { useState } from "react";
//? IMPORT LIPRARY
// REACT BOOTSTRAP
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// CSS
import "../Css/Navv.css";
import "../Css/hover-min.css";

const Navv = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Bodyy">
      <nav className="NavBarr">
        <div className="imgLogoNAVD">
          <img src="../imges/logo.png" className="LogoNav" />
        </div>

        <div className="Linkes">
          <Link to="#3" className="linko hvr-underline-from-left">
            Home
          </Link>
          <Link to="#3" className="linko hvr-underline-from-left">
            About
          </Link>
          <Link to="#3" className="linko hvr-underline-from-left">
            Services
          </Link>
          <Link to="#3" className="linko hvr-underline-from-left">
            Portfolio
          </Link>
          <button className="BTNN">Contact Me</button>
        </div>

        <div className="menuBarrr">
          <Button variant="" onClick={handleShow} className="menuBarrr">
            <i class="fa-solid fa-bars BTNNMenu"></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img
                  src="../imges/logo.png"
                  alt="Logomenu"
                  className="logoMenu"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="LinkesMenu">
                <Link to="#3" className=" ">
                  Home
                </Link>
                <Link to="#3" className=" ">
                  About
                </Link>
                <Link to="#3" className="">
                  Services
                </Link>
                <Link to="#3" className="">
                  Portfolio
                </Link>
                <Link to="#3" className="">
                  Contact Me
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </div>
  );
};

export default Navv;
