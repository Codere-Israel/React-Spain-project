import { Accordion, Button, Container, Dropdown, InputGroup, Nav, Navbar, } from 'react-bootstrap';

import React, { useState } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import siteData from './data/globalSiteData.json';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Arrowrightw, Arrowdown, Aviator, CasinoMenuIcon, Deportes, Directo, LocalesMenuIcon, Promociones, Ruletasenvivo, Slots } from '../icons';

const LOGO = new Date () <= new Date ("2023-12-30T22:00:00Z") && new Date () >= new Date ("2023-12-01T07:00:00Z") ? "https://www.codere.es/_catalogs/masterpage/codere/img/christmassLogo.gif" : "https://www.codere.es/_catalogs/masterpage/codere/img/logo.svg";


function Header (props) {

	const [ hamburger, setHamburger ] = useState (false);
	const [ onShow, setOnShow ] = useState ('');

	const data = [ {
		url: 'https://m.apuestas.codere.es/deportes/#/HomePage', text: 'Deportes', icon: Deportes,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/#/DirectosPage', text: 'En vivo', icon: Directo,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/#/SlotsPage', text: 'Slots', icon: Slots,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/#/CasinoPage', text: 'Casino', icon: CasinoMenuIcon,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/index.htm#/CasinoPage?category=En%20Vivo', text: 'Ruleta en vivo', icon: Ruletasenvivo,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/index.htm#/AviatorPage', text: 'Aviator', isAviator: true, icon: Aviator,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/index.htm#/PromotionsPage', text: 'Promociones', icon: Promociones,
	}, {
		url: 'https://m.apuestas.codere.es/deportes/#/NearestLocalPage', text: 'Locales', icon: LocalesMenuIcon,
	}, ];


	const seo_menu = [ { name: 'Casino', url: '/casino', isSpa: true }, { name: 'Casino en Vivo', url: '/casino/casino-en-vivo', isSpa: true }, { name: 'Ruleta', url: '/casino/ruleta', isSpa: true }, { name: 'Slots', url: '/casino/slots', isSpa: true }, { name: 'Blackjack', url: '/casino/blackjack', isSpa: true }, { name: 'Jackpots', url: '/casino/jackpots', isSpa: true }, { name: 'Eventos Deportivos', url: '/eventos-deportivos', isSpa: true }, { name: 'Apuestas Recomendades', url: '/cuotas-deportivas', isSpa: true }, ];

	const hamburgerHandler = () => {
		hamburger ? setOnShow ('') : setOnShow ('open');
		setHamburger ( !hamburger);
	};

	return (<Navbar
			className='header_nav stroke'
			variant='dark'
		>
			{props.flag ? (<div id='father'>
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
							onClose={hamburgerHandler}
						>
							{data.map ((d, k) => (<Nav.Link
									key={k}
									href={d.url}
									rel='nofollow'
									className={'bm-menu'}
								>
								<div className={'mobMenuSVGwrapper'}>
									{(React.createElement (d.icon, { className: "mobileMenuIcon" }))}
									{d.text}
								</div>

								<div className={'arrowright'}>
									< Arrowrightw/>
								</div>


								</Nav.Link>))}

							<Accordion className='hamb-accordion'>
								<Accordion.Item eventKey='0'>
									<Accordion.Header>¿Cómo jugar?</Accordion.Header>
									<Accordion.Body>
										<ul>
											{seo_menu.map ((s, k) => (<li key={k}>
													<Nav.Link
														onClick={s.isSpa ? hamburgerHandler : null}
														as={s.isSpa ? Link : 'a'}
														to={s.url}
														href={s.url}
													>
														{s.name}
														< Arrowrightw/>
													</Nav.Link>
												</li>))}
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
							className='acceder-button header_btn'
						>
							{siteData.acceder.txt}
						</Button>
						<Button
							href={siteData.registrate.url}
							rel='nofollow'
							className='registrate-button header_btn'
						>
							{siteData.registrate.txt}
						</Button>
					</div>
				</div>) : (<Container>
					<InputGroup className='header-group-left'>
						<Nav.Link href='https://m.apuestas.codere.es/deportes/#/HomePage'>
							<LazyLoadImage
								style={{ maxWidth: 150 }}
								src={LOGO}
								alt='Codere Casino Online en España'
							/>
						</Nav.Link>
						<Nav className='me-auto'>
							{siteData.topMenuDescLine.map ((d, k) => {
								return (<Nav.Link
										key={k}
										href={d.url}
										rel='nofollow'
									>
									{/*< Arrowrightw/>*/}
										{d.text}
									</Nav.Link>);
							})}
						</Nav>
					</InputGroup>

					<div className='header-group-right'>
						<Dropdown>
							<Dropdown.Toggle className='header_btn' id={'dropdownMenuBtnInicio'}>
								<Arrowdown/>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{seo_menu.map ((s, k) => {
									return (<Dropdown.Item
											key={k}
											as={s.isSpa ? Link : 'a'}
											to={s.url}
											href={s.url}
										>
											{s.name}
										</Dropdown.Item>);
								})}
							</Dropdown.Menu>
						</Dropdown>
						<Button
							href={siteData.acceder.url}
							rel='nofollow'
							// onClick={handleShow}
							className='acceder-button header_btn'
						>
							{siteData.acceder.txt}
						</Button>
						<Button
							href={siteData.registrate.url}
							rel='nofollow'
							className='registrate-button header_btn'
						>
							{siteData.registrate.txt}
						</Button>
					</div>
				</Container>)}
		</Navbar>);
}

export default Header;
