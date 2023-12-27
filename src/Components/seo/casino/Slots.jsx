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
import TableOfContents from "../TableOfContents";
import games from "./JSON/games.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../Floating";
import { Link } from "react-router-dom";

const Slots = (props) => {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo ganar en las slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para ganar en las slots, debe coincidir varias veces el mismo símbolo en una sola línea de pago para llevarse así el premio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo jugar a las slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Elige las slots online que prefieras y ábrela en tu dispositivo. Elige la cantidad que desees apostar y a cuántas líneas de pago quieres jugar. Utiliza el botón de “Apuesta Máxima” si quieres jugar en todas las líneas a la vez. Dale a “girar” para que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si optas por hacerlo, puedes ganar premios aún mayores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué son las líneas en las tragaperras?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca una combinación de símbolos determinada por el desarrollador de la slot.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el RTP en las slots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Detrás de estas tres letras, se esconde el término inglés “return to player rate”, que en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del dinero jugado a largo plazo en todas tus apuestas en una tragaperras. Es un dato que deberíamos tener en cuenta a la hora de decidirnos por una slot u otra.",
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: "Elige entre las slots más populares",
      id: "elige",
    },
    {
      title: "Juega a tus slots favoritas desde tu móvil",
      id: "juega",
    },
    {
      title: "Ventajas de jugar Slots online",
      id: "ventajas",
    },
    {
      title: "Preguntas frecuentes sobre las slots",
      id: "preguntas",
    },
  ];

  const elige = {
    id: "elige",
    h2: "Elige entre las slots más populares",
    inner: {
      h3: "Tipos de máquinas tragaperras online ",
      list: [
        {
          bolded: "Clásicas: ",
          text: "Estos juegos están inspirados en las máquinas tragaperras tradicionales de los locales. Suelen tener símbolos de frutas, campanas, barras y números. Son sencillos de jugar y suelen tener tres carretes y una línea de pago.",
        },
        {
          bolded: "En Video: ",
          text: "Estos juegos ofrecen gráficos avanzados, animaciones y sonidos temáticos. Pueden tener diferentes temáticas como aventuras, películas, mitología, etc. Por lo general, tienen cinco carretes y múltiples líneas de pago, además de funciones especiales como símbolos de comodín, dispersión, rondas de bonificación y giros gratis.",
        },
        {
          bolded: "Progresivas: ",
          text: "En este tipo de juegos, una parte de cada apuesta realizada por los jugadores se destina a un bote acumulado, conocido como jackpot progresivo. Este bote puede llegar a ser muy grande y puede ser ganado por un afortunado jugador. Cada vez que alguien juega, el jackpot aumenta.",
        },
        {
          bolded: "Slots 3D: ",
          text: "Estas tragaperras ofrecen gráficos en 3D impresionantes y animaciones avanzadas que brindan una experiencia visual más inmersiva. Los personajes y los elementos del juego suelen tener una apariencia realista y detallada.",
        },
      ],
    },
  };

  const juega = {
    id: "juega",
    h2: "Juega a tus slots favoritos desde tu móvil",
    p: "Codere ya tiene su app. Podrás encontrarla en la Play Store de Android o en la App Store de Apple. Además, la app de Codere te permitirá jugar en el mejor casino online desde el sofá de tu casa, y disfrutar en tu móvil, en tu ordenador o desde una tablet.",
    p2: "Comienza a disfrutar de la mejor app de Codere en dónde podrás encontrar la gran gama de slots que se encuentran en el Casino: Age of the Gods, Book of oz, la Casa de papel y muchos más slots que te están esperando en la app de Codere. Así que no te lo pienses más, descárgate la app de Codere y disfruta ahora del mejor casino online del mundo",
  };

  const ventajas = {
    id: "ventajas",
    h2: "Ventajas de jugar Slots online ",
    text: [
      "Aunque las reglas básicas del juego no cambian en ninguna, existen grandes diferencias entre las slots online y las máquinas tragaperras. Una de las principales diferencias viene en la experiencia que tiene el usuario a la hora de jugar. En las máquinas tragaperras tradicionales, existe una interacción con la máquina a la hora de sentarse delante, introducir el dinero, darle al botón, escuchar el ruido de las máquinas. Algo que se ha perdido con las slots online.",
      "Otra de las diferencias existentes está en los carretes, filas y líneas de pago. En las tradicionales, los juegos contienen solo tres carretes y tres filas, mientras que en las online contienen por lo menos cinco carretes, aunque el número puede ser mayor dependiendo del juego específico. Desde que las slots online tienen más carretes, también cuentan con más líneas de pago, lo que significa que hay más maneras de ganar con cada giro que se haga.",
      "Adicional a los carretes de más, las máquinas de slot online también cuentan con muchos más temas interactivos. Estos juegos de slots de casino online combinan la emoción de las máquinas tragaperras, con gráficos en 3D y las historias inmersivas de los videojuegos.",
    ],
  };

  const preguntas = {
    id: "preguntas",
    h2: "Preguntas frecuentes sobre las slots",
    inner: [
      {
        h3: "¿Cómo ganar en las slots? ",
        p: "Para ganar en las slots, debe coincidir varias veces el mismo símbolo en una sola línea de pago para llevarse así el premio.",
      },
      {
        h3: "¿Cómo jugar a las slots? ",
        p: "Elige las slots online que prefieras y ábrela en tu dispositivo. Elige la cantidad que desees apostar y a cuántas líneas de pago quieres jugar. Utiliza el botón de “Apuesta Máxima” si quieres jugar en todas las líneas a la vez. Dale a “girar” para que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si optas por hacerlo, puedes ganar premios aún mayores.",
      },
      {
        h3: "¿Qué son las líneas en las tragaperras? ",
        p: "Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca una combinación de símbolos determinada por el desarrollador de la slot.",
      },
      {
        h3: "¿Qué es el RTP en las slots?",
        p: "Detrás de estas tres letras, se esconde el término inglés “return to player rate”, que en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del dinero jugado a largo plazo en todas tus apuestas en una tragaperras. Es un dato que deberíamos tener en cuenta a la hora de decidirnos por una slot u otra.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title> Slots en Línea » Juega Tragaperras en España | Codere®</title>

        <meta
          name="description"
          content="Las Slots son de lo más emocionante en el casino online de Codere España Diviértete jugando en máquinas tragaperras desde tu móvil u ordenador"
        />
        <link rel="canonical" href="https://www.codere.es/casino/slots" />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      {/* End of SEO block */}

      <Floating text="¡Las mejores temáticas!" juega={true} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/slots/Slots${
            props.flag ? "Mobile" : ""
          }.webp)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container className="mt-4">
        <h1 style={{ textAlign: "center" }}>
          Las slots más emocionantes para jugar en España
        </h1>
        <p>
          Cada juego de slot o tragaperras que encuentres en nuestro{" "}
          <Link to="/casino">casino</Link> online contará con un conjunto único
          de líneas de pago. Para ganar, deberás hacer coincidir un símbolo
          concreto en una de estas líneas, así de sencillo. Elige entre la gran
          variedad de opciones de juegos de slots en Codere.
        </p>
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}

        <div id={elige.id} className="mt-4">
          <h2>{elige.h2}</h2>
          <Row className="casino-row">
            {games.slots.slice(0, !props.flag ? 12 : 4).map((game, k) => (
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
          <Table striped bordered hover variant="dark" className="mb-4">
            <tbody>
              <tr>
                <td>Top de Slots 🎰</td>
                <td>Temática</td>
              </tr>
              <tr>
                <td>Age of the Gods</td>
                <td>
                  Es una slot de Playtech basada en la mitología griega antigua.
                </td>
              </tr>
              <tr>
                <td>Book of oz</td>
                <td>
                  El camino de Dorothy hasta Ciudad Esmeralda es tortuoso pero
                  mágico y ante el mago de Oz podrás encontrar toda la fortuna
                  que estás buscando.
                </td>
              </tr>
              <tr>
                <td>La Casa de Papel</td>
                <td>
                  Ayuda al profesor y a su banda con máscaras de Dalí a robar el
                  Banco de España.
                </td>
              </tr>
              <tr>
                <td>Kingdoms Rise </td>
                <td>Lucha contra los dragones en este slot de Playtech.</td>
              </tr>
            </tbody>
          </Table>
          <h3>{elige.inner.h3}</h3>
          {elige.inner.list.map((tip, k) => (
            <p key={k}>
              <strong>{tip.bolded}</strong>
              {tip.text}
            </p>
          ))}
        </div>
        <div id={juega.id} className="mt-4">
          <h2>{juega.h2}</h2>
          <p>{juega.p}</p>
          <p>{juega.p2}</p>
        </div>
        <div id={ventajas.id} className="mt-4">
          <h2>{ventajas.h2}</h2>
          {ventajas.text.map((t, k) => (
            <p key={k}>{t}</p>
          ))}
        </div>
        <div id={preguntas.id} className="mt-4">
          <h2>{preguntas.h2}</h2>
          <Accordion>
            {preguntas.inner.map((question, k) => (
              <Accordion.Item eventKey={k} key={k}>
                <Accordion.Header as="h3">{question.h3}</Accordion.Header>
                <Accordion.Body>{question.p}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <p></p>
        </div>
        <a
          rel="nofollow"
          className="registrate-button  bottomContentPromoButton btn btn-primary"
          href="https://m.apuestas.codere.es/deportes/#/RegistroESPage"
        >
          Regístrate
        </a>
      </Container>

      {/*container end div*/}
    </>
  );
};

export default Slots;
