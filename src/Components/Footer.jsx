import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

// Codere Footer \\
const Footer = () => {
  return (
    <>
      <footer className="nb-footer">
        <div className="container">
          <div className="about">
            <div className="social-media">
              <ul className="list-inline">
                <li>
                  <a
                    href="https://m.apuestas.codere.es/deportes/#/ContactPage"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faHeadset} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/CodereApuestas/"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/codereapuestas/"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/@Codereapuestas" rel="nofollow">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCnHiADE4Tfzg94iTGKx9WOQ"
                    rel="nofollow"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row apps">
            <div className="col">
              <a
                href="https://codere.onelink.me/3k3c?pid=SplashPage_ES&c=iOS&af_dp=codere%3A%2F%2F&af_web_dp=https%3A%2F%2Fwww.codere.es%2Fapuesta-en-tu-m%C3%B3vil"
                rel="nofollow"
              >
                <img
                  src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/appstore.svg"
                  alt="Descarga en App Store"
                />
              </a>
              <a
                href="https://codere.onelink.me/3k3c?pid=SplashPage_ES&c=Android&af_dp=codere%3A%2F%2F&af_web_dp=https%3A%2F%2Fwww.codere.es%2Fapuesta-en-tu-móvil"
                rel="nofollow"
              >
                <img
                  src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/android.png"
                  alt="Descarga en Google Play"
                />
              </a>
            </div>
          </div>
          <div className="sponsors">
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/BIZUM.png"
              alt="bizum"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/codereFooter.png"
              alt="Codere"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/visa.png"
              alt="Visa"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/MasterCard.png"
              alt="Master-Card"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/transferencia.png"
              alt="transferencia"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/neteller.png"
              alt="neteller"
            />

            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/Skrill.png"
              alt="Skrill"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/Paypal.png"
              alt="Paypal"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/Paysafecard.png"
              alt="Paysafecard"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/muchbetter.png"
              alt="MuchBetter"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/halcash.png"
              alt="halcash"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/rapidTransfer.png"
              alt="RapidTransferBrokers"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/Transferencia-Inmediata.png"
              alt="Transferencia-Inmediata"
            />
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/images/splash/Astropay.png"
              alt="Astropay"
            />
          </div>

          <div className="row footerLinks">
            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">SOBRE NOSOTROS</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.codere.es/ayuda/juego-responsable"
                      rel="nofollow"
                    >
                      Juego más seguro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ordenacionjuego.es/es/op-CodereOnline"
                      rel="nofollow"
                    >
                      Juego Autorizado
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.apuestas.codere.es/csbgonline/condicionesgenerales/CondicionesGeneralesOnlineNacional.pdf?_ga=1.14119028.2134564450.1475767251"
                      target="_blank"
                      rel="nofollow"
                    >
                      Contrato
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.es/informaci%C3%B3n-legal/reglas-particulares"
                      rel="nofollow"
                    >
                      Reglas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.apuestas.codere.es/csbgonline/condicionesgenerales/CondicionesGeneralesOnlineNacional.pdf#proteccion_datos_personales"
                      rel="nofollow"
                    >
                      Protección Datos Jugadores
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.es/informaci%C3%B3n-legal/politica-de-cookies"
                      rel="nofollow"
                    >
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere-partners.com/es/"
                      rel="nofollow"
                      target="_blank"
                    >
                      Afiliados de Codere
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">LINKS DESTACADOS</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.codere.es/ayuda/apuesta-en-tu-movil">
                      Descarga App
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/ayuda/resultados-y-estadisticas">
                      Resultados y Estadísticas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/casino">Casino</a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/casino/ruleta">Ruleta</a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/casino/slots">Slots</a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/casino/blackjack">
                      Blackjack
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/casino/jackpots">Jackpots</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">DEPORTES</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.codere.es/dep%C3%B3sitos/dep%C3%B3sito-online">
                      Info Depósitos y Cobros
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.es/apuestas/c%C3%B3mo-y-d%C3%B3nde-apostar"
                      rel="nofollow"
                    >
                      Cómo Apostar
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/cuotas-deportivas">
                      Apuestas Recomendadas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codere.es/eventos-deportivos">
                      Eventos Deportivos
                    </a>
                  </li>

                  <li>
                    <a href="https://blog.codere.es/" target="_blank">
                      Blog Codere
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/HomePage"
                      rel="nofollow"
                    >
                      Deportes
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">AYUDA</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.codere.es/ayuda" rel="nofollow">
                      Ayuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.es/informaci%C3%B3n-legal/t%C3%A9rminos-y-condiciones"
                      rel="nofollow"
                    >
                      T&C Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codere.es/Paginas/proteccion-datos-web.aspx"
                      rel="nofollow"
                    >
                      Protección Datos Web
                    </a>
                  </li>
                  <li>
                    <a href="mailto:apuestas@codere.com" rel="nofollow">
                      Contacto: apuestas@codere.com
                    </a>
                  </li>
                  <li>
                    <a href="callto:91 343 29 50" rel="nofollow">
                      91 343 29 50
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.apuestas.codere.es/deportes/#/ContactPage"
                      rel="nofollow"
                    >
                      Online chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "2vw" }} />

        <div className="row juegas-banners">
          <div className="col">
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/PlayResponsible.png"
              alt="Play Responsible"
            />
            <a
              href="https://www.ordenacionjuego.es/es/rgiaj"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/autopro.png"
                alt="AutoPro"
              />
            </a>
            <a
              href="https://www.juegoseguro.es/"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/JugarSeguro.svg"
                alt="JugarSeguro"
              />
            </a>
            <a href="https://jugarbien.es/" target="_blank" rel="nofollow">
              <img
                src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/JugarBien.svg"
                alt="JugarBien"
              />
            </a>
            <a
              href="https://www.codere.es/Paginas/juego-responsable.aspx#procreg"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/plus18.png"
                alt="+18"
              />
            </a>
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/sin-dev.png"
              alt="Sin diversión no hay juego"
            />
          </div>
        </div>

        <div id="legals" style={{ marginBottom: "2vw" }}>
          <a href="https://m.apuestas.codere.es/csbgonline/condicionesgenerales/politicaseguridadinformacion.pdf">
            <img
              src="https://www.codere.es/_catalogs/masterpage/codere/newSplashTest/assets/aenor.png"
              alt="AENOR Seguridad Información"
            />
          </a>
          <div className="legal-txt"></div>
          Codere Apuestas opera en España bajo Codere Online, SAU, con las
          siguientes licencias otorgadas por la DGOJ: 225-11/GA/A86346038/SGR,
          AOC/2014/002, ADC/2014/001, AHC/2014/002, 223-11/GO/ A86346038/SGR,
          MAZ/2015/032, RLT/2016/009, BLJ/2016/007.
        </div>
      </footer>
    </>
  );
};

export default Footer;
