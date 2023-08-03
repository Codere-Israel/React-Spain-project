import TopGame from './TopGame';
import BottomGame from './BottomGame';
import gameCarousel from '../../JSON/mob-games.json';
import deskGames from '../../JSON/desktop-games.json';
import { isMobile } from 'react-device-detect';
import GameSwiper from './GameSwiper';

// Top Games \\

function Games() {
  return isMobile ? (
    <div id='mobile_games'>
      <span className='game-title'> Juegos Destacados </span>
      <GameSwiper games={gameCarousel.first_slide_list} />
      <span className='game-title'> Nuevos Juegos </span>
      <GameSwiper games={gameCarousel.second_slide_list} />
    </div>
  ) : (
    <div id='desktop_games'>
      <span className='game-title'> Mejores Juegos </span>
      <div className='top_games_conatiner'>
        {deskGames.top_games.map((item, key) => {
          return (
            <TopGame
              key={key}
              imgSrc={item.image}
              logo={item.logo}
              gameLink={item.gamelink}
              sponsor={item.sponsor}
              game_name={item.name}
              alt={item.alt}
              logoAlt={item.logo_alt}
            />
          );
        })}
      </div>
      <span className='game-title'> Nuevos Juegos </span>

      <div className='bottom_conatiner'>
        {deskGames.bottom_games.map((item, key) => {
          return (
            <BottomGame
              key={key}
              img={item.image}
              logo={item.logo}
              gameLink={item.gamelink}
              name={item.name}
              alt={item.alt}
              logoAlt={item.logo_alt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Games;
