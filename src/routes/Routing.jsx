import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navigations from '../Components/seo/Navigations';
import Inicio from '../Components/Inicio';
import Casino from '../Components/seo/casino/Casino';
import Slots from '../Components/seo/casino/Slots';
import CasinoEnVivo from '../Components/seo/casino/CasinoEnVivo';
import Blackjack from '../Components/seo/casino/Blackjack';
import Jackpots from '../Components/seo/casino/Jackpots';
import Ruleta from '../Components/seo/casino/Ruleta';
import EventosDeportivos from '../Components/seo/sports/EventosDeportivos';
import CuotasDeportivas from '../Components/seo/sports/CuotasDeportivas';
import Basketball from '../Components/seo/sports/events/Basketball';
import Formula from '../Components/seo/sports/events/Formula';
import Mundeal from '../Components/seo/sports/events/Mundeal';
import Esport from '../Components/seo/sports/events/Esport';
import Futbol from '../Components/seo/sports/cuotas/Futbol';
import NBA from '../Components/seo/sports/cuotas/NBA';
import Tenis from '../Components/seo/sports/cuotas/Tenis';
import Ciclismo from '../Components/seo/sports/cuotas/Ciclismo';
import F1 from '../Components/seo/sports/cuotas/F1';
import UFC from '../Components/seo/sports/cuotas/UFC';

export default function Routings(props) {
  const location = useLocation();
  const [activated, setActivated] = useState(0);

  useEffect(() => {
    setActivated(activeHandler);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const activeHandler = () => {
    switch (location.pathname) {
      default:
        return 0;
      case '/casino':
      case '/eventos-deportivos/apuestas-mundial-baloncesto':
      case '/cuotas-deportivas/apuestas-futbol':
        return 1;
      case '/casino/casino-en-vivo':
      case '/eventos-deportivos/apuestas-grand-prix':
      case '/cuotas-deportivas/apuestas-baloncesto':
        return 2;
      case '/casino/slots':
      case '/eventos-deportivos/apuestas-mundial-fifa':
      case '/cuotas-deportivas/apuestas-tenis':
        return 3;
      case '/casino/blackjack':
      case '/eventos-deportivos/apuestas-esport':
      case '/cuotas-deportivas/apuestas-ciclismo':
        return 4;
      case '/casino/ruleta':
      case '/cuotas-deportivas/apuestas-formula1':
        return 5;
      case '/casino/jackpots':
      case '/cuotas-deportivas/apuestas-ufc':
        return 6;
    }
  };

  const typeHandler = () => {
    if (location.pathname.includes('eventos')) return 0;
    else if (location.pathname.includes('casino')) return 1;
    else return 2;
  };

  return (
    <>
      {location.pathname.includes('deportiv') || location.pathname.includes('casino') ? (
        <Navigations
          index={activated}
          type={typeHandler()}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path='/'
          element={<Inicio flag={props.flag} />}
        />
        {/* Casino */}
        <Route
          exact
          path='casino'>
          <Route
            exact
            path=''
            element={<Casino flag={props.flag} />}
          />
          <Route
            exact
            path='casino-en-vivo'
            element={<CasinoEnVivo flag={props.flag} />}
          />
          <Route
            exact
            path='blackjack'
            element={<Blackjack flag={props.flag} />}
          />
          <Route
            exact
            path='jackpots'
            element={<Jackpots flag={props.flag} />}
          />
          <Route
            exact
            path='ruleta'
            element={<Ruleta flag={props.flag} />}
          />
          <Route
            exact
            path='slots'
            element={<Slots flag={props.flag} />}
          />
        </Route>
        {/* Eventos Deportivos */}
        <Route
          exact
          path='eventos-deportivos'>
          <Route
            exact
            path=''
            element={<EventosDeportivos flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-mundial-baloncesto'
            element={<Basketball flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-grand-prix'
            element={<Formula flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-esport'
            element={<Esport flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-mundial-fifa'
            element={<Mundeal flag={props.flag} />}
          />
        </Route>
        {/* Cuotas Deportivas */}
        <Route
          exact
          path='cuotas-deportivas'>
          <Route
            exact
            path=''
            element={<CuotasDeportivas flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-baloncesto'
            element={<NBA flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-tenis'
            element={<Tenis flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-ciclismo'
            element={<Ciclismo flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-formula1'
            element={<F1 flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-ufc'
            element={<UFC flag={props.flag} />}
          />
          <Route
            exact
            path='apuestas-futbol'
            element={<Futbol flag={props.flag} />}
          />
        </Route>
      </Routes>
    </>
  );
}
