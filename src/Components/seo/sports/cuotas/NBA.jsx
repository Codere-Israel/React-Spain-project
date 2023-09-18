import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import { Accordion, Container, Image, ListGroup, Placeholder, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function NBA(props) {
  const title = 'Apuestas de Baloncesto » con las mejores cuotas | Codere®';
  const description =
    'Codere España le ofrece las mejores apuestas deportivas online para baloncesto. Aquí encontrarás información si apenas estás incursionando.';

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
        name: '¿Cómo ganar apuestas en baloncesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La mejor manera de ganar apuestas en baloncesto es estando atento de las estadísticas presentes en la web de Codere, que te darán las mejores claves y ayudas para apostar en previos a los partidos. Además, si eres de los que les gusta apostar en directo, la mejor manera es viviendo los encuentros mientras ocurren, para poder tener las principales claves de lo que está ocurriendo en ese momento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el hándicap en las apuestas de baloncesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El hándicap en baloncesto es darle una ventaja o desventaja en puntos a uno de los equipos. En base a esa condición, habría que apostar a cuál de los dos clubes gana el partido.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo hacer apuestas en baloncesto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para realizar apuestas en baloncesto tienes que entrar en Codere.es, en la sección de baloncesto. Ahí encontrarás los mejores partidos que se están disputando en directo, al igual que los que se jugarán horas después. La decisión de que apostar la tienes tú.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tipos de apuestas de baloncesto existen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1.	Ganador del partido: Apostar al equipo que se llevará la victoria.2.	Hándicap: Ventaja o desventaja de puntos de un equipo para ganar el partido.3.	Más o menos puntos: Hay dos tipos. La normal en la que apuestas a más o menos puntos de un número cerrado. También existe la alternativa, en la que tienes más opciones si quieres complicar un poco más tu decisión.4.	Total puntos más o menos local/visitante: En este mercado puedes apostar a si uno de los dos equipos consigue más o menos puntos de la elección que te de Codere. Hay otra elección en la que además de apostar a más o menos puntos, se le suma la elección del ganador del encuentro.5.	Total puntos par o impar: Apostar si el partido acabará con un número par de puntos o impar.6.	Primer equipo en marcar X puntos: Tu elección se basará en decidir qué equipo logra primero X puntos. La decisión puede ser en el primero que llegue a 10, 15, 20, 25 o 30 puntos.',
        },
      },
    ],
  };

  const top_par = {
    h1: 'Encesta con Codere y Apuesta en baloncesto en',
    p: 'Codere te ofrece las mejores apuestas de baloncesto a nivel mundial. Entre nuestros eventos cubrimos todo tipo de partidos de relevancia, con las cuotas más competitivas del mercado. Disponemos de las mejores apuestas para ligas nacionales, como la ACB, y a la Euroliga. Además, tenemos también el evento deportivo más importante dentro del mundo del baloncesto, la NBA. ¡No te pierdas nuestros pronósticos de NBA!',
  };
  const mayores = {
    id: 'mayores',
    h2: 'Los mayores eventos de baloncesto',
    p: 'En Codere podrás disfrutar de los mejores eventos de baloncesto. Desde competiciones nacionales, a los mejores eventos internacionales. Entre los principales podemos encontrar:',
    ul: [
      {
        bolded: 'ACB:',
        text: 'La liga más importante en España se encuentra en Codere en dónde podrás apostar con las mejores cuotas para Real Madrid, Barcelona Basket, Baskonia y mucho más.',
      },
      {
        bolded: 'NBA:',
        text: 'Si hay una liga puntera en el mundo del baloncesto esa es la NBA. Los mejores equipos de Estados Unidos, con los mejores jugadores del mundo, se encuentran en una liga con más de 82 partidos, sin olvidarnos del play-off. Doncic, Lebron, Curry y todas las estrellas buscan el ansiado anillo de campeón. Además también podrás apostar al maravilloso campeonato universitario de Estados Unidos.',
      },
      {
        bolded: 'EuroLiga:',
        text: 'La máxima competición de clubes en Europa se encuentra en Codere. Dieciocho equipos en busca de coronarse como el mejor del continente. Sin duda, un evento apetecible para apostar.',
      },
    ],
  };

  const equipos = {
    id: 'equipos',
    h2: 'Los equipos favoritos de baloncesto',
    p: 'La pasión de los aficionados por los mejores equipos de baloncesto es inmensa. Pero no todos son los mejores. Aquí te dejamos los equipos más destacados en Codere:',
    ul: [
      {
        bolded: 'Dallas Mavericks:',
        text: 'Con la llegada de Doncic a la NBA, los Mavericks han visto aumentar su crecimiento dentro de las apuestas en España. Uno de los favoritos de la NBA.',
      },
      {
        bolded: 'Los Ángeles Lakers:',
        text: 'Los actuales campeones de la NBA son la franquicia más querida en nuestro país. Un equipo construido para ganar y que cuenta con el ‘Rey’ del baloncesto, el gran Lebron James.',
      },
      {
        bolded: 'Golden State Warriors:',
        text: 'Entre los equipos que más han visto aumentar su crecimiento se encuentran los Warrios. Capitaneados por Curry, el mejor triplista del mundo, la franquicia es uno de los favoritos actualmente.',
      },
      {
        bolded: 'Boston Celtics:',
        text: 'Su historia dentro de la NBA le hace ser uno de los favoritos para muchos apostados. Su rivalidad con Lakers, un interés más dentro de la NBA.',
      },
      {
        bolded: 'Brooklyn Nets:',
        text: 'La gran superpotencia esta temporada. Irving, Durant, Harden y mucho más para ser uno de los favoritos a llevarse el anillo de la NBA.',
      },
    ],
  };

  const como_apostar = {
    id: 'como_apostar',
    h2: 'Como apostar al baloncesto en Codere',
    p: 'Lo primero que tienes que hacer antes de comenzar a apostar a baloncesto es entrar en Codere.es. Ahí encontrarás los mejores eventos disponibles de este deporte. Hacer una apuesta significa escoger un supuesto que creas que vaya a ocurrir en el partido y decidir cuánto dinero vamos a gastar dentro del sistema de cuotas existentes.',
    p2: 'Estas cuotas nos informan de la probabilidad existente de que ocurra un supuesto o no. Cuanto más alta es la cuota, más improbable. Estas cuotas nos ayudarán a determinar la cantidad de dinero ganada en el caso de realizar esa apuesta.',
  };

  const consejos = {
    id: 'consejos',
    h2: 'Consejos a la hora de apostar al baloncesto',
    p: 'Antes de comenzar a apostar a cualquier evento de baloncesto, aprovéchate de las estadísticas de Codere. Unas estadísticas que te ayudarán a saber cómo llegan ambos equipos, los enfrentamientos, la racha de victorias y mucho más. Algo que te ayudará a tener mucho más clara tu elección.',
    p2: 'Pero recuerda: para poder aprovecharte de estas estadísticas debes estar registrado desde hace más de 30 días y tener tu cuenta verificada.',
  };

  const favorito = {
    id: 'favorito',
    h2: 'Baloncesto Español favorito',
    p: 'El baloncesto en España es uno de los deportes más seguidos y jugados del país. Una pasión que ha ido en aumento con los recientes éxitos de la selección, sumados a los logros individuales de nuestros jugadores. Dentro de nuestro país existen varios equipos que se han ganado el respeto del resto:',
    ul: [
      {
        bolded: 'Real Madrid',
        text: 'Sin duda el equipo más grande de España. Un club que ya ha demostrado ser el más fuerte de nuestro país, no solo en la ACB, sino también en la EuroLiga.',
      },
      {
        bolded: 'Barcelona',
        text: 'Pero para ser el mejor tienes que tener un máximo rival, y ese es el papel de los blaugranas. Con una de las plantillas más potentes de Europa, los culés se consagran como uno de los equipos favoritos.',
      },
      {
        bolded: 'Baskonia',
        text: 'Otro de los grandes de España. Con un puesto asegurado en la Euroliga por licencia, es una de las grandes potencias que se siguen en los torneos continentales.',
      },
      {
        bolded: 'Valencia Basket',
        text: 'Campeón de la Eurocup en la temporada 2018-2019, el Valencia Basket es uno de los grandes de España. Siendo partícipe en la Euroliga, el Valencia es el único equipo con representación en la máxima liga tanto en masculino como femenino.',
      },
      {
        bolded: 'Hereda San Pablo Burgos',
        text: 'Por segundo año consecutivo, el Burgos ha logrado levantar el título de la Liga de Campeones. Un equipo modesto que poco a poco se está consolidando como un grande de nuestro país.',
      },
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre las apuestas de Baloncesto',
    inner: [
      {
        h3: '¿Qué es el hándicap en las apuestas de baloncesto?',
        p: 'El hándicap en baloncesto es darle una ventaja o desventaja en puntos a uno de los equipos. En base a esa condición, habría que apostar a cuál de los dos clubes gana el partido.',
      },
      {
        h3: '¿Cómo hacer apuestas en baloncesto?',
        p: 'Para realizar apuestas en baloncesto tienes que entrar en Codere.es, en la sección de baloncesto. Ahí encontrarás los mejores partidos que se están disputando en directo, al igual que los que se jugarán horas después. La decisión de que apostar la tienes tú.',
      },
      {
        h3: '¿Qué tipos de apuestas de baloncesto existen?',
        p: 'Ganador del partido: Apostar al equipo que se llevará la victoria. Hándicap: Ventaja o desventaja de puntos de un equipo para ganar el partido. Más o menos puntos Hay dos tipos. La normal en la que apuestas a más o menos puntos de un número cerrado. También existe la alternativa, en la que tienes más opciones si quieres complicar un poco más tu decisión. Total puntos más o menos local/visitante: En este mercado puedes apostar a si uno de los dos equipos consigue más o menos puntos de la elección que te de Codere. Hay otra elección en la que además de apostar a más o menos puntos, se le suma la elección del ganador del encuentro. Total puntos par o impar: Apostar si el partido acabará con un número par de puntos o impar. Primer equipo en marcar X puntos: Tu elección se basará en decidir qué equipo logra primero X puntos. La decisión puede ser en el primero que llegue a 10, 15, 20, 25 o 30 puntos.',
      },
    ],
  };

  const table_list = [
    {
      title: 'Los mayores eventos de baloncesto',
      id: 'mayores',
    },
    {
      title: 'Los equipos favoritos de baloncesto',
      id: 'equipos',
    },
    {
      title: 'Como apostar al baloncesto en Codere',
      id: 'como_apostar',
    },
    {
      title: 'Consejos a la hora de apostar al baloncesto',
      id: 'consejos',
    },
    {
      title: 'Baloncesto Español favorito',
      id: 'favorito',
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
          href='https://www.codere.es/cuotas-deportivas/apuestas-baloncesto'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text='Da tu mejor tiro y encesta' />

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
            <h1 className='header  mt-4'>{top_par.h1}</h1>
            <p>{top_par.p}</p>

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

            <div id={equipos.id}>
              <h2>{equipos.h2}</h2>
              <p>{equipos.p}</p>
              <ul>
                {equipos.ul.map((li, k) => (
                  <li key={k}>
                    <strong>{li.bolded}</strong> {li.text}
                  </li>
                ))}
              </ul>
            </div>

            <LazyLoadImage
              src={prefix + '1' + jpg}
              width='100%'
            />

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

            <LazyLoadImage
              src={prefix + '2' + jpg}
              width='100%'
            />

            <div
              id={favorito.id}
              className='mt-4'>
              <h2>{favorito.h2}</h2>
              <p>{favorito.p}</p>
              <ul>
                {favorito.ul.map((li, k) => (
                  <li key={k}>
                    <strong>{li.bolded}</strong> {li.text}
                  </li>
                ))}
              </ul>
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
