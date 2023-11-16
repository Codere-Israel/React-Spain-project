import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container, Image, Placeholder, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AddTable from '../../AddTable';
import { NavLink } from 'react-router-dom';

export default function Futbol(props) {
  const title = 'Apuesta Online a Los Mejores Partidos de Fútbol ⚽ | Codere®';
  const description =
    'Codere trae para ti información muy útil sobre como apostar a tus equipos preferidos, juega online y triunfa en el mundo de las apuestas de fútbol';

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/Soccer/${
    props.flag ? 'M' : 'D'
  }-Soccer-`;
  const jpg = '.jpg';

  const top_par = {
    h1: 'Apuestas de fútbol: lo que debes saber a la hora de apostar',
  };
  const apuestas = {
    id: 'apuestas',
    h2: 'Realiza tus apuestas sobre el deporte rey',
    p: 'El fútbol es el deporte más conocido y seguido en todo el mundo. Ningún otro deporte le pisa los talones. Como consecuencia, el fútbol es también el deporte más popular a la hora de apostar. Hacer apuestas deportivas es una manera divertida y potencialmente rentable de añadir algo de emoción a tu experiencia de disfrute de eventos deportivos.',
    p2: 'Si quieres triunfar en el mundo de las apuestas deportivas de fútbol, tendrás que informarte antes. Aunque apostar sobre fútbol puede parecer bastante sencillo, existe una gran diferencia entre realizar apuestas seguras y realizar apuestas por capricho. Si te informas correctamente, conoces los equipos, estudias las estadísticas y te familiarizas con las diferentes opciones de apuestas, incrementarás de forma significativa tus probabilidades de ganar.',
  };

  const como_realizar = {
    id: 'como_realizar',
    h2: '¿Cómo empezar a realizar apuestas deportivas de fútbol?',
    p: [
      'Antes de siquiera pensar en hacer una apuesta hay varias cosas que debes saber. Una de las cosas más importantes que debes hacer antes de realizar una apuesta es elegir una casa de apuestas de confianza. Si bien muchas casas de apuestas son fiables, siempre hay algunos de los que no te puedes fiar. Gracias a Internet, puedes encontrar fácilmente qué casa de apuestas de fútbol se adapta mejor a tus necesidades.',
      'Asimismo, tendrás que decidir si quieres realizar apuestas Online o de forma presencial. Aunque apostar de forma presencial puede mejorar la experiencia global (por ejemplo, puedes ver los partidos en una pantalla grande de televisión junto a otros jugadores), apostar Online suele ser más cómodo y ofrece más opciones de pago, como Transferencia bancaria, Paypal y Hal Cash.',
      'Comienza a leer sobre cómo analizar los pronósticos de apuestas de fútbol. Al estudiar las estadísticas y el historial de enfrentamientos, tendrás una ventaja importante.',
    ],
  };

  const resumen = {
    id: 'resumen',
    h2: 'Resumen de los diferentes tipos de apuestas',
    p: 'Como cualquier otro deporte, el fútbol ofrece varias formas de apostar. Veamos las diversas apuestas de fútbol disponibles actualmente.',
    p2: 'Una variante de esta apuesta es la contraria: ningún equipo marcará gol.',
    inner: [
      {
        h3: 'Apuesta Ganador del partido',
        p: 'Una de las apuestas más clásicas, en la que se apuesta qué equipo será el ganador a final del partido, o bien si habrá empate. Es la típica apuesta de las quinielas (1×2). Cada opción tiene un 33,3% de posibilidades sin tener en cuenta las cuotas.',
      },
      {
        h3: 'Apuesta Ganador al descanso',
        p: 'Lo mismo que en la apuesta de ganador a final de partido, pero en esta modalidad de apuesta deportiva se apuesta quién será el ganador del final de la primera parte. Debido a que la duración es menor, las cuotas para local y visitante son más altas respecto al empate',
      },
      {
        h3: 'Apuesta Descanso/Final',
        p: 'Existe un tipo de mercado de apuesta deportiva que es una combinación de las dos primeras. Es decir, se apuesta a quién será el ganador a mitad de partido y quién lo será al final del mismo, combinando dos pronósticos en uno.',
      },
      {
        h3: 'Apuesta Ambos equipos marcan',
        p: 'Esta es una apuesta sencilla con un 50% de probabilidades, donde lo que se apuesta es o bien que los dos equipos marcarán por lo menos un gol (que los dos terminan con goles a favor y en contra) o que no marcarán ambos.',
      },
    ],
  };

  const como_ganar = {
    id: 'como_ganar',
    h2: 'Cómo ganar apuestas deportivas: Estrategias populares',

    inner: [
      {
        h3: 'Apuesta Doble oportunidad',
        p: [
          'Con rivales muy parecidos a veces resulta complicado pronosticar el resultado. En estos casos se puede apostar doble, de manera que en lugar de elegir entre «local, visitante o empate», se apuesta a dos de estas tres variables.',
        ],
      },
      {
        h3: 'Apuesta Total goles',
        p: [
          'Las apuestas sobre el total son un tipo de apuesta sobre el total de goles que se darán en un encuentro. Las casas de apuestas ponen una línea/valor numérico, y ofrecen a sus usuarios la posibilidad de apostar a que habrá más o menos puntos/goles/rondas que ese número.',
          'La línea de goles más habitual en fútbol es 2.5, ofreciendo la opción de apostar a más o menos de 2.5 goles. Esto significa que estaremos apostando a que se anotan 2 o menos goles (0, 1 o 2) o por el contrario a 3 o más goles (3, 4, 5, 6...).',
          'También se ofrecen apuestas a más/menos de 0.5 goles, 1.5 goles, 3.5 goles... La razón de que se utilicen esos números con decimal es simplemente para simplificar y hacerlo más fácil.',
        ],
      },
    ],
  };

  const conoce = {
    id: 'conoce',
    h2: 'Conoce las Cuotas (Momios)',
    p: [
      'Las cuotas pueden parecer difíciles de entender, pero, en realidad, son un cálculo utilizado para determinar cuánto ganarás en cada apuesta según la probabilidad de que se produzca un determinado evento',
      'Las cuotas de fútbol suelen ser un número que se puede multiplicar por la cantidad apostada para determinar lo que vas a ganar. Por ejemplo, si ves una cuota de 2,5 y apuestas 100 €, tus ganancias serán de 2,5 x 100 € (lo que equivale a un total de 250 €), por lo que tendrás unas ganancias totales de 150 € una vez restada la apuesta original.',
      'Las cuotas suelen variar según la casa de apuestas, ya que cada una tiene sus propios modelos y hace sus propias predicciones de apuestas de fútbol.',
    ],
  };

  const como_hacer = {
    id: 'como_hacer',
    h2: '¿Cómo hacer tus propios pronósticos de apuestas de fútbol?',
    p: 'Hacer pronósticos precisos sobre apuestas de fútbol implica hacer cálculos e investigar. Ninguna bola de cristal mágica revela el ganador. Es necesario dedicarle un poco de tiempo y esfuerzo, pero, una vez que analices y entiendas las estadísticas, tendrás muchas más probabilidades de realizar un pronóstico acertado.',
    p2: 'Antes de comenzar a hacer números, debes consultar las probabilidades establecidas por las casas de apuestas. Este es el mejor indicador que te ayudará a saber en qué debes centrarte. Comparar las probabilidades te ayudará a descartar opciones y saber cuál es la mejor vía para ganar la mayor cantidad de dinero.',
  };

  const consejos = {
    id: 'consejos',
    h2: 'Consejos de Codere para apuestas de fútbol',
    p: 'A diferencia de muchas otras formas de juego, la posibilidad de ganar en apuestas de fútbol se incrementa si eres un investigador y estratega hábil. Por supuesto, siempre corres el riesgo de que surjan contratiempos, pero los juegos de azar serían aburridos si no existiera ese riesgo. Aquí tienes varios consejos que te ayudarán a aumentar tus posibilidades de realizar una apuesta para ganar.',
    inner: [
      {
        h3: 'Conoce el estado de ánimo de los equipos',
        p: 'Hay muchos factores que pueden afectar al rendimiento de un equipo, pero la moral y la motivación son dos de los mejores indicadores de cómo jugará un equipo. Mantente al día con las noticias de la organización. ¿Está el equipo jugándose el estar o no en una final? ¿Han fichado recientemente a un nuevo jugador? ¿Hay algún problema fuera del campo? Si te haces estas preguntas, podrás tomar mejores decisiones.',
      },
      {
        h3: 'Consulta los partidos anteriores en los que se enfrentaron ambos equipos',
        p: 'El pasado puede ser un excelente indicador de lo que sucederá en el futuro. Por ello, consultar los resultados y las estadísticas anteriores te ayudarán a juzgar el rendimiento de un equipo.',
      },
      {
        h3: 'Ten en cuenta si el equipo juega en casa o fuera',
        p: 'El rendimiento de un equipo puede varias considerablemente en función de si es el equipo local o el equipo visitante. El rendimiento de muchos equipos es mejor en casa que fuera. Ahora que ya conoces los conceptos básicos de las apuestas de fútbol, ¡es hora de realizar tus apuestas!',
      },
    ],
  };

  const table_list = [
    {
      title: 'Realiza tus apuestas sobre el deporte rey',
      id: 'realiza',
    },

    {
      title: '¿Cómo empezar a realizar apuestas deportivas de fútbol?',
      id: 'como_empezar',
    },
    {
      title: 'Resumen de los diferentes tipos de apuestas',
      id: 'resumen',
    },
    {
      title: 'Cómo ganar apuestas deportivas: Estrategias populares',
      id: 'como_ganar',
    },
    {
      title: 'Conoce las Cuotas (Momios)',
      id: 'conoce',
    },
    {
      title: '¿Cómo hacer tus propios pronósticos de apuestas de fútbol?',
      id: 'como_hacer',
    },
    {
      title: 'Consejos de Codere para apuestas de fútbol',
      id: 'consejos',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/cuotas-deportivas/apuestas-futbol'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        {/* <script type='application/ld+json'>{JSON.stringify(json)}</script> */}
      </Helmet>

      <Floating text='apostar al fútbol' />

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
          <Fade triggerOnce>
            <h1 className='header'>{top_par.h1}</h1>
          </Fade>
          <p>
            Bienvenidos a Codere, la mejor casa de <NavLink to='/'>apuestas deportivas</NavLink> de
            España. Codere pone a tu disposición la plataforma Online más completa para que apuestes
            en partidos de fútbol de varias ligas de todo el mundo.{' '}
            <a
              href='https://m.apuestas.codere.es/deportes/#/HomePage'
              rel='nofollow'>
              Aquí verás todos las estadísticas de apuestas
            </a>{' '}
            y los resultados de los encuentros de fútbol{' '}
            <strong>¡Consulta las probabilidades, haz tus apuestas y gana!</strong>
          </p>
          <p>{top_par.p}</p>

          {!props.flag ? <TableOfContents table={table_list} /> : <></>}
          <br />

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
            id={apuestas.id}>
            <h2>{apuestas.h2}</h2>
            <p>{apuestas.p}</p>
            <p>{apuestas.p2}</p>
          </div>

          <div
            className='mt-3'
            id={como_realizar.id}>
            <h2>{como_realizar.h2}</h2>
            {como_realizar.p.map((pi, k) => (
              <p key={k}>{pi}</p>
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
            className='mt-4'
            id={resumen.id}>
            <h2>{resumen.h2}</h2>
            <p>{resumen.p}</p>
            <Accordion>
              {resumen.inner.map((inn, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k}>
                  <Accordion.Header as='h3'>{inn.h3}</Accordion.Header>
                  <Accordion.Body>{inn.p}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <p>{resumen.p2}</p>
          </div>

          <div id={como_ganar.id}>
            <h2>{como_ganar.h2}</h2>
            {como_ganar.inner.map((inn, i) => (
              <div key={i}>
                <h3>{inn.h3}</h3>
                {inn.p.map((pi, j) => (
                  <p key={j}>{pi}</p>
                ))}
              </div>
            ))}
          </div>

          <Fade
            duration={1000}
            triggerOnce>
            <LazyLoadImage
              src={prefix + '3' + jpg}
              width='100%'
            />
          </Fade>
          <div
            id={conoce.id}
            className='mt-4'>
            <h2>{conoce.h2}</h2>
            {conoce.p.map((pi, k) => (
              <p key={k}>{pi}</p>
            ))}
          </div>

          <div id={como_hacer.id}>
            <h2>{como_hacer.h2}</h2>
            <p>{como_hacer.p}</p>
            <p>{como_hacer.p2}</p>
          </div>
          <div id={consejos.id}>
            <h2>{consejos.h2}</h2>
            <p>{consejos.p}</p>
            <Accordion>
              {consejos.inner.map((inn, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k}>
                  <Accordion.Header as='h3'>{inn.h3}</Accordion.Header>
                  <Accordion.Body>{inn.p}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <p
            style={{
              color: '#fff',
              margin: 'auto',
              textAlign: 'center',
              fontSize: '35px',
              fontWeight: 600,
              lineHeight: 1,
              // width: '75%',
            }}>
            La pasión de apostar a tus deportes favoritos en un solo lugar
          </p>
        </Container>
      </div>
    </>
  );
}
