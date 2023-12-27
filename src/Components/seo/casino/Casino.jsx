import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  Col,
  Container,
  NavLink,
  Row,
  Table,
} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import games from "./JSON/games.json";
import TableOfContents from "../TableOfContents";
import Floating from "../Floating";
import { Link } from "react-router-dom";

const Casino = (props) => {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es seguro jugar en un Casino Online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Siempre y cuando se juegue en un casino regulado en España, estos incorporan las medidas de seguridad necesarias para jugar de manera segura, y que además, no nos estafen.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los tipos de juego en el Casino más populares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existe una gran variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo, slots y mucho más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se retira las ganancias en Codere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entra en la sección de cobros de Codere y, siempre que tengas saldo retirable, podrás usar cualquiera de nuestros métodos de cobro. ",
        },
      },
    ],
  };
  const table_of_contents_list = [
    {
      title: "Los Juegos de Casino más increíbles ahora online",
      id: "juegos",
    },
    {
      title: "Diviértete en las transmisiones en directo con Crupieres reales",
      id: "transmisiones",
    },
    {
      title: "Lleva el Casino en tus manos con la app de Codere.es",
      id: "leva",
    },
    {
      title: "Ventajas de jugar en un Casino Online Regulado",
      id: "ventajas",
    },
    {
      title: "Preguntas frecuentes sobre el Casino Online",
      id: "preguntas",
    },
  ];

  const juegos = {
    id: "juegos",
    h2: "Los Juegos de Casino más increíbles ahora online ",
    p: "¡Únete ahora y comienza a apostar en tus juegos favoritos!",
    inner: [
      {
        h3: "Age of the Gods",
        text: "Esta slot de 5 carretes y 20 líneas de pago tiene 6 símbolos que representan a los míticos dioses griegos como Zeus, Atenea, Poseidón, Ares, el casco de Hércules, entre otros.",
      },
      {
        h3: "Buffalo Blitz",
        text: "Ambientado en el lejano Oeste, ganarás interesantes premios gracias a los protagonistas de este slot o tragaperras: los búfalos",
      },
      {
        h3: "Kingdoms Rise",
        text: "Disfruta de esta slot de temática de fantasía prehistórica en la serie de premios mayores de Playtech. La estructura del juego la integran 6 carretes y 4096 líneas de pago.",
      },
      {
        h3: "Ruleta Coderista",
        text: "La mejor ruleta te está esperando en el Casino de Codere. Con crupieres en directo, en español y las recompensas más atractivas",
      },
      {
        h3: "Blackjack Live ",
        text: "Consigue una mano de cartas que sea lo más cercana posible al 21, pero sin pasarte.",
      },
    ],
  };
  const transmisiones = {
    id: "transmisiones",
    h2: "Diviértete en las transmisiones en directo con Crupieres reales",
    p: "",
  };
  const leva = {
    id: "leva",
    h2: "Lleva el Casino en tus manos con la app de Codere.es ",
    p: "Podrás encontrar la app de Codere.es tanto en el Play Store de Android, como en la App Store de Apple. Con la aplicación de Codere podréis jugar desde cualquier parte y disfrutar desde tu sofá de los mejores juegos online del planeta. Todo el Casino, en un mismo lugar.",
    p2: "Esta app de Codere la podrás utilizar tanto desde tu móvil, como en tu ordenador o en una tablet. Así que ya sabes: descarga ahora la app de Codere.es y disfruta de una manera sencilla del mejor casino del mundo.",
  };
  const ventajas = {
    id: "ventajas",
    h2: "Ventajas de jugar en Casino Online Regulado ",
    p: [
      "Cada vez hay más personas en el mundo que optan por el Casino Online. Pero esta elección no es fruto de la coincidencia, tiene una explicación. Una de las primeras cosas que más llama la atención de los casinos online es la adaptabilidad a horarios y lugar, haciendo posible que todo el mundo pueda jugar cuando ellos lo deseen.",
      "Además la rapidez de las partidas en los Casinos Online hace que sea más interesante para aquellos jugadores impacientes. Otro de los aspectos es la seguridad con la que Codere alberga tu información, tu dinero y tus recompensas. ",
      "Por otro lado, el mayor número de promociones y beneficios presentes en los casinos online, hace que los usuarios lo vean como una ventaja. Por último, la facilidad de elección en la forma de pago y la seguridad que te ofrece un Casino online, hace que mucha gente guste más de él que de un local.",
    ],
    inner: {
      h3: "¿Cómo funciona?",
      text: "Registrarse en nuestro casino en línea es fácil. Simplemente crea una cuenta, realiza un depósito y comienza a jugar. Con soporte al cliente las 24 horas del día, los 7 días de la semana, siempre tendrás a alguien a quien acudir si necesitas ayuda.",
    },
  };
  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre el Casino Online ",
    inner: [
      {
        h3: "¿Es seguro jugar en un Casino Online?",
        text: "Siempre y cuando se juegue en un casino regulado en España, estos incorporan las medidas de seguridad necesarias para apostar de manera segura para ti.",
      },
      {
        h3: "¿Cuáles son los tipos de juego en el Casino más populares?",
        text: "Existe una gran variedad increíble de juegos casinos como blackjack, ruleta, ruleta en vivo, slots y mucho más.",
      },
      {
        h3: "¿Cómo se retiran las ganancias en Codere?",
        text: "Verifica tu documentación, entra en la sección de cobros de Codere y, siempre que tengas saldo retirable, podrás usar cualquiera de nuestros métodos de cobro.s",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>El Casino de España #1 para Jugar Online | Codere®</title>
        <meta
          name="description"
          content="Apuesta en línea con Codere y disfruta de los mejores juegos de Casino Online en España: ruletas, blackjack, slots y más"
        />
        <link rel="canonical" href="https://www.codere.es/casino" />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      {/* End of SEO block */}

      <Floating text="¡El mejor Casino!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/casino/casino${
            props.flag ? "Mobile" : ""
          }.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container>
        <h1 className="PageH1TitleSeoPages923 mt-4">
          Vive la experiencia del Casino Online desde España
        </h1>
        <p>
          Bienvenidos al mundo de los casinos online en España, donde la emoción
          del juego está a solo un clic de distancia. Ven, experimenta y
          diviértete apostando desde la comodidad de tu hogar. Juega, busca el{" "}
          <Link to="/casino/jackpots">jackpot</Link> y repite: nuestro casino en
          línea en España es tu destino para un entretenimiento único.
        </p>
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

        <div id={juegos.id} className="mt-4">
          <h2>{juegos.h2}</h2>
          <p>{juegos.p}</p>
          <Row className="casino-row">
            {games.casino
              .slice(0, !props.flag ? games.slots.length : 4)
              .map((game, k) => (
                <Col lg={2} md={4} xs={6} key={k}>
                  <NavLink rel="nofollow" href={game.link}>
                    <div className="cas-game-wrapper">
                      <LazyLoadImage
                        className="casino-game-img shining"
                        src={game.img}
                      />
                      <div className="hvr">
                        <p>{game.name}</p>
                        <LazyLoadImage src="https://www.codere.bet.ar/assets/seo/jackpotsPlayHoverLogo.svg" />
                      </div>
                    </div>
                  </NavLink>
                </Col>
              ))}
          </Row>
          <Accordion>
            {juegos.inner.map((games, k) => (
              <Accordion.Item eventKey={k} key={k}>
                <Accordion.Header as="h3">{games.h3}</Accordion.Header>
                <Accordion.Body>{games.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div id={transmisiones.id} className="mt-4">
          <h2>{transmisiones.h2}</h2>
          <p>
            En los juegos de casino por streaming, los crupieres reales operan
            las mesas de juego, como la <Link to="/casino/ruleta">ruleta</Link>,
            el <Link to="/casino/blackjack">blackjack</Link>, entre otros. Ellos
            interactúan contigo y otros jugadores a través de un chat en vivo,
            respondiendo preguntas y llevando a cabo todas las acciones del
            juego en tiempo real. Puedes ver las cartas siendo repartidas, la
            ruleta girando y la bola saltando hasta que se detenga en un número,
            todo ello gracias a la transmisión en directo de alta calidad.
          </p>
        </div>

        <div id={leva.id} className="mt-4">
          <h2>{leva.h2}</h2>
          <p>{leva.p}</p>
          <p>{leva.p2}</p>
        </div>
        <div id={ventajas.id} className="mt-4">
          <h2>{ventajas.h2}</h2>
          {ventajas.p.map((pi, k) => (
            <p key={k}>{pi}</p>
          ))}
          <h3>{ventajas.inner.h3}</h3>
          <p>{ventajas.inner.text}</p>
          <Table striped bordered hover variant="dark" className="mb-4">
            <tbody>
              <tr>
                <td>🏆 Establecido</td>
                <td>2008</td>
              </tr>
              <tr>
                <td>🎰 Juegos ofrecidos</td>
                <td>900+</td>
              </tr>
              <tr>
                <td>🎲 Licencia de juego</td>
                <td>
                  Licencias otorgadas por la DGOJ: 225-11/GA/A86346038/SGR,
                  AOC/2014/002, ADC/2014/001, AHC/2014/002, 223-11/GO/
                  A86346038/SGR, MAZ/2015/032, RLT/2016/009, BLJ/2016/007.
                </td>
              </tr>
              <tr>
                <td>✔️ Moneda</td>
                <td>EUR</td>
              </tr>
              <tr>
                <td>💰 Depósito mínimo</td>
                <td>10€</td>
              </tr>
              <tr>
                <td>💸 Límites de Retiros</td>
                <td>El máximo de retiro es de 10.000€</td>
              </tr>
              <tr>
                <td>💳 Formas de Pago</td>
                <td>
                  Bizum, Visa, MasterCard, Transferencia Bancaria, Netller,
                  Skrill, Paypal, Paysafecard, MuchBetter, Halcash, Rapid
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div id={preguntas.id} className="mt-4">
          <h2>{preguntas.h2}</h2>

          <Accordion>
            {preguntas.inner.map((question, k) => (
              <Accordion.Item eventKey={k} key={k}>
                <Accordion.Header as="h3">{question.h3}</Accordion.Header>
                <Accordion.Body>{question.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default Casino;
