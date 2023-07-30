// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './CSS/seo.css';
import './CSS/eventos-styles.css';

import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

// global
import Header from './Components/Header';
import Footer from './Components/Footer';
import StickyFooter from './Components/parts/StickyFooter';
import Routing from './routes/Routing';

export const isMobileContext = React.createContext({
  isMobile: isMobile,
});
export const isMobileDT = isMobile;

const App = () => {
  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setFlag(true);
    else setFlag(false);
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header flag={flag} />
      <Routing flag={flag} />
      <Outlet />
      {flag ? <StickyFooter /> : null}
      <Footer />
    </>
  );
};

export default App;
