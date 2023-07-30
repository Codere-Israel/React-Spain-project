import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Container, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Ciclismo(props) {
  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Cycling/${
    props.flag ? 'M' : 'D'
  }-Cycling-`;
  const jpg = '.jpg';

  const title = 'Apuestas de Ciclismo Online en España 🚴 | Codere®';
  const description =
    'Aquí te contamos sobre el ciclismo, sus carreras y tours más importantes para que puedas empezar a jugar en línea, apostar y divertirte';
  const json = [
    {
      '@context': 'https://schema.org',
      '@id': 'https://www.codere.es/_catalogs/masterpage/codere/images/seo/ciclismo-discovery.jpg',
      '@type': 'ImageObject',
      url: 'https://www.codere.es/_catalogs/masterpage/codere/images/seo/ciclismo-discovery.jpg',
      width: '1200',
      height: '628',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuáles son las distancias en el ciclismo de ruta? ',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En las pruebas de ciclismo de ruta los hombres suelen realizar 50km, mientras que las mujeres recorren 30 kilómetros. ',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo apostar en el mundo del ciclismo de ruta en Codere?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Antes de empezar a apostar en el mundo del ciclismo de ruta tienes que tener en cuenta los factores externos que existen en la etapa. ',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo se realiza la vuelta a España?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La Vuelta a España suele comenzar a mediados de Agosto y finaliza en los primeros días del mes de Septiembre.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo ganar en las apuestas de ciclismo de ruta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para ganar en las apuestas de ciclismo debes tener la mayor información posible para que tu apuesta tenga más probabilidad de ganar. ',
          },
        },
        {
          '@type': 'Question',
          name: '¿Con qué tipo de apuestas tengo más opción de ganar en el ciclismo de ruta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los días en los que hay etapas llanas, los sprinters son los máximos favoritos; mientras que los días de montaña o con final en alto, las cuotas favorecen a los corredores que mejor se desempeñan en este tipo de terreno. ',
          },
        },
      ],
    },
  ];

  const table_list = [
    {
      title: '¿Qué es el ciclismo?',
      id: 'a_que',
    },
    {
      title: 'Carreras más importantes en el mundo de ciclismo de ruta',
      id: 'carreras',
    },
    {
      title: 'Breve historia de La Vuelta a España',
      id: 'history1',
    },
    {
      title: 'Breve historia de La Vuelta de Paris-Roubaix',
      id: 'history2',
    },
    {
      title: 'Máximo representantes del ciclismo en ruta actual',
      id: 'maximo',
    },
    {
      title: 'Consejos de apuestas de ciclismo',
      id: 'consejos',
    },
    {
      title: 'Preguntas frecuentes sobre las apuestas de tenis',
      id: 'preguntas',
    },
  ];

  const top_par = {
    h1: 'Apuestas deportivas en el mundo del Ciclismo',
  };

  const a_que = {
    id: 'a_que',
    h2: '¿Qué es el ciclismo?',
    p1: 'El ciclismo es la utilización de la bicicleta como medio de transporte, deporte, recreación o ejercicio físico. En su modalidad deportiva, el ciclismo utiliza la bicicleta para recorrer Circuitos al Aire Libre o en Pista Cubierta, englobando diferentes especialidades. Los ciclistas son personas que utilizan la bicicleta para transportarse de un lado a otro',
    p2: 'Tipo de competiciones: Existen varios tipos de modalidades o disciplinas de competiciones',
    p3: 'Además, dentro de cada estilo existen diferentes especialidades. El ciclismo de competición es reconocido como un deporte olímpico.',
    ul: [
      'Ciclismo de Carretera',
      'Ciclismo en Pista',
      'Ciclismo de Montaña',
      'Trial de Ciclismo',
      'Cyclo-Cross',
      'Ciclismo BMX',
    ],
  };

  const carreras = {
    id: 'carreras',
    h2: 'Carreras más importantes en el mundo de ciclismo de ruta',
    inner: [
      {
        h3: 'Vuelta a España',
        p: 'La Vuelta Ciclista a España, también conocida como la Vuelta a España o simplemente La Vuelta, es una carrera por etapas profesional de ciclismo en ruta disputada a lo largo de la geografía española, entre finales de agosto y mediados de septiembre.',
      },
      {
        h3: 'Tour del Porvenir',
        p: 'Es una competición que se realiza durante los meses de agosto y septiembre en Francia. Su característica principal es que cuenta con limitación de edad y puede incluir competidores amateurs o semi-profesionales independientes',
      },
      {
        h3: 'Vuelta a Polonia',
        p: 'Es una competición que se celebra en agosto y pertenece al calendario UCI WorldTour, máxima categoría de las carreras profesionales. El Tour se disputó por primera vez en 1928 y es una carrera por etapas que se realiza por toda la geografía polaca.',
      },
      {
        h3: 'Vuelta a Portugal',
        p: 'La Volta a Portugal o La Grandíssima fue creada en 1927 y es la carrera de ciclismo por etapas más importante de Portugal',
      },
      {
        h3: 'Vuelta a Dinamarca',
        p: 'Es una carrera ciclista profesional por etapas que se disputa en Dinamarca, en el mes de agosto. La prueba está patrocinada por el servicio postal de Dinamarca de ahí su nombre.',
      },
      {
        h3: 'Tour de Francia',
        p: 'También conocido simplemente como el Tour, es una vuelta por etapas profesional de ciclismo en ruta disputada a lo largo de la geografía francesa -aunque suele transcurrir parcialmente por los países vecinos.',
      },
    ],
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

  const history1 = {
    id: 'history1',
    h2: 'Breve historia de La Vuelta a España',
    p: [
      'El origen de la vuelta a España empieza en 1935. Clemente López Doriga y el director del diario Informaciones, Juan Pujol, fueron los responsables del nacimiento de la carrera. La primera vez que se realizó la competición contó con 14 etapas y tenía 3.431 kilómetros de recorrido entre Madrid y Valladolid. Al siguiente año la situación política del país era delicada y el comienzo de la Guerra Civil supuso un parón.',
      'La Vuelta a España vuelve a reanudar su marcha en el año 1941, pero será muy efímera por el comienzo de la II Guerra Mundial y la precaria situación económica que en esos momentos ocurre en España. Pero en 1945 y, gracias al Diario Ya, vuelve a disputarse la competición con escasa participación extranjera. Bajo la organización del Diario Ya se llegaron a celebrar cuatro ediciones más.',
      'Pero en ese momento volvería la Vuelta a sufrir un parón por falta de organizador. Cinco años después, en 1955, el Diario El Correo Español se hace con los derechos de la Vuelta a España. Es a partir de esta fecha cuando no vuelve a sufrir más parones y se disputará anualmente hasta nuestros días.',
    ],
  };
  const history2 = {
    id: 'history2',
    h2: 'Breve historia de La Vuelta de Paris-Roubaix',
    p: [
      'También conocida como el “Infierno del Norte”, el apodo se le puso por el estado en el que se encontraban algunos tramos tras la Segunda Guerra Mundial y los cuáles se siguen transitando en las ediciones actuales.',
      'Disputada por primera ocasión en 1896, el lugar de llegada no ha variado y siempre ha finalizado en el Velódromo de Roubaix. Cuentan con tramos de adoquines calificados con estrellas según su dificultad y extensión, siendo el tramo de Mons-en-Pévèle, el Bosque de Arenberg y el Carrefour de l’Arbre los únicos con cinco estrellas',
      'Esta competición fue impulsada por un diario deportivo, Le Veló. El director de dicho diario, Paul Rousseau, recibió la idea por parte de dos empresarios de la localidad de Roubaix. Estas dos personas vieron en esta carrera la oportunidad de entrenarse para la Burdeos-París, un evento más famoso en aquella época. Tras inspeccionar el trazado, la competición se puso en marcha un 19 de abril bajo el nombre de La Pascale.',
      'En esa primera edición se arrancó desde Bois de Boulogne, al norte de París, realizándose más de 300 kilómetros hasta Roubaix. Esa primera vez el premio se lo llevó el alemán Josef Fischer, recibiendo 1000 francos franceses.',
    ],
  };

  const maximo = {
    id: 'maximo',
    h2: 'Máximo representantes del ciclismo en ruta actual',
    p: 'El ciclismo no deja de parar y sigue sacando bestias competitivas que hacen que cada día suba el nivel de este deporte. Actualmente en el mundo existen ciclistas de gran calidad, pero aquí te dejamos una lista de los que son para nosotros son los mejores del mundo:',
    ul: [
      'Alejandro Valverde: a sus 38 años, el Bala sigue dejando un gran nivel y es uno de los mejores ciclistas del mundo.',
      'Chris Froome: El positivo de la pasada Vuelta a España ha manchado la imagen de Chris Froome, pero el británico, mientras no se demuestre lo contrario, sigue siendo todo un cuatro veces ganador del Tour de Francia.',
      'Peter Sagan: Considerado el mejor ciclista del planeta, la victoria en la París-Roubaix 2018 le da a su palmarés un lustre a la altura de la leyenda eslovaca.',
      'Vincenzo Niballi: El Tiburón italiano es el único ciclista en activo que ha sido capaz de ganar las tres grandes vueltas por etapas.',
      'Tom Dumoulin: Siendo un ciclista corpulento, dominador en contrarreloj, pero capaces de resistir con los mejores en la montaña, se le ha igualado con Miguel Induráin o Jan Ulrich',
      'Nairo Quintana: El colombiano es el mejor representante de su país, pero su nivel irregular hace que pongamos en duda que pueda llegar a ser el mejor ciclista actual.',
      'Mikel Landa: Tras su fichaje por el Movistar, el vasco tendrá la oportunidad de luchar con los mejores ciclistas del pelotón como uno más.',
    ],
  };

  const consejos = {
    id: 'consejos',
    h2: 'Consejos de apuestas de ciclismo',
    p: 'Para empezar a apostar en el ciclismo hay que tener en cuenta que es un deporte en el que no sólo hay que tener en cuenta la calidad de los protagonistas, sino también el estado del asfalto, la temperatura y el tipo de prueba que corren. El ciclismo suele contar con cuotas grandes, sobre todo en las carreras con etapas más importantes. Esto se debe a la dificultad que tiene acertar por el ganador debido a la participación de tantos corredores.',
  };

  const tips = {
    id: 'tips',
    h2: 'Tipos de apuestas de ciclismo de ruta en Codere',
    p: [
      'En el mundo de las apuestas sobre el ciclismo se puede apostar a Ganador Final, apostando quien se subirá al podio. Además, dentro de esta apuesta también se puede apostar a si tu corredor queda entre los tres primeros',
      'Otra de las apuestas que existen es clasificaciones secundarias, en dónde se pueden lanzar picks por quiénes se llevarán los jerséis de la montaña, de la regularidad o del mejor joven. También es posible apostar por quién será el mejor equipo al final de la carrera.',
      'Otro de los clásicos de las apuestas es ser capaz de adivinar quién ganará cada etapa. Esto se puede hacer en previo o realizando apuestas en directo.',
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre el ciclismo de ruta',
    inner: [
      {
        h3: '¿Cuáles son las distancias en el ciclismo de ruta?',
        p: 'En las pruebas de ciclismo de ruta los hombres suelen realizar 50km, mientras que las mujeres recorren 30 kilómetros',
      },
      {
        h3: '¿Cómo apostar en el mundo del ciclismo de ruta en Codere?',
        p: 'Antes de empezar a apostar en el mundo del ciclismo de ruta tienes que tener en cuenta los factores externos que existen en la etapa.',
      },
      {
        h3: '¿Cuándo se realiza la vuelta a España?',
        p: 'La Vuelta a España suele comenzar a mediados de Agosto y finaliza en los primeros días del mes de Septiembre.',
      },
      {
        h3: '¿Cómo ganar en las apuestas de ciclismo de ruta?',
        p: 'Para ganar en las apuestas de ciclismo debes tener la mayor información posible para que tu apuesta tenga más probabilidad de ganar.',
      },
      {
        h3: '¿Con qué tipo de apuestas tengo más opción de ganar en el ciclismo de ruta?',
        p: 'Los días en los que hay etapas llanas, los sprinters son los máximos favoritos; mientras que los días de montaña o con final en alto, las cuotas favorecen a los corredores que mejor se desempeñan en este tipo de terreno.',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/cuotas-deportivas/apuestas-ciclismo'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text='Recorrer la pista' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/Cycling/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event mt-4'>
          <Container>
            <Fade>
              <h1 className='header'>{top_par.h1}</h1>
            </Fade>

            {!props.flag ? <TableOfContents table={table_list} /> : <></>}

            <div
              id={a_que.id}
              className='mt-4'>
              <h2>{a_que.h2}</h2>
              <p>{a_que.p1}</p>
              <p>{a_que.p2}</p>
              <ul>
                {a_que.ul.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
              <p>{a_que.p3}</p>
            </div>

            <div
              className='mt-4'
              id={carreras.id}>
              <h2>{carreras.h2}</h2>
              <Accordion>
                {carreras.inner.map((inn, k) => (
                  <Accordion.Item
                    key={k}
                    eventKey={k}>
                    <Accordion.Header as='h3'>{inn.h3}</Accordion.Header>
                    <Accordion.Body>{inn.p}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            {!props.flag ? (
              <Fade
                duration={1000}
                triggerOnce>
                <LazyLoadImage
                  src={prefix + '1' + jpg}
                  width='100%'
                />
              </Fade>
            ) : (
              <></>
            )}

            <div
              className='mt-4'
              id={history1.id}>
              <h2>{history1.h2}</h2>
              {history1.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>

            <div id={history2.id}>
              <h2>{history2.h2}</h2>
              {history2.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>

            {!props.flag ? (
              <Fade
                duration={1000}
                triggerOnce>
                <LazyLoadImage
                  src={prefix + '2' + jpg}
                  width='100%'
                />
              </Fade>
            ) : (
              <></>
            )}

            <div
              id={maximo.id}
              className='mt-4'>
              <h2>{maximo.h2}</h2>
              <p>{maximo.p}</p>
              <ul>
                {maximo.ul.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            </div>

            <div id={consejos.id}>
              <h2>{consejos.h2}</h2>
              <p>{consejos.p}</p>
              <p>{consejos.p2}</p>
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

            {!props.flag ? (
              <Fade
                duration={1000}
                triggerOnce>
                <LazyLoadImage
                  src={prefix + '3' + jpg}
                  width='100%'
                />
              </Fade>
            ) : (
              <></>
            )}
          </Container>
        </div>
      </Container>
    </>
  );
}
