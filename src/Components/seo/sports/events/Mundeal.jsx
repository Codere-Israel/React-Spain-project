import './events.css';
import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container, Image, Placeholder, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AddTable from '../../AddTable';

export default function Mundial(props) {
  const title = 'Apuestas para el Mundial de Futbol desde España | Codere';
  const description =
    'En Codere encontrarás las mejores estadísticas, cuotas y promociones para apostar al Mundial';

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Soccer/${
    props.flag ? 'M' : 'D'
  }-Soccer-`;
  const jpg = '.jpg';

  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué país ha albergado más mundiales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Copa del Mundo 2026 se realizará en Canadá, Estados Unidos y México.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En dónde será el Mundial de 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Por primera vez en la historia, el Mundial se celebrará en tres países de manera simultánea: Estados Unidos, Canadá y México.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuántos países podrán clasificar a la siguiente copa del mundo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Mundial del 2026 será el torneo en el que más selecciones disputarán el campeonato con 48. Por la Confederación Asiática de Fútbol se clasificarán ocho, por la Confederación Africana de Fútbol serán nueve, por Conmebol seis, por la Confederación de Fútbol de Oceanía será solo una, por la Unión de Federaciones Europeas de Fútbol 16 y por la confederación sede, la Concacaf, serán seis. Además de dos boletos más que se otorgarán por un repechaje entre los combinados mejor calificados en el Ranking FIFA y que no hayan obtenido su boleto (Excepto UEFA).',
        },
      },
    ],
  };

  const top_par = {
    h1: 'Guía de apuestas deportivas para la Copa Mundial de Fútbol',
    p: 'La Copa del Mundo es, sin duda, el torneo a nivel deportivo de más importancia en el planeta. Los mejores jugadores se dan cita cada cuatro años para disputarla. Y es allí, donde se consagran los más grandes. Para un apostador, este torneo es una buena oportunidad de demostrar lo que sabe y ganar junto a su equipo favorito.',
  };
  const history = {
    id: 'historia',
    h2: 'Breve historia de los mundiales',
    p: 'Ante la necesidad de la FIFA de contar con un torneo global con las máximas potencias del futbol, el expresidente Jules Rimet en un congreso celebrado en Suiza en 1928, creó la Copa del Mundo, justa que se celebraría en Uruguay un par de años después. A partir de allí, el resto es historia',
    p2: 'Entre los Mundiales más icónicos de la historia se encuentran Brasil 1950, recordado, sin duda, por el Maracanazo donde Uruguay dejó sin título a la verdeamarela. Los Mundiales de México, 1970 y 1986, quedaron inmortalizados por el gran nivel que mostraron, los que quizás, son los dos mejores futbolistas de la historia: Pelé y Maradona. Finalmente, Sudáfrica 2010 quedó grabado en letras de oro por la forma en que España obtuvo su primer campeonato del mundo; la consolidación de una generación perfecta.',
  };

  const estadísticas = {
    id: 'estadísticas',
    h2: 'Estadísticas de las finales de la copa del mundo ',
    p: 'Comenzar un viaje por las Finales que han definido a los campeones del mundo, es un viaje a través de la historia. Información, que tarde o temprano, os ayudarán a decidir mejor en sus apuestas online.',
    table: {
      th: ['Año', 'Sede', 'Campeón', 'Subcampeón', 'Marcador'],
      tr: [
        ['1930', 'Uruguay', 'Uruguay', 'Argentina', '4-2'],
        ['1934', 'Italia', 'Italia', 'Checoslovaquia', '2-1'],
        ['1938', 'Francia', 'Italia', 'Hungría', '4-2'],
        ['1950', 'Brasil', 'Uruguay', 'Brasil', '2-1'],
        ['1954', 'Suiza', 'Alemania Federal', 'Hungría', '3-2'],
        ['1958', 'Suecia', 'Brasil', 'Suecia', '5-2'],
        ['1962', 'Chile', 'Brasil', 'Checoslovaquia', '3-1'],
        ['1966', 'Inglaterra', 'Inglaterra', 'Alemania', '4-2'],
        ['1970', 'México', 'Brasil', 'Italia', '4-1'],
        ['1974', 'Alemania', 'Alemania', 'Países Bajos', '2-1'],
        ['1978', 'Argentina', 'Argentina', 'Países Bajos', '3-1'],
        ['1982', 'España', 'Italia', 'Alemania', '3-1'],
        ['1986', 'México', 'Argentina', 'Alemania', '3-2'],
        ['1990', 'Italia', 'Alemania', 'Argentina', '1-0'],
        ['1994', 'Estados Unidos', 'Brasil', 'Italia', '0-0'],
        ['1998', 'Francia', 'Francia', 'Brasil', '3-0'],
        ['2002', 'Corea y Japón', 'Brasil', 'Alemania', '2-0'],
        ['2006', 'Alemania', 'Italia', 'Francia', '1-1'],
        ['2010', 'Sudáfrica', 'España', 'Países Bajos', '1-0'],
        ['2014', 'Brasil', 'Alemania', 'Argentina', '1-0'],
        ['2018', 'Rusia', 'Francia', 'Croacia', '4-2'],
        ['2022', 'Qatar', 'Argentina', 'Francia', '3-3'],
      ],
    },
    inner: [
      {
        h3: 'Tabla de máximos ganadores de los Mundiales',
        p: 'Las páginas doradas de las Copas del Mundo las han escrito grandes leyendas como Pelé, Maradona, Ronaldo, Zidane, Messi, Cruyff, Iniesta, Klose, Paolo Rossi. Envueltos en selecciones que fueron un auténtico mito en cada una de sus épocas. Aquí las más ganadoras:',
        table: {
          th: ['Selección', 'Títulos', 'Mundial'],
          tr: [
            ['Brasil', '5', '1958, 1962, 1970, 1994, 2002'],
            ['Alemania', '4', '1954, 1974, 1990, 2014'],
            ['Italia', '4', '1934, 1938, 1982, 2006'],
            ['Argentina', '3', '1978, 1986, 2022'],
            ['Francia', '2', '1998, 2018'],
            ['Uruguay', '2', '1930, 1950'],
            ['Inglaterra', '1', '1966'],
            ['España', '1', '2010'],
          ],
        },
      },
      {
        h3: 'Jugadores con más Copas del Mundo jugadas',
        p: 'Son 22 Copas del Mundo las que se han disputado desde la primera en 1930. Cada uno de estos torneos la han disputado auténticas leyendas del futbol, a nivel global o nacional, en cada uno de sus países. Pero pocos han sido los que la han jugado en más de una ocasión.',
        table: {
          th: ['Jugador', 'Nacionalidad', 'Mundiales', 'Ediciones'],
          tr: [
            ['Antonio Carbajal', 'México', '5', '1950 - 1954 - 1958 - 1962 - 1966'],
            ['Lothar Matthaus', 'Alemania', '5', '1982 - 1986 - 1990 - 1994 - 1998'],
            ['Rafael Márquez', 'México', '5', '2002 - 2006 - 2010 - 2014 - 2018'],
            ['Gianluigi Buffon', 'Italia', '5', '1998 - 2002 - 2006 - 2010 - 2014'],
            ['Cristiano Ronaldo', 'Portugal', '5', '2006 - 2010 - 2014 - 2018 - 2022'],
            ['Lionel Messi', 'Argentina', '5', '2006 - 2010 - 2014 - 2018 - 2022'],
            ['Guillermo Ochoa', 'México', '5', '2006 - 2010 - 2014 - 2018 - 2022'],
            ['Andrés Guardado', 'México', '5', '2006 - 2010 - 2014 - 2018 - 2022'],
            ['Manuel Neuer', 'Alemania', '4', '2010 - 2014 - 2018 - 2022'],
            ['Pelé', 'Brasil', '4', '1958 - 1962 - 1966 - 1970'],
            ['Hugo Lloris', 'Francia', '4', '2010 - 2014 - 2018 - 2022'],
            ['Mario Kempes', 'Argentina', '4', '1970 - 1974 - 1978 - 1982'],
            ['Diego Maradona', 'Argentina', '4', '1982 - 1986 - 1990 - 1994'],
            ['Luis Suárez', 'Uruguay', '4', '2010 - 2014 - 2018 - 2022'],
            ['Edinson Cavani', 'Uruguay', '4', '2010 - 2014 - 2018 - 2022'],
            ['Paolo Maldini', 'Italia', '4', '1990 - 1994 - 1998 - 2002'],
            ["Samuel Eto'o", 'Camerún', '4', '2002 - 2006 - 2010 - 2014'],
            ['Miroslav Klose', 'Alemania', '4', '2002 - 2006 - 2010 - 2014'],
            ['Iker Casillas', 'España', '4', '2002 - 2006 - 2010 - 2014'],
            ['Ronaldo', 'Brasil', '4', '1994 - 1998 - 2002 - 2006'],
          ],
        },
      },
    ],
  };

  const tipos = {
    id: 'tipos',
    h2: 'Tipos de apuestas que ofrece Codere para la copa mundial de fútbol',
    p: 'El Mundial de futbol es uno de los grandes escenarios para las apuestas deportivas. Alrededor de los 64 partidos que se disputan, se celebran miles y miles de mercados que les da la oportunidad a los apostadores y conocedores de vivir esta celebración de una manera más inmersiva.',
    inner: [
      {
        h3: 'Campeón del Mundo:',
        p: 'Entre las apuestas anticipadas más populares en Codere está la de Campeón del mundo. Las cuotas son siempre atractivas y elegir al que será el nuevo rey del futbol mundial, va con una dosis de suerte.',
      },
      {
        h3: 'Finalistas:',
        p: 'Es un pronóstico sobre qué equipos llegarán a disputar la máxima copa del futbol. Estos mercados suelen estar disponibles, incluso antes, de que se sepan qué selecciones disputarán la justa veraniega.',
      },
      {
        h3: 'Máximo Goleador:',
        p: 'Es un pronóstico al jugador que anotará más goles durante la competencia. Las cuotas suelen ser positivas y cambiar constantemente durante el torneo',
      },
      {
        h3: 'Ganadores por grupo:',
        p: 'En cuanto está definido el sorteo y los grupos, este mercado de apuestas se habilita, para dar paso a pronosticar, qué selección liderará cada sector. Las cuotas se modifican con base al historial de casa selección en la justa y por supuesto, el momento que vive cada una de ellas.',
      },
      {
        h3: 'Portero menos goleado:',
        p: 'Elegir al portero que recibirá menos goles durante el Mundial es una de las apuestas online más llamativas. El favorito suele ser de equipos que cuentan, estadísticamente, las mejores defensivas del campeonato.',
      },
      {
        h3: 'Jugador con más asistencias:',
        p: 'Al igual que las otras apuestas, en ésta, el pronóstico va en relación a seleccionar al jugador que más pases a gol dará durante el campeonato.',
      },
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre el Mundial de Futbol',
    p: 'Estamos a poco más de tres años para que se juegue el Mundial del 2026. El tiempo justo para preparar tus apuestas online y resolver las dudas que tengáis al respecto.',

    questions: [
      {
        question: '¿Qué país ha albergado más mundiales?',
        answer: 'La Copa del Mundo 2026 se realizará en Canadá, Estados Unidos y México.',
      },
      {
        question: '¿En dónde será el Mundial de 2026?',
        answer:
          'Por primera vez en la historia, el Mundial se celebrará en tres países de manera simultánea: Estados Unidos, Canadá y México.',
      },
      {
        question: '¿Cuántos países podrán clasificar a la siguiente copa del mundo?',
        answer:
          'El Mundial del 2026 será el torneo en el que más selecciones disputarán el campeonato con 48. Por la Confederación Asiática de Fútbol se clasificarán ocho, por la Confederación Africana de Fútbol serán nueve, por Conmebol seis, por la Confederación de Fútbol de Oceanía será solo una, por la Unión de Federaciones Europeas de Fútbol 16 y por la confederación sede, la Concacaf, serán seis. Además de dos boletos más que se otorgarán por un repechaje entre los combinados mejor calificados en el Ranking FIFA y que no hayan obtenido su boleto (Excepto UEFA).',
      },
    ],
  };

  const table_list = [
    {
      title: 'Breve historia de los mundiales',
      id: 'historia',
    },

    {
      title: 'Estadísticas de las finales de la copa del mundo',
      id: 'estadísticas',
    },
    {
      title: 'Tipos de apuestas que ofrece Codere para la copa mundial de fútbol',
      id: 'tipos',
    },
    {
      title: 'Preguntas frecuentes sobre el Mundial de Futbol',
      id: 'preguntas',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/eventos-deportivos/apuestas-mundial-fifa'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text='La Copa del Mundo' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/Soccer/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <div className='event mt-4'>
        <Container>
          <Fade>
            <h1 className='header subtitle'>{top_par.h1}</h1>
          </Fade>
          <p>{top_par.p}</p>

          {!props.flag ? <TableOfContents table={table_list} /> : <></>}

          <div
            id={history.id}
            className='mt-4'>
            <h2>{history.h2}</h2>
            <p>{history.p}</p>
            <p>{history.p2}</p>
          </div>

          <Fade
            duration={1000}
            triggerOnce>
            <LazyLoadImage
              src={prefix + '1' + jpg}
              width='100%'
            />
          </Fade>
          <div
            id={estadísticas.id}
            className='mt-4'>
            <h2>{estadísticas.h2}</h2>
            <p> {estadísticas.p}</p>
            <p> {estadísticas.p2}</p>
            <AddTable table={estadísticas.table} />
            {estadísticas.inner.map((est, k) => (
              <div
                key={k}
                className='mt-3 mb-3'>
                <h3>{est.h3}</h3>
                <p>{est.p}</p>
                <AddTable table={est.table} />
              </div>
            ))}
          </div>

          <Fade
            duration={1000}
            triggerOnce>
            <LazyLoadImage
              src={prefix + '2' + jpg}
              width='100%'
            />
          </Fade>
          <div
            id={tipos.id}
            className='mt-4'>
            <h2>{tipos.h2}</h2>
            <p> {tipos.p}</p>
            <p>Entre las apuestas más populares en el Mundial están:</p>
            {tipos.inner.map((tip, k) => (
              <div key={k}>
                <h3>{tip.h3}</h3>
                <p>{tip.p}</p>
              </div>
            ))}
          </div>

          <div
            id={preguntas.id}
            className='mt-4'>
            <h2>{preguntas.h2}</h2>
            <p>{preguntas.p}</p>
            <Accordion>
              {preguntas.questions.map((question, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k}>
                  <Accordion.Header as={'h3'}>{question.question}</Accordion.Header>
                  <Accordion.Body>{question.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <Fade
            duration={1000}
            triggerOnce>
            <LazyLoadImage
              src={prefix + '3' + jpg}
              width='100%'
            />
          </Fade>
        </Container>
      </div>
    </>
  );
}
