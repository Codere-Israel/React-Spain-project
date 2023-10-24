import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy } from 'swiper';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/autoplay';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GameSwiper(props) {
  const GAME_PREFIX = 'https://m.apuestas.codere.es/deportes/index.htm#';
  const IMAGE_PREFIX = 'https://www.codere.es/lobby_tiles';

  return (
    <div className='game-carousel'>
      <Swiper
        modules={[Autoplay, Lazy]}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 200000, disableOnInteraction: false }}
        spaceBetween={15}
        slidesPerView={3}
        loop={true}>
        {props.games.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a
                href={`${GAME_PREFIX}/${item.gameType}?playgame=${item.sponsor} ${item.name}`}
                rel={'nofollow'}>
                <LazyLoadImage
                  // src={`${IMAGE_PREFIX}/${item.sponsor}${item.name.replaceAll(' ', '')}_square.jpg`}
                    width={"50px"}
                    height={"50px"}
                    src={item.imgUrl}
                  alt={item.alt}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default GameSwiper;
