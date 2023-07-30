import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Container, Accordion, Image, Placeholder } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Tenis(props) {
  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Tennis/${
    props.flag ? 'M' : 'D'
  }-Tennis-`;
  const jpg = '.jpg';

  const title = 'Apuestas de Tenis » Los Mejores Torneos | Codere®';
  const description =
    'Si te apasiona el Deporte Blanco y los mejores torneos de Tenis, Codere trae para ti la información necesaria para realizar tus apuestas deportivas.';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo ganar apuestas de tenis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La mejor forma para ganar apostando a tenis es estando atento a las nuevas estadísticas presentes en la app. Ellas te darán los mejores pronósticos y claves para ganar con la cuota que tu elijas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el hándicap en las apuestas de tenis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El hándicap en las apuestas de tenis en la ventaja o desventaja que se le da a uno de los tenistas o parejas. En base a esa situación habría que tener claro tu apuesta de cara a la victoria de uno u otro en el partido.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde se pueden ver marcadores de tenis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La mejor opción para ver marcadores de tenis es en las nuevas estadísticas presentes en la app de Codere. Además, también podrás ver los resultados en aplicaciones de marcadores existentes en internet.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tipos de apuestas de tenis existen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1.	Ganador del partido: Apostar al tenista o pareja de tenistas que pienses que va a ganar el partido. 2.	Hándicap por juegos: Ventaja o desventaja en juegos de un tenista para ganar un partido del torneo. 3.	Resultado final: Apostar al resultado final por sets de un tenista. Cuantos sets va a ganar en comparación con su rival. 4.	Más/Menos juegos totales: En previo solo te permitirá apostar al primer set, pero durante el partido ya podrás apostar en directo a los otros sets que se jueguen. En este mercado, el usuario apostará a si hay más o menos juegos en el set de los que te presente la casa junto a la cuota. 5.	Par/Impar Juegos Totales: Apostar a si la suma del número total de juegos durante el partido da par o impar. ',
        },
      },
    ],
  };

  const table_list = [
    {
      title: 'Los mayores eventos del tenis',
      id: 'mayores',
    },
    {
      title: 'Como apostar al tenis en Codere',
      id: 'como_apostar',
    },
    {
      title: 'Consejos a la hora de apostar en tenis',
      id: 'consejos',
    },
    {
      title: 'Tenis Español Favorito',
      id: 'favorito',
    },
    {
      title: 'Preguntas frecuentes sobre las apuestas de tenis',
      id: 'preguntas',
    },
  ];

  const top_par = {
    h1: 'Apuestas de Tenis con Codere',
    p: 'El mejor tenis del mundo está en Codere. Los torneos más importantes, incluyendo los Grand Slam (Open de Australia, Roland Garros, Wimbledon y US Open), ATP World Tour Finals, Master 1000, Master 500 y mucho más. Además, encontrarás las mejores cuotas del mercado junto a las predicciones más exactas.',
    p2: 'Y si quieres disfrutar todavía más aprovéchate de las nuevas estadísticas presentes en nuestra App, con las que podrás tener al detalle las mejores claves de los partidos. Una ayuda que te permitirá apostar con mayor información de lo que puede pasar.',
  };

  const mayores = {
    id: 'mayores',
    h2: 'Los mayores eventos del tenis',
    p: 'La Federación Internacional del tenis cuenta con todo tipo de torneos internacionales en los que participan los mejores tenistas del planeta en busca de un premio. Entre los más importantes se encuentran los Grand Slam, los cuatro torneos más famosos del circuito:',
    ul: [
      {
        bolded: 'Abierto de Australia:',
        text: 'El primero de los Grand Slam que se juega en enero en el Melbourne Park. Un torneo de pista rápida en el que el rey es Novak Djokovik con nueve títulos',
      },
      {
        bolded: 'Roland Garros:',
        text: 'Conocido en España como el torneo de Rafa Nadal tras sus 13º títulos. El Gran Slam de Francia cuenta con una pista de tierra batida y suele realizarse entre mayo y junio.',
      },
      {
        bolded: 'Wimbledon:',
        text: 'El torneo más antiguo del mundo del tenis comenzado en 1877. Un torneo que se caracteriza por el blanco de los uniformes de todos los tenistas. Se juega en una pista de césped y suele disputarse en junio en Reino Unido.',
      },
      {
        bolded: 'Abierto de Estados Unidos:',
        text: 'El último de los Grand Slam en realizarse. Con una pista dura y más de 16 millones en premios, el torneo de Estados Unidos es uno de los más importantes del circuito.',
      },
    ],
  };

  const como_apostar = {
    id: 'como_apostar',
    h2: 'Como apostar al tenis en Codere',
    p: 'Antes de comenzar a apostar sobre tenis debes entrar en la web Codere.es o en nuestra aplicación. Una vez dentro encontrarás la sección de tenis, dónde podrás disfrutar de los mejores eventos disponibles en ese momento. Realizar una apuesta significa elegir un supuesto que creas que va a ocurrir en el partido y decidir cuánto dinero vas a gastar en función de la cuota.',
    p2: 'Las cuotas es una información sobre la posibilidad o no de que ocurra un supuesto en el partido. Cuanto más difícil sea este supuesto, más alta será la cuota del partido. Cuanto más bajo sea la cuota, más fácil es de que ocurra. Además, estas cuotas nos ayudan a conocer la cantidad de dinero que se ganaría en caso de realizar la apuesta.',
  };

  const consejos = {
    id: 'consejos',
    h2: 'Consejos a la hora de apostar en tenis',
    p: 'El principal consejo a la hora de realizar apuestas de tenis es que te aproveches de las nuevas estadísticas de Codere presentes en la app. Unas claves que te ayudarán a conocer los enfrentamientos previos entre tenistas, la racha con la que llegan, su porcentaje de victorias en el torneo, además de seguir en directo los comentarios y todo lo que este pasando durante el encuentro.',
    p2: 'Pero recuerda: para poder aprovecharte de estas estadísticas debes estar registrado desde hace más de 30 días y tener tu cuenta verificada. Un paso que te permitirá poder seguir disfrutando de las mejores promociones de Codere.',
  };

  const favorito = {
    id: 'favorito',
    h2: 'Tenis Español Favorito',
    p: 'El tenis en España siempre ha tenido una gran importancia como uno de los deportes en los que somos superpotencia. Ferrero, Moya, Sánchez Vicario, Ferrer, Muguruza etc… pero desde la explosión de Nadal, el tenis es uno de los deportes punteros de nuestro país. Rafa ha hecho que todo el mundo siga cualquiera de los torneos que dispute el mallorquín. Que ver un Roland Garros signifique celebrar un título en París. Un deportista que es considerado el mejor de nuestra historia.',
    p2: 'Pese a ello, dentro del mundo del tenis, y aunque no sean españoles, el respeto por tenistas como Federer, Serena o Djokovic es inmenso en nuestro país. Y es que, la rivalidad existente en muchos casos con Nadal, han hecho que sean deportistas admirables en España.',
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre las apuestas de tenis',
    inner: [
      {
        h3: '¿Cómo ganar apuestas de tenis?',
        p: 'La mejor forma para ganar apostando a tenis es estando atento a las nuevas estadísticas presentes en la app. Ellas te darán los mejores pronósticos y claves para ganar con la cuota que tu elijas.',
      },
      {
        h3: '¿Qué es el hándicap en las apuestas de tenis?',
        p: 'El hándicap en las apuestas de tenis en la ventaja o desventaja que se le da a uno de los tenistas o parejas. En base a esa situación habría que tener claro tu apuesta de cara a la victoria de uno u otro en el partido.',
      },
      {
        h3: '¿Dónde se pueden ver marcadores de tenis?',
        p: 'La mejor opción para ver marcadores de tenis es en las nuevas estadísticas presentes en la app de Codere. Además, también podrás ver los resultados en aplicaciones de marcadores existentes en internet.',
      },
      {
        h3: '¿Qué tipos de apuestas de tenis existen?',
        ol: [
          {
            bolded: 'Ganador del partido: ',
            text: 'Apostar al tenista o pareja de tenistas que pienses que va a ganar el partido.',
          },
          {
            bolded: 'Hándicap: ',
            text: 'Ventaja o desventaja de puntos de un equipo para ganar el partido.',
          },
          {
            bolded: 'Hándicap por juegos: ',
            text: 'Ventaja o desventaja en juegos de un tenista para ganar un partido del torneo.',
          },
          {
            bolded: 'Resultado final: ',
            text: 'Apostar al resultado final por sets de un tenista. Cuantos sets va a ganar en comparación con su rival.',
          },
          {
            bolded: 'Más/Menos juegos totales: ',
            text: 'En previo solo te permitirá apostar al primer set, pero durante el partido ya podrás apostar en directo a los otros sets que se jueguen. En este mercado, el usuario apostará a si hay más o menos juegos en el set de los que te presente la casa junto a la cuota.',
          },
          {
            bolded: 'Par/Impar Juegos Totales: ',
            text: 'Apostar a si la suma del número total de juegos durante el partido da par o impar.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/cuotas-deportivas/apuestas-tenis'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text='La magia del deporte blanco' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/Tennis/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event mt-4'>
          <Container>
            <Fade>
              <h1 className='header subtitle'>{top_par.h1}</h1>
            </Fade>
            <p>{top_par.p}</p>
            <p>{top_par.p2}</p>

            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <div
              id={mayores.id}
              className='mt-3'>
              <h2>{mayores.h2}</h2>
              <p>{mayores.p}</p>
              <ul>
                {mayores.ul.map((li, k) => (
                  <li key={k}>
                    <strong>{li.bolded}</strong> {li.text}
                  </li>
                ))}
              </ul>
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
              className='mt-4'
              id={como_apostar.id}>
              <h2>{como_apostar.h2}</h2>
              <p>{como_apostar.p}</p>
              <p>{como_apostar.p2}</p>
            </div>

            <div id={consejos.id}>
              <h2>{consejos.h2}</h2>
              <p>{consejos.p}</p>
              <p>{consejos.p2}</p>
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
              id={favorito.id}
              className='mt-4'>
              <h2>{favorito.h2}</h2>
              <p>{favorito.p}</p>
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
                    <Accordion.Body>
                      {inn.ol ? (
                        <ol>
                          {inn.ol.map((li, i) => (
                            <li key={i}>
                              <strong>
                                {li.bolded}
                                {li.text}
                              </strong>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <p>{inn.ol}</p>
                      )}
                    </Accordion.Body>
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
      </Container>
    </>
  );
}
