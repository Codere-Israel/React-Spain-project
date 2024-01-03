// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./CSS/seo.css";
import "./CSS/eventos-styles.css";

import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

// global
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StickyFooter from "./Components/parts/StickyFooter";
import Routing from "./routes/Routing";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Button, ButtonGroup } from "react-bootstrap";

export const isMobileContext = React.createContext({
  isMobile: isMobile,
});
export const isMobileDT = isMobile;

const App = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(
    Cookies.get("codere_cookie") ? false : true
  );

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
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cookieHandler = (isAccepted) => {
    // console.log("cis");
    Cookies.set("codere_cookie", isAccepted ? "accepted" : "rejected", {
      domain: ".codere.es",
    });
    setShowCookieConsent(false);
  };

  return (
    <>
      <Header flag={flag} />
      {showCookieConsent && (
        <CookieConsent
          cookieName="codere_cookie"
          expires={365}
          buttonClasses="cookie-btn"
          // cookieValue={"accepted"}
          buttonText=""
          overlay={false}
          disableButtonStyles
          extraCookieOptions={{ domain: ".codere.es" }}
          overlayClasses="cookie-overlay"
          containerClasses="cookie-container"
          contentClasses="cookie-content"
        >
          <div className="cookie-text">
            <h3>Configuración de cookies</h3>
            Esta página web, propiedad de Codere Online S.A.U, utiliza cookies
            propias y de terceros con la finalidad de permitir tu navegación,
            elaborar información estadística y analizar tus hábitos de
            navegación, así como mostrarte la publicidad ajustada a tus
            preferencias. Puedes hacer clic en ACEPTAR para permitir el uso de
            todas las cookies, rechazarlas todas haciendo clic en RECHAZAR, o
            elegir qué tipo de cookies deseas aceptar o rechazar, mediante la
            opción configurar cookies. Puedes obtener más información en nuestra{" "}
            <a href="https://www.codere.es/informaci%C3%B3n-legal/politica-de-cookies">
              política de cookies
            </a>
            . Está página web está optimizada para Google Chrome, en caso de
            encontrar algún funcionamiento incorrecto por favor use el citado
            navegador. <br />
          </div>
          <ButtonGroup className="cookie-btn-group">
            <Button
              className="gr-cookie cookie-btn"
              onClick={() => cookieHandler(true)}
            >
              Aceptar
            </Button>
            <Button
              className="gr-cookie cookie-btn"
              onClick={() => cookieHandler(false)}
            >
              Rechazar
            </Button>
            <Button
              className="wh-cookie cookie-btn"
              rel="nofollow"
              href="https://m.apuestas.codere.es/deportes/#/CookiesConsentPage"
            >
              Configurar Cookies
            </Button>
          </ButtonGroup>
        </CookieConsent>
      )}

      <Routing flag={flag} />
      <Outlet />
      {flag ? <StickyFooter /> : null}
      <Footer />
    </>
  );
};

export default App;
