import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Accordion,
  Image,
  InputGroup,
} from 'react-bootstrap';

import React, { useState } from 'react';
// import Axios from 'axios';
import { elastic as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faFutbol,
  faCoins,
  faDice,
  faBullhorn,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import siteData from './data/globalSiteData.json';
// import './Header.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// class PostUser {
//   constructor(loginName, password) {
//     this.loginName = loginName;
//     this.password = password;
//   }
// }
// const URL = 'https://dm.apuestas.codere.es/LoginServicesESApi/login/web';
const LOGO = 'https://www.codere.es/_catalogs/masterpage/codere/img/logo.svg';

const AviatorLogo = 'https://www.codere.es/_catalogs/masterpage/codere/images/splash/aviator.svg';

function Header(props) {
  // const acceder =
  //   "https://m.apuestas.codere.es/deportes/index.htm#/HomePage?openlogin=true";

  // Hooks
  // const [setShow] = useState(false);
  // const [email, setEmail] = useState('');
  // const [pw, setPassword] = useState('');
  const [hamburger, setHamburger] = useState(false);
  const [onShow, setOnShow] = useState('');

  const data = [
    {
      url: 'https://m.apuestas.codere.es/deportes/#/HomePage',
      text: 'DEPORTES',
      icon: faFutbol,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/#/DirectosPage',
      text: 'EN VIVO',
      icon: faFutbol,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/#/SlotsPage',
      text: 'SLOTS',
      icon: faCoins,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/#/CasinoPage',
      text: 'CASINO',
      icon: faDice,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/index.htm#/CasinoPage?category=En%20Vivo',
      text: 'RULETA EN VIVO',
      icon: faDice,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/index.htm#/AviatorPage',
      text: 'AVIATOR',
      isAviator: true,
      icon: AviatorLogo,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/index.htm#/PromotionsPage',
      text: 'PROMOCIONES',
      icon: faBullhorn,
    },
    {
      url: 'https://m.apuestas.codere.es/deportes/#/NearestLocalPage',
      text: 'LOCALES',
      icon: faLocationDot,
    },
  ];

  // Handlers
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const formHandler = (evt) => {
  //   evt.preventDefault();
  //   // console.log("been there done that");

  //   checkExistingUser();

  //   setEmail("");
  //   setPassword("");
  // };

  // const emailHandler = (evt) => {
  //   // console.log(evt.target.value);
  //   setEmail(evt.target.value);
  // };

  // const pwHandler = (evt) => {
  //   // console.log(evt.target.value);
  //   setPassword(evt.target.value);
  // };

  // function checkExistingUser() {
  //   Axios.post(URL, new PostUser(email, pw)).then((res) => {
  //     // console.log("users >>");
  //     // console.log(res.data);
  //   });
  // }

  const seo_menu = [
    { name: 'Casino', url: '/casino', isSpa: true },
    { name: 'Casino en Vivo', url: '/casino/casino-en-vivo', isSpa: true },
    { name: 'Ruleta', url: '/casino/ruleta', isSpa: true },
    { name: 'Slots', url: '/casino/slots', isSpa: true },
    { name: 'Blackjack', url: '/casino/blackjack', isSpa: true },
    { name: 'Jackpots', url: '/casino/jackpots', isSpa: true },
    { name: 'Eventos Deportivos', url: '/eventos-deportivos', isSpa: true },
    { name: 'Apuestas Recomendades', url: '/cuotas-deportivas', isSpa: true },
  ];

  const hamburgerHandler = () => {
    hamburger ? setOnShow('') : setOnShow('open');
    setHamburger(!hamburger);
  };

  return (
    <Navbar
      className='header_nav stroke'
      variant='dark'>
      {props.flag ? (
        <div id='father'>
          <div id='outer-container'>
            <Menu
              id='elastic'
              left
              customCrossIcon={false}
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
              burgerButtonClassName={onShow}
              isOpen={hamburger}
              onOpen={hamburgerHandler}
              onClose={hamburgerHandler}>
              {data.map((d, k) => (
                <Nav.Link
                  key={k}
                  href={d.url}
                  rel='nofollow'>
                  {d.isAviator ? (
                    <Image
                      className='hamburgerAviatorLogo'
                      src={d.icon}
                    />
                  ) : (
                    <FontAwesomeIcon icon={d.icon} />
                  )}
                  {d.text}
                  <FontAwesomeIcon icon={faAngleRight} />
                </Nav.Link>
              ))}

              <Accordion className='hamb-accordion'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>¿Cómo jugar?</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {seo_menu.map((s, k) => (
                        <li key={k}>
                          <Nav.Link
                            onClick={s.isSpa ? hamburgerHandler : null}
                            as={s.isSpa ? Link : 'a'}
                            to={s.url}
                            href={s.url}>
                            {s.name}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </Nav.Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Menu>
            <main id='page-wrap'></main>
            <a href='https://m.apuestas.codere.es/deportes/#/HomePage'>
              <img
                src={LOGO}
                alt='Codere Casino Online en España'
              />
            </a>
          </div>

          <div id='header_buttons'>
            <Button
              href={siteData.acceder.url}
              rel='nofollow'
              className='acceder-button header_btn'>
              {siteData.acceder.txt}
            </Button>
            <Button
              href={siteData.registrate.url}
              rel='nofollow'
              className='registrate-button header_btn'>
              {siteData.registrate.txt}
            </Button>
          </div>
        </div>
      ) : (
        <Container>
          <InputGroup className='header-group-left'>
            <Nav.Link href='https://m.apuestas.codere.es/deportes/#/HomePage'>
              <LazyLoadImage
                style={{ maxWidth: 150 }}
                src={LOGO}
                alt='Codere Casino Online en España'
              />
            </Nav.Link>
            <Nav className='me-auto'>
              {siteData.topMenuDescLine.map((d, k) => {
                return (
                  <Nav.Link
                    key={k}
                    href={d.url}
                    rel='nofollow'>
                    <FontAwesomeIcon icon={d.icon} />
                    {d.text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </InputGroup>

          <div className='header-group-right'>
            <Dropdown>
              <Dropdown.Toggle className='header_btn'>
                <FontAwesomeIcon icon={faAngleDown} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {seo_menu.map((s, k) => {
                  return (
                    <Dropdown.Item
                      key={k}
                      as={s.isSpa ? Link : 'a'}
                      to={s.url}
                      href={s.url}>
                      {s.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              href={siteData.acceder.url}
              rel='nofollow'
              // onClick={handleShow}
              className='acceder-button header_btn'>
              {siteData.acceder.txt}
            </Button>
            <Button
              href={siteData.registrate.url}
              rel='nofollow'
              className='registrate-button header_btn'>
              {siteData.registrate.txt}
            </Button>
          </div>
        </Container>
      )}
    </Navbar>
  );
}

export default Header;
