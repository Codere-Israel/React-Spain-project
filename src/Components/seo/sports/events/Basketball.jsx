import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container, Image, ListGroup, Placeholder, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Balenco(props) {
  const title = 'Guía de apuestas para la Copa del Rey Baloncesto | Codere®';
  const description =
    'La Copa del Rey de Baloncesto es la competición nacional de baloncesto organizada anualmente por la Asociación de Clubes de Baloncesto (ACB)';

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Basketball/${
    props.flag ? 'M' : 'D'
  }-Basketball-`;
  const jpg = '.jpg';

  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuántas Copa del Rey tiene el Real Madrid baloncesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Real Madrid de Baloncesto es el equipo que más títulos tiene de Copa del Rey con 28 trofeos en sus vitrinas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Quién ha ganado la Copa del Rey de baloncesto 2022?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Barcelona ha logrado coronarse campeón de la Copa del Rey 2022 tras superar al Real Madrid en la final.',
        },
      },
    ],
  };

  const top_par = {
    h1: 'Guía de apuestas para la Copa del Rey Baloncesto',
    p: 'En este artículo te brindaremos toda la información que necesitas para adentrarte en el mundo de las apuestas en el Mundial del baloncesto y que estadísticas deberás mirar para triunfar con tus pronósticos.',
  };
  const history = {
    id: 'history',
    h2: 'Antecedentes y Origen',
    p: 'La Copa del Rey de Baloncesto es uno de los eventos deportivos a nivel nacional de baloncesto organizada anualmente por la Asociación de Clubes de Baloncesto (ACB) y que disputan los ocho mejores equipos. El torneo se comenzó a disputar en Madrid en el año 1933 y el primer ganador fue el Rayo Club de Madrid. Esa edición se convirtió en la primera que enfrentaba a clubes a nivel nacional. Actualmente, el campeón es el Barcelona, pero el club con más títulos de Copa del Rey es el Real Madrid, con 28 trofeos',
    inner: [
      {
        h3: 'Equipos que participan',
        id: 'clasificaciones',
        p: 'Desde que se creara la Copa del Rey de Baloncesto en el año 1933, los equipos que participan son los ocho mejores clubes de España. Los equipos logran la clasificación según su puesto en la tabla de la Liga Endesa de baloncesto. Ocho equipos que tienen el premio de competir por ser los campeones de España después de su regularidad en la temporada regular.',
      },
      {
        h3: 'Máximos ganadores del torneo',
        id: 'maximos',
        p: 'El equipo más laureado de la Copa del Rey de Baloncesto es el Real Madrid con 28 títulos. Además, los blancos también son el equipo que en más finales ha participado (51) y que más presencias ha tenido en el torneo (83).',
        table: {
          th: ['Equipo', 'Títulos'],
          td: [
            ['Real Mad​rid', '28'],
            ['Barcelona', '27'],
            ['Joventut', '8'],
            ['Baskonia', '6'],
            ['Estudiantes', '3'],
            ['Laietá', '2'],
            ['Rayo', '2'],
            ['Zaragoza', '2'],
            ['Picadero', '2'],
          ],
        },
      },
    ],
  };

  const principales = {
    id: 'principales',
    h2: 'Principales Jugadores Españoles de Baloncesto',
    p: 'El baloncesto es uno de los deportes más practicados y seguidos en España. Por ello, a lo largo de la historia y en la actualidad, nuestro país no deja se sacar grandísimos jugadores que se convierten en estrellas, no solo en España, sino fuera de nuestras fronteras. Algo que hace que contemos con un palmarés extraordinario. Por ello hemos realizado una lista con los 10 mejores jugadores de la historia del baloncesto español:',
    inner: [
      {
        h3: 'Pau Gasol',
        p: 'Es considerado el mejor jugador de baloncesto de la historia de España. E incluso se compara con Nadal y Alonso sobre quién es el mejor deportista español. Dieciocho temporadas en la NBA con 2 anillos de campeón con Los Ángeles Lakers, sumado a las 3 medallas olímpicas, 3 campeonatos europeos y 1 título mundial, le hacen ser la gran estrella de nuestro país.',
      },
      {
        h3: 'Juan Carlos Navarro “La Bomba”',
        p: 'Ha sido una de las estrellas de la generación de oro español y, tras 19 temporadas en el Barcelona y 21 títulos, anunció su retirada en el año 2019.',
      },
      {
        h3: 'Marc Gasol',
        p: 'El hermano de Pau ha seguido la trayectoria del mayor de su familia y, pese a las comparaciones, ha logrado hacerse un nombre tanto en la NBA como en la selección. Además, Marc se convirtió en el segundo jugador que logra ganar el anillo de campeón de la NBA y el título mundial con su selección en el mismo año.',
      },
      {
        h3: 'Juan Antonio San Epifanio',
        p: 'Conocido como “Epi”, fue la gran estrella de una generación que obtuvo la medalla de plata en los JJOO y otra en el europeo. Jugó 19 temporadas en el Barcelona, donde logró 21 títulos.',
      },
      {
        h3: 'Fernando Martín',
        p: 'Fue el primer jugador español que logró jugar en la NBA. Apenas jugó en Portland, y acabó volviendo al Real Madrid. Con 27 años, falleció en un accidente de coche mientras viajaba a ver a su equipo tras perderse el partido por lesión.',
      },
      {
        h3: 'José Manuel Calderón',
        p: 'Más de catorce años en distintos equipos de la NBA le hace ser otra de las estrellas de una generación que no dejó de romperla en el extranjero.',
      },
      {
        h3: 'Juan Antonio Corbalán',
        p: 'Con un palmarés bestial (12 títulos de ACB y 7 Copas del Rey), el español fue un baluarte en la selección que logró una plata en los JJOO de Los Ángeles.',
      },
      {
        h3: 'Jorge Garbajosa',
        p: 'Actualmente es el presidente de la Federación Española de Baloncesto. Jugó en países con EEUU, Italia, Rusia y España.',
      },
      {
        h3: 'Felipe Reyes',
        p: 'El jugador del Real Madrid es parte de la generación dorada española y es el jugador que más partidos ha disputado en la historia de la ACB',
      },
      {
        h3: 'Sergio Llull',
        p: 'Una de las estrellas en el último mundial conquistado por España, también ha ganado 2 medallas olímpicas y 3 europeas.',
      },
    ],
  };

  const tips = {
    id: 'tips',
    h2: 'Tipos de Apuestas en Basketball',
    p: 'El baloncesto es uno de los deportes más seguidos en el mundo del fútbol y así se puede observar en las casas de apuestas. La principal competición es la NBA, pero en España también se realiza un gran seguimiento a la ACB o a la Euroliga. Vamos a ver los mejores tipos de apuestas para el baloncesto:',
    inner: [
      {
        h3: 'Ganador del partido:',
        text: 'En baloncesto no existe el empate, por lo que esta es el tipo de apuesta más importante. Hay dos formas de que se elija el ganador. La primera es al final de los cuatro cuartos. Por otro lado, se puede cerrar el ganador en el tiempo extra o prórroga. Generalmente, el equipo que juega en su pabellón cuenta con una cuota menor al creer que por ser local es favorito.',
      },
      {
        h3: '¿Irá a la prórroga?',
        text: 'Es una cuota que puede variar en función del tipo de partido que se está disputando. En liga regular, la prórroga es más complicada que ocurra, que por ejemplo en la Euroliga.',
      },
      {
        h3: 'Apuestas con hándicap',
        text: 'Este tipo de apuestas son importantes en aquellos partidos en la que hay una diferencia enorme entre los dos equipos. Hay dos opciones, elegir una condición de que uno de los equipos tiene que ganar por X puntos. La otra, es que el equipo favorito parte con desventaja en el partido.',
      },
      {
        h3: 'Apuestas totales',
        text: 'Es la suma de los puntos de ambos equipos al final del partido. Hay dos opciones: al final de los cuatro cuartos o en la prórroga. Se establece una cantidad y el usuario tendrá que elegir si la suma de los puntos estará sobre esa cantidad (over) o por debajo de ella (under).',
      },
      {
        h3: 'Apuestas por cuartos o partes',
        text: 'Puedes apostar si un equipo será el vencedor de alguno de los cuatro cuartos o de las dos partes que hay en un partido.',
      },
      {
        h3: 'Player Props',
        text: 'Apuesta por el rendimiento que tendrá uno de los jugadores del partido.',
      },
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: '¿Cuántas Copa del Rey tiene el Real Madrid baloncesto?',
    inner: [
      {
        h3: '¿Cuántas Copa del Rey tiene el Real Madrid baloncesto?',
        p: 'El Real Madrid de Baloncesto es el equipo que más títulos tiene de Copa del Rey con 28 trofeos en sus vitrinas.',
      },
      {
        h3: '¿Quién ha ganado la Copa del Rey de baloncesto 2022?',
        p: 'El Barcelona ha logrado coronarse campeón de la Copa del Rey 2022 tras superar al Real Madrid en la final.',
      },
    ],
  };

  const table_list = [
    {
      title: 'Antecedentes y Origen',
      id: 'history',
    },
    {
      title: 'Principales Jugadores Españoles de Baloncesto',
      id: 'principales',
    },
    {
      title: 'Tipos de Apuestas en Basketball',
      id: 'tips',
    },
    {
      title: 'Preguntas frecuentes sobre la Copa del Rey Baloncesto',
      id: 'preguntas',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/eventos-deportivos/apuestas-mundial-baloncesto'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text='Encesta con la NBA' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/Basketball/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event'>
          <Container>
            <h1 className='header subtitle mt-4'>{top_par.h1}</h1>
            <p>{top_par.p}</p>

            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <div
              id={history.id}
              className='mt-3'>
              <h2>{history.h2}</h2>
              <p>{history.p}</p>
              {history.inner.map((h, k) => (
                <div key={k}>
                  <h3>{h.h3}</h3>
                  <p>{h.p}</p>
                  {h.table ? (
                    <Table
                      style={{ textAlign: 'center', maxWidth: '20rem' }}
                      striped
                      bordered
                      hover
                      variant='dark'>
                      <thead>
                        <tr>
                          {h.table.th.map((t, k) => (
                            <th key={k}>{t}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {h.table.td.map((tr, i) => (
                          <tr key={i}>
                            {tr.map((td, j) => (
                              <td key={j}>{td}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : null}
                </div>
              ))}
            </div>

            <LazyLoadImage
              src={prefix + '1' + jpg}
              width='100%'
            />
            <div
              className='mt-5'
              id={principales.id}>
              <h2>{principales.h2}</h2>
              <p>{principales.p}</p>
              <Accordion>
                {principales.inner.map((p, k) => (
                  <Accordion.Item
                    eventKey={k}
                    key={k}>
                    <Accordion.Header as={'h3'}>{p.h3}</Accordion.Header>
                    <Accordion.Body>{p.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            <LazyLoadImage
              src={prefix + '2' + jpg}
              width='100%'
            />

            <div
              className='mt-4'
              id={tips.id}>
              <h2>{tips.h2}</h2>
              <p>{tips.p}</p>
              {tips.inner.map((inn, k) => (
                <div key={k}>
                  <h3>{inn.h3}</h3>
                  <p>{inn.text}</p>
                </div>
              ))}
            </div>

            <div
              id={preguntas.id}
              className='mt-4'>
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
