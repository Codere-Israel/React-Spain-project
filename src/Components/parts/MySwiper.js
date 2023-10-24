import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Lazy, Pagination } from 'swiper';
import SlideButton from './Slide-Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import banners from '../../JSON/data.json';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

var imgs = [];

function MySwiper (props) {
	// const BROADCAST_DATE = "2022-10-30T19:00:00Z";
	const DATE_TO_COUNT = '2022-12-18T15:00:00Z';
	const [ showTimer, setShowTimer ] = useState (false);
	const [ flag, setFlag ] = useState (1);

	const indexHandler = (swiper) => {
		if ( swiper.realIndex > 0 ) {
			setShowTimer (false);
			setFlag (0);
		} else if ( flag == 0 ) setShowTimer (true);
	};

	const siteData = {
		acceder: {
			url: 'https://m.apuestas.codere.es/deportes/index.htm#/HomePage?openlogin=true', txt: 'Acceder',
		}, registrate: {
			url: 'https://m.apuestas.codere.es/deportes/#/RegistroESPage', txt: 'Regístrate',
		}, gamesModuleMobile: {
			title1: 'JUEGOS DESTACADOS', title2: 'NUEVOS JUEGOS',
		}, gamesModuleDesctop: {
			title1: 'Mejores Juegos', title2: 'Nuevos Juegos',
		}, topMenuDescLine: [ {
			url: 'https://m.apuestas.codere.es/deportes/#/HomePage', text: 'DEPORTES',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/#/DirectosPage', text: 'EN VIVO',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/#/SlotsPage', text: 'SLOTS',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/#/CasinoPage', text: 'CASINO',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/index.htm#/CasinoPage?category=En%20Vivo', text: 'RULETA EN VIVO',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/index.htm#/AviatorPage', text: 'AVIATOR',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/index.htm#/PromotionsPage', text: 'PROMOCIONES',
		}, {
			url: 'https://m.apuestas.codere.es/deportes/#/NearestLocalPage', text: 'LOCALES',
		}, ], topDescDropdownMenuItems: [ {
			url: 'https://www.codere.es/casino', text: 'Casino',
		}, {
			url: 'https://www.codere.es/casino/casino-en-vivo', text: 'Casino En-Vivo',
		}, {
			url: 'https://www.codere.es/casino/ruleta', text: 'Ruleta',
		}, {
			url: 'https://www.codere.es/casino/slots', text: 'Slots',
		}, {
			url: 'https://www.codere.es/casino/blackjack', text: 'Blackjack',
		}, {
			url: 'https://www.codere.es/casino/jackpots', text: 'Jackpots',
		}, {
			url: 'https://www.codere.es/cuotas-deportivas', text: 'Apuestas Recomendades',
		}, {
			url: 'https://www.codere.es/eventos-deportivos', text: 'Eventos Deportivos',
		}, ],
	};

	function dateInBetween (banner) {
		return new Date () >= new Date (banner.startDate) && new Date () <= new Date (banner.endDate);
	}

	function BannerFilter (banner) {
		if ( !banner.scheduled ) return banner; else {
			if ( dateInBetween (banner) ) return banner;
		}
	}

	const onReadyHandler = () => {
		setShowTimer (true);
	};

	if ( !props.flag ) imgs = banners.desktop_slide_list.filter (BannerFilter); else imgs = banners.mobile_slide_list.filter (BannerFilter);
	return (<div id='carousel-section'>
			<>
				<Swiper
					onSlideChange={(swiper) => indexHandler (swiper)}
					modules={[ Pagination, EffectFade, Autoplay, Lazy ]}
					pagination={{ clickable: true }}
					effect={'fade'}
					// lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
					autoplay={{ delay: 3250, disableOnInteraction: false }}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					init={false}
					onImagesReady={onReadyHandler}
				>
					{imgs.map ((item, index) => (<SwiperSlide key={index}>
							<a href={siteData.registrate.url}>
								<img
									// width={item.width}
									// height={item.height}
									width={"100px"}
									height={"100px"}
									src={item.image}
									alt={item.img_alt}
								/>
							</a>
						</SwiperSlide>))}
				</Swiper>

				{!props.flag ? (<>
						<div>
							<Button
								className='central-regis gl-effect'
								href={siteData.registrate.url}
								rel={'nofollow'}
							>
								{siteData.registrate.txt}
								<FontAwesomeIcon icon={faAngleRight}/>
							</Button>
						</div>
					</>) : (<SlideButton regis={siteData.registrate.url}/>)}
			</>
		</div>);
}

export default MySwiper;
