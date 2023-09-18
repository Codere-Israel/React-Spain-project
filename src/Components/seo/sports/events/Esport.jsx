import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Esport(props) {
  const title = 'Guía de apuestas para Esports | Codere®';
  const description =
    'Las apuestas de Esports son muy diferentes dependiendo del tipo de juego. Conoce aquí el tipo de apuesta más usado en la Casa de apuestas Codere';
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

  const origen = {
    id: 'origen',
    h2: 'Origen del Campeonato Mundial de League of Legends',
    p1: 'El Mundial de League of Legends fue creado por primera vez en el año 2011 por los mismos creadores del juego, RIOT Games. La idea del evento era la misma que hoy en día, reunir a los mejores jugadores del mundo para competir entre ellos, con un premio para el equipo ganador de 50.000 dólares. Este primer evento se realizó en Suiza y enfrentó a las dos grandes potencias: Norteamérica y Europa, consiguiendo este último el primer título.',
    p2: 'Pero fue la segunda edición la que fue un punto de inflexión, produciéndose cambios significativos. Se produjo en Estados Unidos, tuvo de público a más de 5.000 personas y contó con siete millones de personas siguiendo el evento a través del streaming. Además, el premio ascendió hasta el millón de dólares. Con la llegada del COVID en 2020, el evento pasó a hacerse sin público y rompió récord de streaming con más de 44 millones de espectadores.',
  };

  const calendario = {
    id: 'calendario',
    h2: 'Calendario del Torneo World Championship 2022',
    p: 'Al igual que en el año 2016, los World Championship de este año regresan a América del Norte, exactamente en Los Ángeles (Estados Unidos). Las fechas exactas se desconocen todavía pero seguramente será durante los últimos meses del año 2022.',
  };

  const tips = {
    id: 'tips',
    h2: 'Tipos de Apuestas en Esports',
    p: 'Las apuestas de Esports son muy diferentes dependiendo del tipo de juego que se está realizando. Hay juegos de combate, estrategia en tiempo real o deportivos. Sabiendo esto, vamos a conocer el tipo de apuesta más usado en Codere:',
    inner: [
      {
        h3: 'Ganador final',
        text: 'Sirve para pronosticar que jugador o equipo logrará ganar la partida, el campeonato o competición en cuestión. Se trata de una apuesta a largo plazo y la mejor manera de conseguir la mayor cuota es apostando cuanto antes.',
      },
      {
        h3: 'Ganador de mapa',
        text: 'Los mapas consisten en ser el mejor de 30 rondas. El equipo que llegue primero a las 16 rondas ganadas, se proclama ganador del mapa. Tras las primeras 15 rondas, los equipos cambian de bando. Además, si el partido llega a un 15-15 en el marcador se juegan sucesivas prórrogas de 6 rondas cada una (3 rondas en cada bando) hasta que un equipo gane al menos 4 rondas en una prórroga.',
      },
      {
        h3: 'Handicap (por rondas)',
        text: 'El hándicap es un valor que se le resta al favorito o se le añade al underdog para compensar sus posibilidades de victoria e igualar las cuotas de forma aproximada.',
      },
      {
        h3: 'Ganador de la Ronda de Pistolas',
        text: 'El ganador de la ronda de pistolas en los Esports, se refiere al equipo vencedor que consigue ganar la primera ronda del mapa.',
      },
    ],
  };

  const mejores = {
    id: 'mejores',
    h2: 'Los mejores equipos por zonas',
    p: 'Existe una gran competencia en los Esports, por lo que cada año, los equipos buscan fichar a los mejores jugadores para buscar la gloria. Aquí te dejamos una lista de los mejores equipos en el mundo:',
    inner: [
      {
        h3: 'Team Liquid',
        p: 'Es el equipo que más dinero ha generado en los Esports (casi 36 millones de euros). El equipo de los Países Bajos es considerado la gran bestia de la industria.',
      },
      {
        h3: 'OG',
        p: 'Especializados en Dota 2, son un equipo relativamente nuevo, pero ya ha logrado levantar el título en dos ocasiones consecutivas.',
      },
      {
        h3: 'Evil Geniuses',
        p: 'Es uno de los equipos con más presencia en los Esports. Han participado en más de 60 torneos de Esports y es un equipo norteamericano.',
      },
      {
        h3: 'Fnatic',
        p: 'Es uno de los equipos más queridos por la comunidad por sus grandes jugadas en el ambiente competitivo. Se han logrado coronar como campeones en CS:GO y cuentan con su sede en Londras, Reino Unido.',
      },
      {
        h3: 'Virtus Pro',
        p: 'Este equipo sueco es uno de los más importantes de la escena europea. Es uno de los equipos veteranos y, pese a no ganar muchos torneos, siempre se mantienen a un buen nivel.',
      },
      {
        h3: 'Faze Clan',
        p: 'Nacidos en California, es uno de los equipos con mayor número de seguidores en sus redes sociales.',
      },
      {
        h3: 'Cloud9',
        p: 'El equipo norteamericano es uno de los más estables de la actualidad y, el que mayor valor como empresa tiene en el mundo.',
      },
      {
        h3: 'SK Telecom',
        p: 'Este equipo surcoreano se hizo grande en la escena competitiva con League of Legends. Cuenta con figuras como Faker y además ha logrado llevarse el título en tres ocasiones consecutivas.',
      },
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre Esports',
    inner: [
      {
        h3: '¿Qué son los esports? ',
        p: 'Los Esports son competiciones que se desarrollan en el mundo de los videojuegos y que están logrando ganar terreno en la industria del entretenimiento.',
      },
      {
        h3: '¿Qué es un back to back de la NBA?',
        p: 'Lo que se conoce como back to back en el baloncesto se refiere a aquellos partidos que juegan los equipos durante la temporada regular entre los que no hay días de descanso. ',
      },
    ],
  };

  const table_list = [
    {
      title: 'Origen del Campeonato Mundial de League of Legends',
      id: 'origen',
    },
    {
      title: 'Calendario del Torneo World Championship 2022',
      id: 'calendario',
    },
    {
      title: 'Tipos de Apuestas en Esports',
      id: 'tipos',
    },
    {
      title: 'Los mejores equipos por zonas',
      id: 'mejores',
    },
    {
      title: 'Preguntas frecuentes sobre Esports',
      id: 'preguntas',
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

            <div id={origen.id}>
              <h2>{origen.h2}</h2>
              <p>{origen.p1}</p>
              <p>{origen.p2}</p>
            </div>

            <LazyLoadImage
              src={prefix + '1' + jpg}
              width='100%'
            />
            <div
              className='mt-4'
              id={calendario.id}>
              <h2>{calendario.h2}</h2>
              <p>{calendario.p}</p>
            </div>

            <div
              className='mt-4'
              id={tips.id}>
              <h2>{tips.h2}</h2>
              <Accordion>
                {tips.inner.map((inn, k) => (
                  <Accordion.Item
                    key={k}
                    eventKey={k}>
                    <Accordion.Header as={'h3'}>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.text}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <LazyLoadImage
              src={prefix + '2' + jpg}
              width='100%'
            />

            <div
              id={mejores.id}
              className='mt-4'>
              <h2>{mejores.h2}</h2>
              <p>{mejores.p}</p>
              {mejores.inner.map((m, k) => (
                <div key={k}>
                  <h3>{m.h3}</h3>
                  <p>{m.p}</p>
                </div>
              ))}
            </div>

            <div
              className='mt-4'
              id={preguntas.id}>
              <h2>{preguntas.h2}</h2>
              <Accordion>
                {preguntas.inner.map((inn, k) => (
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
