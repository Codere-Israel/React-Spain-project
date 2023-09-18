import { Container, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';

export default function F1(props) {
  const title = 'Apuestas Online Fórmula 1 🏎️ » Vive la F1  | Codere®';
  const description =
    'Conoce más acerca de los Grandes Premios de la F1, acá te decimos todo sobre como apostar en línea, jugar y obtener las mejores ganancias.';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuándo empieza la F1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La fórmula 1 se encuentra ahora mismo en temporada y finalizará el 12 de diciembre en el GP de Abu Dabi. La temporada 2022 no cuenta con un calendario para el comienzo de las carreras.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo apostar a la F1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lo mejor para apostar a la fórmula 1 es tener en cuenta las estadísticas de cada conductor, ver sus posibilidades según el tipo de Gran Premio y elegir la mejor cuota para nuestra apuesta.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el sprint race de F1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es una nueva modalidad que probará la fórmula 1 que se basa en una versión recortada de una carrera normal, que se lleva a cabo en una distancia menor, aproximadamente unos 100 kilómetros.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué los F1 echan chispas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un cambio en la reglamentación ha provocado que las chispas estén de vuelta en la F1, principalmente como medida de seguridad, pero en segundo lugar para hacer las carreras más agradables a la vista.',
        },
      },
    ],
  };

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/F1/${
    props.flag ? 'M' : 'D'
  }-Formula1-`;
  const postfix = '.jpg';

  const table_list = [
    {
      title: 'Circuitos de los grandes premios',
      id: 'circuitos',
    },
    {
      title: 'La puntuación y orden en la actualidad en un Gran Premio',
      id: 'orden',
    },
    {
      title: 'Pilotos y equipos de F1',
      id: 'pilotos',
    },
    {
      title: 'Conoce la guía definitiva para apostar en las carreras de fórmula 1',
      id: 'Conoce',
    },
    {
      title: 'Preguntas frecuentes sobre la F1',
      id: 'preguntas',
    },
  ];

  const top_par = {
    h1: 'Vive el apasionante mundo de las carreras',
    p: 'El inicio de la Fórmula 1 moderna como se le conoce comenzó en el año 1950. En este año participaron escuderías como Ferrari, Alfa Romeo o Maseratti. Más tarde, algunas de ellas fueron reemplazadas por McLaren, Williams, Red Bull o Mercedes.',
    p2: 'A cada carrera de fórmula 1 se le denomina Gran Premio. La mayoría de los circuitos son autódromos, aunque en muchas ocasiones son utilizados como circuitos callejeros o ruteros. A su vez, los automóviles que se utilizan se denominan monoplazas, que cuentan con la última tecnología disponible en el mercado, limitada eso sí a un reglamento técnico. Los pilotos deben contar con la superliciencia de la FIA para poder competir.',
  };

  const circuitos = {
    id: 'circuitos',
    h2: 'Circuitos de los grandes premios',
    p: [
      'La importancia de los circuitos de la Fórmula 1 es cambiante y cada año hay un circuito que aumenta su prestigio. Pese a ello, existen cuatro circuitos que están muy por encima del resto de grandes premios.',
      'El primero es el de GP de Silverstone en Gran Bretaña, un circuito que ha estado en todas las ediciones de la Fórmula 1. Junto a él se encuentra el GP de Monza en Italia, que al igual que Silverstone, ha sido parte de la Fórmula 1 desde sus inicios en el año 1950.',
      'Otro de los míticos circuitos de la Fórmula 1 es el Gran Premio de Mónaco. Es uno de los más antiguos y emocionantes, ya que se encuentra en mitad de la ciudad de Mónaco, siendo en muchos momentos imposible adelantar.',
      'Por último, el Gran Premio de Bélgica en el Circuito de Spa-Francorchamps es otro de los míticos circuitos en dónde hay momentos de la carrera en los que en una parte del circuito da el sol y en la otra llueve.',
    ],
  };

  const orden = {
    id: 'orden',
    h2: 'La puntuación y orden en la actualidad en un Gran Premio',
    p: 'Desde el año 2010, el sistema de puntuación de la Fórmula 1 permite puntuación puntuar a los 10 primeros clasificados, utilizando una escala más progresiva que la anterior. Con esto se fomenta la lucha de posiciones de punta. La manera de puntuar es: 25 puntos al primer clasificado, 18 al segundo, 15 al tercer, 12 al cuarto, 10 al quinto, 8 al sexto, 6 al séptimo, 4 al octavo, 2 al noveno y 1 al décimo. A partir del año 2019, y al igual que se hacía en 1950 hasta 1959, se otorga un punto al piloto que entre los diez primeros clasificados consiga la vuelta rápida. En caso de estar ubicado por debajo de los diez primeros, este punto se pierde.',
  };

  const pilotos = {
    id: 'pilotos',
    h2: 'Pilotos y equipos de F1',
    p: 'En la Fórmula 1 existen un total de 20 pilotos, entre los cuales contamos con cuatro que ya saben lo que es ganar un Mundial. Además, 10 de ellos han vencido alguna vez una carrera. Sin duda, uno de los años más completos. Aquí te dejamos una lista de los mejores de la parrilla:',
    ol: [
      'Fernando Alonso - Alpine',
      'Carlos Sainz - Ferrari',
      'Lewis Hamilton - Mercedes',
      'Sebastian Vettel - Aston Martin',
      'Kimi Raikkonen - Alfa Romeo',
      'Valtteri Bottas - Mercedes',
      'Charles Leclerc - Ferrari',
      'Max Verstappen - Red Bull',
      'Lando Norris - McLaren',
      'Sergio Pérez - Red Bull',
    ],
  };

  const conoce = {
    id: 'conoce',
    h2: 'Conoce la guía definitiva para apostar en las carreras de fórmula 1',
    p: [
      'Para realizar apuestas en Codere sobre la Fórmula 1 lo primero que necesitas es conocimiento e investigación de la industria con la intención de conocer las probabilidades que existen. Entre las apuestas que puedes realizar en la Fórmula 1 está la posibilidad de apostar al Campeonato del Mundo, intentando predecir que piloto ganará el campeonato. También puedes apostar al Campeonato Mundial de Constructores, aquí se bota al equipo ganador.',
      'Durante las carreras y en previo, también podrás apostar a quien será el ganador de un circuito o quién realizará la vuelta rápida. Antes de comenzar a apostar recuerda hacer una investigación básica. Familiarízate con los pilotos, los equipos, los constructores, las pistas de carrera. Después intenta dedicar tu tiempo en observar como son las carreras y el desempeño de los equipos durante las sesiones de práctica.',
      'Además, las nuevas tecnologías que los diferentes equipos de la Fórmula 1 usan, son herramientas para mejorar su nivel. Si estás al pendiente de esto podrás ver las ventajas de unos equipos sobre otros. Las apuestas de Fórmula 1 no son sencillas, por lo que no te vengas abajo si pierdes la primera.',
    ],
  };

  const questions = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre la F1',

    inner: [
      {
        h3: '¿Cuándo empieza la F1?',
        text: 'La fórmula 1 se encuentra ahora mismo en temporada y finalizará el 12 de diciembre en el GP de Abu Dabi. La temporada 2022 no cuenta con un calendario para el comienzo de las carreras.',
      },
      {
        h3: '¿Cómo apostar a la F1?',
        text: 'Lo mejor para apostar a la fórmula 1 es tener en cuenta las estadísticas de cada conductor, ver sus posibilidades según el tipo de Gran Premio y elegir la mejor cuota para nuestra apuesta.',
      },
      {
        h3: '¿Qué es el sprint race de F1?',
        text: 'Es una nueva modalidad que probará la fórmula 1 que se basa en una versión recortada de una carrera normal, que se lleva a cabo en una distancia menor, aproximadamente unos 100 kilómetros.',
      },
      {
        h3: '¿Por qué los F1 echan chispas?',
        text: 'Un cambio en la reglamentación ha provocado que las chispas estén de vuelta en la F1, principalmente como medida de seguridad, pero en segundo lugar para hacer las carreras más agradables a la vista.',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/cuotas-deportivas/apuestas-formula1'
        />
        <meta
          name='description'
          content={description}
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      <Floating text='disfruta la adrenalina' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/F1/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event'>
          <Container style={{ marginTop: '2rem' }}>
            <h1 className='header subtitle'>{top_par.h1}</h1>
            <p>{top_par.p}</p>
            <p>{top_par.p2}</p>

            {!props.flag ? (
              <TableOfContents
                isFormula={false}
                table={table_list}
              />
            ) : (
              <></>
            )}

            <div
              id={circuitos.id}
              className='mt-4'>
              <h2>{circuitos.h2}</h2>
              {circuitos.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>

            <LazyLoadImage
              src={prefix + '1' + postfix}
              width='100%'
            />
            <div
              id={orden.id}
              className='mt-4'>
              <h2>{orden.h2}</h2>
              <p>{orden.p}</p>
            </div>

            <div
              id={pilotos.id}
              className='mt-4 mb-4'>
              <h2>{pilotos.h2}</h2>
              <p>{pilotos.p}</p>
              <ol style={{ color: '#fff' }}>
                {pilotos.ol.map((li, k) => (
                  <li key={k}>
                    <p style={{ margin: 0 }}>{li}</p>
                  </li>
                ))}
              </ol>
            </div>

            <LazyLoadImage
              src={prefix + '2' + postfix}
              width='100%'
            />

            <div
              className='mt-4'
              id={conoce.id}>
              <h2>{conoce.h2}</h2>
              {conoce.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>

            <div
              className='mt-4'
              id={questions.id}>
              <h2>Preguntas frecuentes sobre el Grand Prix</h2>
            </div>
            <Accordion>
              {questions.inner.map((q, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k + ''}>
                  <Accordion.Header as={'h3'}>{q.h3}</Accordion.Header>
                  <Accordion.Body>{q.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <LazyLoadImage
              src={prefix + '3' + postfix}
              width='100%'
            />
          </Container>
        </div>
      </Container>
    </>
  );
}
