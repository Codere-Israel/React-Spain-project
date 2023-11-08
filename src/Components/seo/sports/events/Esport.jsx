import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Esport(props) {
  const title = 'Guía de apuestas para Esports | Codere®';
  const description =
    'Las apuestas de Esports son muy diferentes dependiendo del tipo de juego Conoce aquí el tipo de apuesta más usado en la Casa de apuestas Codere';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué son los esports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los Esports son competiciones que se desarrollan en el mundo de los videojuegos y que están logrando ganar terreno en la industria del entretenimiento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es la superliga esports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Superliga es la competición más importante de League of Legends y otros esports en España. Es organizada por la liga de videojuegos profesional (LVP).',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué  es un club de esports',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es un equipo formado por progamers o jugadores profesionales de videojuegos que compiten en ligas de nivel superior.',
        },
      },
    ],
  };

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Esport/${
    props.flag ? 'M' : 'D'
  }-Esport-`;
  const jpg = '.jpg';

  const top_par = {
    h1: 'Guía de apuestas para Esports',
  };

  const openingQuestion = {
    id: 'openingQuestion',
    h2: '¿Qué son los esports y cómo apostar?',
    p1: 'Los eSports, abreviatura de "electronic sports" o deportes electrónicos, son competiciones de videojuegos organizadas a nivel profesional. En estos eventos, jugadores individuales o equipos compiten en videojuegos populares como League of Legends, Counter-Strike, Dota 2 y muchos otros. ',
    p2: 'Los eSports atraen a una audiencia global y cuentan con ligas, torneos y campeonatos que ofrecen premios significativos, creando una industria en auge en la que los jugadores son considerados atletas virtuales.',
    p3: 'Para apostar en eSports, los aficionados pueden recurrir a casas de apuestas en línea especializadas como Codere que ofrece una amplia variedad de mercados de apuestas. ',
    p4: 'Los apostadores pueden elegir entre opciones como el resultado de un partido, el equipo que ganará un torneo, el número de rondas o mapas jugados, entre otros. Es importante investigar a los equipos y jugadores, seguir las tendencias y estadísticas, y estar al tanto de las últimas noticias para tomar decisiones informadas al apostar en eSports. Como en cualquier forma de apuestas, es crucial apostar de manera responsable y consciente de los riesgos asociados con el juego.',
  };

  const topDeJuegos = {
    id: 'topDeJuegos',
    h2: 'Top de juegos',
    p1: 'Los juegos más populares en las ligas de eSports pueden variar con el tiempo, pero algunos títulos han mantenido su posición en la cima durante años. Juegos como League of Legends  continúan siendo una fuerza dominante en el mundo de los eSports. En éste se reúnen  equipos de cinco jugadores que compiten en partidas estratégicas. Además, Counter-Strike: Global Offensive (CS: GO) de Valve Corporation es otro título que ha mantenido su popularidad en las ligas de eSports. Este juego de disparos en primera persona se ha convertido en un referente en la escena competitiva, donde los equipos se enfrentan en emocionantes partidas de táctica y precisión.',
    p2: 'Otros juegos que han ganado relevancia en los eSports incluyen Dota 2, Overwatch, EAFC 24 y Rainbow Six Siege, cada uno con sus propias comunidades de seguidores y competiciones de alto nivel.',
  };

  const losMejoresEquipos  = {
    id: 'losMejoresEquipos',
    h2: 'Los Mejores equipos ',
    p1: 'Identificar los mejores equipos de eSports puede ser subjetivo y dependerá del juego específico en el que compiten. Sin embargo, algunos clubes han mantenido un alto nivel de éxito a lo largo de varios títulos y son ampliamente reconocidos en la industria. Por ejemplo, el equipo coreano de League of Legends, T1 (al principio se le conocía como SK Telecom T1), es considerado uno de los mejores equipos en la historia de los eSports, habiendo ganado múltiples campeonatos mundiales. En el ámbito de los juegos de disparos en primera persona, equipos como Astralis en Counter-Strike: Global Offensive han sido dominantes.',
    p2: 'Otros equipos notables incluyen Fnatic, un equipo europeo que ha tenido éxito en múltiples juegos, y el equipo chino Invictus Gaming en League of Legends. En última instancia, la clasificación de los mejores equipos de eSports cambia con el tiempo y puede variar según el juego, la región y la época, pero estos equipos mencionados han dejado una marca duradera en la escena de los deportes electrónicos gracias a sus logros y sus talentosos jugadores.',
  };

  const principalesTorneos  = {
    id: 'principalesTorneos',
    h2: 'Principales torneos',
    p: 'Los mejores torneos de eSports suelen destacar por su longevidad, calidad de los competidores y premios en efectivo. A continuación mencionaremos dos de los eventos más prestigiosos en la escena de los eSports:',
    inner: [
      {
        h3: 'Campeonato Mundial de League of Legends',
        p: 'Organizado por Riot Games. Este torneo anual reúne a los mejores equipos de todo el mundo en un emocionante enfrentamiento por el título de campeón mundial y ofrece una audiencia masiva y premios millonarios.',
      },
      {
        h3: 'The International, un campeonato de Dota 2',
        p: 'Organizado por Valve Corporation. The International es famoso por su premio en efectivo que a menudo supera los 30 millones de dólares, lo que lo convierte en uno de los torneos más lucrativos en la historia de los eSports. Otros eventos destacados incluyen el Campeonato Mundial de Counter-Strike: Global Offensive (CS: GO), la Overwatch League Grand Finals y el Campeonato Mundial de Fortnite, que se han consolidado como pilares importantes en la escena de los eSports y atraen a una gran audiencia de fanáticos de todo el mundo.',
      },
    ],
  };

  const tiposDeApuestasEnEsports = {
    id: 'tiposDeApuestasEnEsports',
    h2: 'Tipos de Apuestas en Esports ',
    p: 'Las apuestas en los eSports ofrecen una variedad de opciones populares, que incluyen:',
    inner: [
      {
        liBold: 'Apuestas al Ganador del Partido',
        liText: 'Los apostadores eligen al equipo o jugador que creen que ganará el enfrentamiento.',
      },
      {
        liBold: 'Apuestas al Handicap',
        liText: 'Estas ajustan las probabilidades al dar ventaja o desventaja a un equipo para equilibrar las posibilidades de apuesta.',
      },
      {
        liBold: 'Apuestas al Resultado Correcto',
        liText: 'Los apostadores apuestan por un resultado específico en un juego o serie de juegos.',
      },
      {
        liBold: 'Apuestas a los Totales',
        liText: 'Se centran en aspectos como el número total de rondas, puntos o goles marcados en una partida.',
      },
      {
        liBold: 'Apuestas en Vivo',
        liText: 'Permiten hacer predicciones en tiempo real durante un evento.',
      },
      {
        liBold: 'Apuestas Ganador Final',
        liText: 'en eSports implican elegir al equipo o jugador que se prevé ganará el torneo por completo, siendo una de las apuestas más emocionantes.',
      },
      {
        liBold: 'Apuesta Ganador de Mapa ',
        liText: 'implican predecir qué equipo o jugador ganará un mapa específico en una partida o serie de eSports. Esto añade emoción al permitir apostar en mapas individuales.',
      },
      {
        liBold: 'Handicap (por Ronda)',
        liText: 'dan ventaja o desventaja a un equipo antes de una partida o ronda, comunes en juegos de disparos en primera persona como Counter-Strike: Global Offensive.',
      },
      {
        liBold: 'Ganador de Ronda',
        liText: 'se centran en predecir qué equipo ganará una ronda específica, considerando el conocimiento de los equipos, su rendimiento previo, estrategias y condiciones del juego.',
      },
    ],
  };

  const preguntasFrecuentes  = {
    id: 'preguntasFrecuentes',
    h2: 'Preguntas Frecuentes',
    inner: [
      {
        h3: '¿Dónde ver los torneos de esports? ',
        p: 'Los torneos de eSports se transmiten en vivo en plataformas como Twitch, YouTube Gaming y Facebook Gaming, y también en canales oficiales de juegos. Incluso redes tradicionales como ESPN y CBS transmiten eventos de eSports, brindando opciones variadas a los fanáticos.',
      },
      {
        h3: '¿Es legal apostar en esports? ',
        p: 'En España, las apuestas en eSports son legales y están reguladas por la Dirección General de Ordenación del Juego (DGOJ), que es la entidad encargada de regular y supervisar las actividades de juego en línea en el país. Esto significa que los operadores de apuestas en línea que ofrecen apuestas en eSports deben obtener una licencia de la DGOJ para operar legalmente en España.',
      },
    ],
  };

  const table_list = [
    {
      title: '¿Qué son los esports y cómo apostar?',
      id: 'openingQuestion',
    },
    {
      title: 'Top de juegos',
      id: 'topDeJuegos',
    },
    {
      title: 'Los Mejores equipos',
      id: 'losMejoresEquipos',
    },
    {
      title: 'Principales torneos',
      id: 'principalesTorneos',
    },
    {
      title: 'Tipos de Apuestas en Esports',
      id: 'tiposDeApuestasEnEsports',
    },
    {
      title: 'Preguntas frecuentes',
      id: 'preguntasFrecuentes',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/eventos-deportivos/apuestas-esport'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text='Lo mejor del esports' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/Esport/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event'>
          <Container>
            <h1 className='header mt-4'>{top_par.h1}</h1>
            <p>{top_par.p}</p>

            {!props.flag ? <TableOfContents table={table_list} /> : <></>}
            <div className='mb-4' />

            <div id={openingQuestion.id}>
              <h2>{openingQuestion.h2}</h2>
              <p>{openingQuestion.p1}</p>
              <p>{openingQuestion.p2}</p>
              <p>{openingQuestion.p3}</p>
              <p>{openingQuestion.p4}</p>
            </div>

            <LazyLoadImage
              src={prefix + '1' + jpg}
              width='100%'
            />
            <div
              className='mt-4'
              id={topDeJuegos.id}>
              <h2>{topDeJuegos.h2}</h2>
              <p>{topDeJuegos.p1}</p>
              <p>{topDeJuegos.p2}</p>
            </div>
            <div
              className='mt-4'
              id={losMejoresEquipos.id}>
              <h2>{losMejoresEquipos.h2}</h2>
              <p>{losMejoresEquipos.p1}</p>
              <p>{losMejoresEquipos.p2}</p>
            </div>

            <div
              className='mt-4'
              id={principalesTorneos.id}>
              <h2>{principalesTorneos.h2}</h2>
              <p>{principalesTorneos.p}</p>
              <Accordion>
                {principalesTorneos.inner.map((inn, k) => (
                  <Accordion.Item
                    key={k}
                    eventKey={k}>
                    <Accordion.Header as={'h3'}>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <LazyLoadImage
              src={prefix + '2' + jpg}
              width='100%'
            />

            <div
              id={tiposDeApuestasEnEsports.id}
              className='mt-4'>
              <h2>{tiposDeApuestasEnEsports.h2}</h2>
              <p>{tiposDeApuestasEnEsports.p}</p>
              <ul>
                {tiposDeApuestasEnEsports.inner.map((m, k) => (
                  <li key={k}>
                    <u>{m.liBold}</u>: 
                    {m.liText}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className='mt-4'
              id={preguntasFrecuentes.id}>
              <h2>{preguntasFrecuentes.h2}</h2>
              <Accordion>
                {preguntasFrecuentes.inner.map((inn, k) => (
                  <Accordion.Item
                    key={k}
                    eventKey={k}>
                    <Accordion.Header as={'h3'}>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <LazyLoadImage
              src={prefix + '3' + jpg}
              width='100%'
            />
          </Container>
        </div>
      </Container>
    </>
  );
}
