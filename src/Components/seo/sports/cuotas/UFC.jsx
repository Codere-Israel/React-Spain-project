import { Container, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';

export default function UFC(props) {
  const title = 'Apuestas Online de UFC y Artes Marciales Mixtas 🥋 | Codere®';
  const description =
    'Saber quiénes son los mejores competidores y ver como llegan al combate son solo algunos de los factores en el mundo de las apuestas de UFC en Codere';

  const json = [
    {
      '@context': 'https://schema.org',
      '@id':
        'https://www.codere.es/_catalogs/masterpage/codere/images/seo/ufc-discovery-image-schema.jpg',
      '@type': 'ImageObject',
      url: 'https://www.codere.es/_catalogs/masterpage/codere/images/seo/ufc-discovery-image-schema.jpg',
      width: '1200',
      height: '628',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo son las apuestas de UFC en Codere?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las apuestas en Codere se caracterizan como ya hemos explicado en Ganador del combate, más o menos rounds y el Modo de victoria.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Dónde seguir el calendario de peleas de la UFC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El mejor lugar para seguir el calendario de peleas es en la página oficial de la UFC. Ahí podrás encontrar todos los enfrentamientos y el ranking por sexo y peso.',
          },
        },
      ],
    },
  ];

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/UFC/${
    props.flag ? 'M' : 'D'
  }-UFC-`;
  const postfix = '.jpg';

  const table_list = [
    {
      title: 'Origen de la MMA',
      id: 'origen',
    },
    {
      title: 'UFC Ranking Varonil',
      id: 'ranking1',
    },
    {
      title: 'UFC Ranking Femenil',
      id: 'ranking2',
    },
    {
      title: 'Principales exponentes de la UFC',
      id: 'principales',
    },
    {
      title: 'Guía para apostar a la UFC',
      id: 'apostar',
    },
    {
      title: 'Preguntas frecuentes sobre la F1',
      id: 'preguntas',
    },
  ];

  const top_par = {
    h1: 'Vive la ufc hoy: La guia definitiva de apuestas en la ufc',
    p: 'La UFC son las siglas tras las que se encuentra la Ultimate Fighting Championship. Esta es la compañía promotora y organizadora de los combates de artes marciales mixtas (MMA). Estas artes tienen su origen en los años 20, con el conocido ‘Vale Tudo’, desarrollado en Brasil pero importado a Estados Unidos gracias a la familia Gracie.',
    p2: 'Este deporte era mucho más brutal y menos regulado que el MMA. Esta disciplina combina casi todos los estilos de contacto, permitiendo tanto la lucha en pie (striking), como la lucha en suelo (grappling). Se puede decir que las artes marciales mixtas son un deporte de contacto en dónde se usan diversas disciplinas, como el boxeo, jiu jitsu, jiu jitsu brasileño, muay thai, judo, taekwondo, karate, kung fu, kickboxing y lucha.',
  };

  const origen = {
    id: 'origen',
    h2: 'Origen de la MMA',
    p: 'El origen de las Artes Marciales Mixtas está relacionado con el Pankration, un deporte que se practicaba en la antigua Grecia y que llegó a ser incluido en los Juegos Olímpicos de 684 a.C. Este deporte era un arte marcial que combinaba la lucha con el boxeo, llegando a ser un tipo de entrenamiento para los soldados griegos. Entre las semejanzas existentes entre estos dos deportes está la señal para indicar la rendición.',
    p2: 'Antiguamente, los griegos utilizaban el gesto de un dedo levantado, siendo igual que a lo que hoy llamamos “tap-out”. Además, otra de las semejanzas estaba en que morder o meter los dedos en el ojo estaban prohibidos al igual que ocurre con el MMA.',
  };

  const ranking1 = {
    id: 'ranking1',
    h2: 'UFC Ranking Varonil',
    p: 'Actualmente en cada peso de la UFC de hombres contamos con los mejores atletas.',
    ul: [
      {
        bolded: 'Jon Jones: ',
        text: 'es el luchador mejor posicionado en el peso semipesado, llegando a tener tres títulos mundiales.',
      },
      {
        bolded: 'Brandon Moreno: ',
        text: 'es la gran estrella del peso pluma, siendo considerado uno de los mejores de la historia con un título actual de campeón.',
      },
      {
        bolded: 'Aljamain Sterling: ',
        text: 'Es peso gallo, nos encontramos con quien ya sabe lo que es tener un cinturón de campeón actual.',
      },
      {
        bolded: 'Alexander Volkanovski: ',
        text: 'es un peleador australiano de artes marciales mixtas que actualmente compite en la categoría de peso pluma en Ultimate Fighting Championship, donde es el actual campeón.',
      },
      {
        bolded: 'Aljamain Sterling',
        text: 'Es peso gallo, nos encontramos con quien ya sabe lo que es tener un cinturón de campeón actual.',
      },
      {
        bolded: 'Charles Oliveira "Do Bronx": ',
        text: 'es un peleador brasileño de artes marciales mixtas que actualmente compite en la categoría de peso ligero en Ultimate Fighting Championship, donde es el actual campeón.',
      },
      {
        bolded: 'Kamaru Usman: ',
        text: 'Actualmente está en la posición #2 en el ranking oficial de UFC de los mejores peleadores masculinos libra-por-libra y es campeón del peso welter.',
      },
      {
        bolded: 'Israel Adesanya: ',
        text: 'es un peleador de artes marciales mixtas, boxeador y kickboxer neozelandés de origen nigeriano que compite en UFC en la categoría de peso mediano, donde es el actual campeón.',
      },
      {
        bolded: 'Francis Ngannou: ',
        text: 'es un peleador camerunés con nacionalidad francesa de artes marciales mixtas, actual campeón de la categoría de peso pesado en UFC.',
      },
    ],
  };
  const ranking2 = {
    id: 'ranking2',
    h2: 'UFC Ranking Femenil',
    ul: [
      {
        bolded: 'Amanda Nunes: ',
        text: 'es una peleadora brasileña de artes marciales mixtas que compite en la categoría de peso gallo de UFC, donde es la actual campeona. Es la primera mujer en la historia de UFC en ser campeona de dos categorías diferentes simultáneamente.',
      },
      {
        bolded: 'Rose Namajunas: ',
        text: 'es una peleadora lituano-estadounidense de artes marciales mixtas que actualmente compite en el peso paja femenino en Ultimate Fighting Championship, donde es la actual campeona.',
      },
      {
        bolded: 'Valentina Shevchenko: ',
        text: 'es una peleadora de artes marciales mixtas que cuenta con las nacionalidades kirguisa y peruana. Representó al Perú en la Gran Prix femenino en China y la World Kickboxing League donde fue ganadora.',
      },
    ],
  };

  const principales = {
    id: 'principales',
    h2: 'Principales exponentes de la UFC',
    ul: [
      {
        bolded: 'Juan Espino: ',
        text: '“El Guapo”, como así se le conoce, lucha en la categoría de peso pesado. Toda su vida se ha dedicado a los diferentes estilos de lucha en los que ha conseguido grandes cosas como en la modalidad de grappling con las que tiene varias medallas de oro.',
      },
      {
        bolded: 'Ilia Topuria: ',
        text: 'es un peleador de origen georgiano de artes marciales mixtas que compite en la categoría de peso pluma de la UFC. Residente en Alicante, Ilia entrena con el equipo Climent club donde sus habilidades destacan sobre todo en el Jiu Jitsu brasileño del cuál es cinturón negro, así como en la lucha o grappling además de tener muy buen nivel de boxeo en el striking.',
      },
      {
        bolded: 'Dani Bárez: ',
        text: 'Este valenciano se hizo un hueco en MMA al ganar los títulos europeos y mundiales que organizaba la empresa BAMMA.',
      },
      {
        bolded: 'Joel Álvarez: ',
        text: 'Nacido en Gijón, es un peleador español de artes marciales mixtas que compite en la categoría de peso ligero de la Ultimate Fighting Championship.',
      },
      {
        bolded: 'Alberth Dias: ',
        text: 'brasileño que, a sus 28 años, ya afincado en España, ha entrado de lleno en el pequeño pero selecto grupo de luchadores que compiten en la élite de las MMA. El pasado febrero debutó en combate con la compañía norteamericana Bellator, con victoria frente a Ritchie Smullen, alumno del afamado irlandés y estrella mundial Connor McGregor.',
      },
    ],
  };

  const apostar = {
    id: 'apostar',
    h2: 'Guía para apostar a la UFC',
    p: 'Antes de empezar en el mundo de las apuestas de la UFC tienes que entender el deporte, saber quiénes son los mejores competidores para cada peso, ver como llegan al combate y tener claro que si se quiere ganar dinero hay que apostar de cabeza y no de corazón. Hay tres tipos de apuestas básicas:',
    ul: [
      {
        bolded: 'Ganador del combate: ',
        text: 'Es la apuesta más sencilla y se basa en elegir quién crees que será el ganador del combate. Fíjate en las cuotas para saber quién es el favorito.',
      },
      {
        bolded: 'Más o menos rounds: ',
        text: 'En este tipo de apuestas, Codere te pondrá un umbral medio de duración de la pelea. Por ejemplo: más o menos 2.5 rounds. Ahí podrás apostar si crees que el combate acabará antes o después de ese tiempo establecido.',
      },
      {
        bolded: 'Por modo de victoria: ',
        text: 'Puedes apostar a si la pelea acabará con la decisión o si por el contrario terminará por sumisión o KO/ TKO de alguno de los luchadores.',
      },
    ],
  };

  const questions = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre la UFC',

    inner: [
      {
        h3: '¿Cómo son las apuestas de UFC en Codere?',
        text: 'Las apuestas en Codere se caracterizan como ya hemos explicado en Ganador del combate, más o menos rounds y el Modo de victoria.',
      },
      {
        h3: '¿Dónde seguir el calendario de peleas de la UFC?',
        text: 'El mejor lugar para seguir el calendario de peleas es en la página oficial de la UFC. Ahí podrás encontrar todos los enfrentamientos y el ranking por sexo y peso.',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/cuotas-deportivas/apuestas-ufc'
        />
        <meta
          name='description'
          content={description}
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      <Floating text='La fuerza esta de tu lado' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/UFC/${
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
              id={origen.id}
              className='mt-4'>
              <h2>{origen.h2}</h2>
              <p>{origen.p}</p>
              <p>{origen.p2}</p>
            </div>

            <LazyLoadImage
              src={prefix + '1' + postfix}
              width='100%'
            />
            <div
              id={ranking1.id}
              className='mt-4'>
              <h2>{ranking1.h2}</h2>
              <p>{ranking1.p}</p>
              <ul>
                {ranking1.ul.map((li, k) => (
                  <li key={k}>
                    <p>
                      <strong>{li.bolded}</strong>
                      {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id={ranking2.id}
              className='mt-4'>
              <h2>{ranking2.h2}</h2>
              <ul>
                {ranking2.ul.map((li, k) => (
                  <li key={k}>
                    <p>
                      <strong>{li.bolded}</strong>
                      {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <LazyLoadImage
              src={prefix + '2' + postfix}
              width='100%'
            />

            <div
              id={principales.id}
              className='mt-4'>
              <h2>{principales.h2}</h2>
              <ul>
                {principales.ul.map((li, k) => (
                  <li key={k}>
                    <p>
                      <strong>{li.bolded}</strong>
                      {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id={apostar.id}
              className='mt-4'>
              <h2>{apostar.h2}</h2>
              <p>{apostar.p}</p>
              <ul>
                {apostar.ul.map((li, k) => (
                  <li key={k}>
                    <p>
                      <strong>{li.bolded}</strong>
                      {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className='mt-4'
              id={questions.id}>
              <h2>{questions.h2}</h2>
            </div>
            <Accordion>
              {questions.inner.map((q, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k}>
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
