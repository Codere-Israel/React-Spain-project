import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, Container, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';
import { Link } from 'react-router-dom';
// import articleStructuredData from './articleStructuredData.json';

const Jackpots = (props) => {
  const table_of_contents_list = [
    {
      title: 'Juega a nuestros increíbles Jackpots',
      id: 'juega',
    },
    {
      title: '¿Qué es y qué tipos de jackpots existen?',
      id: 'tipos',
    },
    {
      title: 'Tu oportunidad para llevarte el bote acumulado la tienes todos los días',
      id: 'leva',
    },
    {
      title: 'El jackpot más grande en España se ganó en Codere',
      id: 'grande',
    },
  ];

  const juega = {
    id: 'juega',
    h2: 'Juega en nuestros increíbles Jackpots',
    inner: [
      {
        h3: 'Age of the Gods God of Storms y Age of The Gods Mighty Midas',
        text: 'La mítica saga de los dioses protagoniza una de las series de slots más divertidas donde podréis llevarte el jackpot.',
      },
      {
        h3: 'Gladiator Road to Rome',
        text: 'Una aventura épica en donde el máximo luchador buscará conseguir la gloria en territorio romano.',
      },
      {
        h3: 'Jackpot Bells',
        text: 'Una espectacular slot que te puede hacer ganar con su mezcla de sabores y frutas de todos colores.',
      },
      {
        h3: 'Pharaohs Treasure Deluxe',
        text: 'El antiguo Egipto no solamente tiene grandes faraones sino también un Jackpot progresivo que está por explotar. ',
      },
      {
        h3: 'Jackpot Giant',
        text: 'Si de gigantes hablamos, este Jackpot es uno de los más grandes y todo es gracias a que está resguardado por un tipo bastante grandullón.',
      },
    ],
  };
  const tipos = {
    id: 'tipos',
    h2: '¿Qué es y qué tipos de jackpots existen?',
    text: 'Un Jackpot o bote acumulado es el premio máximo que una slot puede dar a un jugador. Para conseguirlo tienes que mirar si la tragaperra dispone de un bote superior al que paga como máximo dicho juego. A partir de ahí ya es cuestión de suerte y de conocer bien los dos tipos de jackpots:',
    inner: [
      {
        h3: 'Jackpot fijos:',
        text: 'Son botes en los cuales la cantidad en juego no tiene variación. Esta cantidad siempre se mantendrá sin importar si juegas más veces.',
      },
      {
        h3: 'Jackpot progresivo:',
        text: 'Son los premios acumulados que pueden ir creciendo cada vez más. Estos Jackpots aumentarán de acuerdo a un porcentaje de la cantidad que tú sigas jugando en esta slot. ¡No pierdas de vista este tipo de premios!',
      },
    ],
  };
  const leva = {
    id: 'leva',
    h2: 'Tu oportunidad para llevarte el bote acumulado la tienes todos los días.  ',
    p: 'Ahora que ya sabes lo que son los Jackpots y los diferentes juegos en los que hay uno, también tienes que saber dónde y cuándo puedes localizar estos botes.',
    p2: 'No hace falta que hagas una gran búsqueda, ni que pongas una alarma para pillar el día, ya que puedes encontrar todos nuestros Jackpots diarios en la sección de Casino. Sí, diarios, no hace falta que esperes a un día exacto de la semana para que puedas encontrar ese premio que tanto quieres, solo tienes que tener la suerte que todos necesitamos y acertar la línea exacta-. ¡A POR EL BOTE!',
    inner: {
      h3: 'Consejos ',
      text: [
        'Seguramente con todo lo que has leído lo primero que harás será comenzar a jugar una de las slots que te hemos recomendado, pero antes de eso pon atención a estos consejos que sin duda te serán muy útiles.',
        'El problema de los Jackpots es que solo se entregan cada cierto tiempo, por lo que es muy difícil ganarlos. Nuestro primer consejo es: No aferrarse a ganar ese premio máximo cueste lo que cueste.',
        'Algunos aconsejan también jugar a los Jackpots de tipo progresivo ya que hay más posibilidades de que salgan en comparación con las slots que cuestan menos dinero. Pero, sin duda, lo mejor es apostar a los juegos que más conozcas y que mejor se adapten a tus necesidades. En cualquier caso, no olvides que siempre hay que jugar con la cabeza y nunca abusar del tiempo y/o la cantidad de dinero con la que puedes apostar.',
      ],
    },
  };
  const grande = {
    id: 'grande',
    h2: 'El jackpot más grande en España se ganó en codere ',
    text: [
      'Si eres de los que piensan que hasta que no lo veas no lo crees, tienes que conocer esta gran historia que se dio con uno de los jugadores de Casino en Codere.es. En enero de 2020 un usuario se puso a jugar de forma habitual su slot preferida, Gladiator Road to Rome, sin saber que ese día batiría uno de los récords más grandes para un jugador de Jackpots.',
      'Anteriormente el jugador español que se había llevado el premio más grande consiguió un acumulado de 130.000€ euros. Esta vez la historia se repetiría, pero con un incremento brutal de más de 10 veces en la recompensa. El tiro de la suerte fue sacando 9 símbolos de corona dorada, lo que provocó la memorable victoria del bote progresivo. El premio que se llevó a casa el millonario afortunado fue de 1.510.172,82 €, batiendo todos los récords anteriores.',
      'Si quieres convertirte en el próximo ganador, no te lo pienses más, cruza los dedos y comienza tu siguiente partida, porque en Codere todo es posible.',
    ],
  };

  return (
    <>
      <Helmet>
        <title>Explota el Jackpot: la gran oportunidad es hoy | Codere®</title>

        <meta
          name='description'
          content='Un Jackpot o bote acumulado es el premio máximo que ciertas slots pueden dar a un jugador. En Codere encontrarás los mejores juegos de casino en línea.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/jackpots'
        />
      </Helmet>
      {/* End of SEO block */}

      <Floating
        text='¡Oportunidades que Molan!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/jackpots/jackpots${
            props.flag ? 'Moblie' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>
      <Container>
        <h1 className='PageH1TitleSeoPages923 mt-4'>
          Multiplica tus premios con nuestros populares Jackpots.
        </h1>
        <p>
          La posibilidad de ganar un Jackpot puede aumentar la emoción y la diversión al jugar{' '}
          <Link to='/casino'> casino en línea</Link>. Además, puedes apostar desde la palma de tu
          mano en cualquier momento
        </p>

        {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

        <div
          id={juega.id}
          className='mt-4'>
          <h2>{juega.h2}</h2>
          <p>
            Te preguntarás: ¿cuáles son las <Link to='/casino/slots'>slots</Link> de Codere donde
            puedo encontrar los Jackpots? Pon mucha atención y no olvides estos juegos:
          </p>
          <Row className='casino-row'>
            {games.jackpots.slice(0, !props.flag ? 12 : 4).map((game, k) => (
              <Col
                lg={2}
                md={4}
                xs={6}
                key={k}>
                <NavLink href={game.link}>
                  <div className='cas-game-wrapper'>
                    <LazyLoadImage
                      className='casino-game-img shining'
                      src={game.img}
                    />
                    <div className='hvr'>
                      <p>{game.name}</p>
                      <LazyLoadImage src='https://www.codere.bet.ar/assets/seo/jackpotsPlayHoverLogo.svg' />
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
          </Row>
          <Accordion>
            {juega.inner.map((game, k) => (
              <Accordion.Item
                eventKey={k}
                key={k}>
                <Accordion.Header as='h3'>{game.h3}</Accordion.Header>
                <Accordion.Body>{game.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div
          id={tipos.id}
          className='mt-4'>
          <h2>{tipos.h2}</h2>
          <p>{tipos.text}</p>
          {tipos.inner.map((tip, k) => (
            <div key={k}>
              <h3>{tip.h3}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
        <div
          id={leva.id}
          className='mt-4'>
          <h2>{leva.h2}</h2>
          <p>{leva.p}</p>
          <p>{leva.p2}</p>
          <h3>{leva.inner.h3}</h3>
          {leva.inner.text.map((t, k) => (
            <p key={k}>{t}</p>
          ))}
        </div>
        <div
          id={grande.id}
          className='mt-4'>
          <h2>{grande.h2}</h2>
          {grande.text.map((t, k) => (
            <p key={k}>{t}</p>
          ))}
        </div>
        <a
          rel='nofollow'
          className='registrate-button  bottomContentPromoButton btn btn-primary'
          href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
          Regístrate
        </a>
      </Container>
    </>
  );
};

export default Jackpots;
