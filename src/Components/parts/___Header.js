import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { BackToTop } from "react-back-to-top-progress-indicator";

import { isMobileContext } from "../App";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFutbol,
  faCoins,
  faDice,
  faBullhorn,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

class PostUser {
  constructor(loginName, password) {
    this.loginName = loginName;
    this.password = password;
    // this.persistCookie = persistCookie;
    // this.deviceType = deviceType;
  }
}
const URL = "https://dm.apuestas.codere.es/LoginServicesESApi/login/web";
const LOGO =
  new Date() >= new Date("2022-12-30T22:00:00Z")
    ? "https://www.codere.es/_catalogs/masterpage/codere/img/logo.svg"
    : "https://www.codere.es/_catalogs/masterpage/codere/img/christmassLogo.gif";

const AviatorLogo =
  "https://www.codere.es/_catalogs/masterpage/codere/images/splash/aviator.svg";

function Header() {
  const acceder =
    "https://m.apuestas.codere.es/deportes/index.htm#/HomePage?openlogin=true";

  // Hooks
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");
  const [hamburger, setHamburger] = useState(false);

  // Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formHandler = (evt) => {
    evt.preventDefault();
    // console.log("been there done that");

    checkExistingUser();

    setEmail("");
    setPassword("");
  };

  const emailHandler = (evt) => {
    // console.log(evt.target.value);
    setEmail(evt.target.value);
  };

  const pwHandler = (evt) => {
    // console.log(evt.target.value);
    setPassword(evt.target.value);
  };

  function checkExistingUser() {
    Axios.post(URL, new PostUser(email, pw)).then((res) => {
      // console.log("users >>");
      // console.log(res.data);
    });
  }

  const hamburgerHandler = (evt) => {
    let flag = false;
    // console.log(evt.target.className);
    if (!hamburger && evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.add("open");
      flag = true;
    } else if (evt.target.id.includes("react-burger-menu-btn")) {
      evt.target.parentNode.classList.remove("open");
      flag = true;
    } else if (
      evt.target.className.includes("bm-overlay") ||
      evt.target.id.includes("react-burger-cross-btn")
    ) {
      document
        .getElementById("react-burger-menu-btn")
        .parentNode.classList.remove("open");
      flag = true;
    }
    if (flag) setHamburger(!hamburger);
  };

  return (
    <isMobileContext.Consumer>
      {(isMobile) => {
        return (
          <Navbar className="header_nav stroke" variant="dark">
            {isMobile ? (
              <div id="father">
                <div id="outer-container" onClick={hamburgerHandler}>
                  <Menu
                    id="elastic"
                    left
                    customCrossIcon={false}
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                  >
                    {/* <a href="#">
                  <FontAwesomeIcon icon={faRightToBracket} />
                  Acceder <FontAwesomeIcon icon={faAngleRight} />
                </a> */}
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/HomePage"
                      rel="nofollow"
                    >
                      <FontAwesomeIcon icon={faFutbol} />
                      Deportes
                      <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/CasinoPage"
                      rel="nofollow"
                    >
                      <FontAwesomeIcon icon={faDice} />
                      Casino
                      <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/SlotsPage"
                      rel="nofollow"
                    >
                      <FontAwesomeIcon icon={faCoins} />
                      Slots
                      <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a
                      href="https://m.apuestas.codere.es/deportes/index.htm#/AviatorPage"
                      rel="nofollow"
                    >
                      <img className="hamburgerAviatorLogo" src={AviatorLogo} />
                      Aviator
                      <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a
                      href="https://m.apuestas.codere.es/deportes/index.htm#/PromotionsPage"
                      rel="nofollow"
                    >
                      <FontAwesomeIcon icon={faBullhorn} />
                      Promociones
                      <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/NearestLocalPage"
                      rel="nofollow"
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                      Locales <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                    <Accordion className="hamb-accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Cómo jugar?</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              <a href="https://www.codere.es/casino">
                                Casino
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/ruleta">
                                Ruleta
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/slots">
                                Slots
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/blackjack">
                                Blackjack
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/jackpots">
                                Jackpots
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/cuotas-deportivas">
                                Apuestas Recomendades
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.codere.es/eventos-deportivos">
                                Eventos Deportivos
                                <FontAwesomeIcon icon={faAngleRight} />
                              </a>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Menu>
                  <main id="page-wrap"></main>
                  <a href="https://m.apuestas.codere.es/deportes/#/HomePage">
                    <img src={LOGO} alt="Codere Casino Online en España" />
                  </a>
                </div>

                <div id="header_buttons">
                  {/* onClick={handleShow} */}
                  <Button
                    href={acceder}
                    className="acceder-button header_btn"
                    rel="nofollow"
                  >
                    Acceder
                  </Button>
                  <Button
                    href="https://m.apuestas.codere.es/deportes/#/RegistroESPage"
                    className="registrate-button header_btn"
                    rel="nofollow"
                  >
                    Registrate
                  </Button>
                </div>
              </div>
            ) : (
              <Container>
                <a href="https://m.apuestas.codere.es/deportes/#/HomePage">
                  <img
                    style={{ maxWidth: 130, maxHeight: 31 }}
                    src={LOGO}
                    alt="Codere Casino Online en España"
                  />
                </a>
                <Nav className="me-auto">
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/#/HomePage"
                    rel="nofollow"
                  >
                    DEPORTES
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/#/DirectosPage"
                    rel="nofollow"
                  >
                    EN VIVO
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/#/SlotsPage"
                    rel="nofollow"
                  >
                    SLOTS
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/#/CasinoPage"
                    rel="nofollow"
                  >
                    CASINO
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/index.htm#/CasinoPage?category=En%20Vivo"
                    rel="nofollow"
                  >
                    RULETA EN VIVO
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/index.htm#/AviatorPage"
                    rel="nofollow"
                  >
                    AVIATOR
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/index.htm#/PromotionsPage"
                    rel="nofollow"
                  >
                    PROMOCIONES
                  </Nav.Link>
                  <Nav.Link
                    href="https://m.apuestas.codere.es/deportes/#/NearestLocalPage"
                    rel="nofollow"
                  >
                    LOCALES
                  </Nav.Link>
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle className="header_btn">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://www.codere.es/casino">
                      Casino
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/casino/casino-en-vivo">
                      Casino En-Vivo
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/ruleta">
                      Ruleta
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/slots">
                      Slots
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/blackjack">
                      Blackjack
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/jackpots">
                      Jackpots
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/cuotas-deportivas">
                      Apuestas Recomendades
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.codere.es/eventos-deportivos">
                      Eventos Deportivos
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  href={acceder}
                  // onClick={handleShow}
                  className="acceder-button header_btn"
                  rel="nofollow"
                >
                  Acceder
                </Button>
                <Button
                  href="https://m.apuestas.codere.es/deportes/#/RegistroESPage"
                  className="registrate-button header_btn"
                  rel="nofollow"
                >
                  Registrate
                </Button>
              </Container>
            )}
            {/* <Modal id="modal_app" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log-In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="test" onSubmit={formHandler}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  onChange={emailHandler}
                  placeholder="Usuario ó Correo Electrónico"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={pwHandler}
                  required
                />
              </Form.Group>
              <input type="submit" className="login_btn" value="Log-In" />
            </Form>
          </Modal.Body>
        </Modal> */}
          </Navbar>
        );
      }}
    </isMobileContext.Consumer>
  );
}

export default Header;
