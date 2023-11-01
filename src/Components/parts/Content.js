import { Zoom } from 'react-awesome-reveal';
import { Accordion, Table } from 'react-bootstrap';
// import React from 'react';
import { NavLink } from 'react-router-dom';

var questions = [
  '¿Cómo puedo crear una cuenta?',
  '¿Dónde puedo mirar los pronósticos?',
  '¿Cómo puedo ver el estado de mis apuestas?',
  '¿Cuáles son los tipos de apuestas?',
];
var answers = [
  'Deberás pinchar en la pestaña “Registrarse” para escribir tus datos personales (datos del DNI), datos de contacto y datos de usuario con los que crear tu perfil. Recuerda que para poder optar a promociones deberás estar registrado de más de 30 días y tener los documentos verificados.',
  'Antes de realizar tus apuestas deportivas en Codere, tienes la opción de ayudarte con nuestras estadísticas o pronósticos. Pincha en el evento deportivo sobre el que quieras apostar y entra a uno de los partidos. Una vez dentro, verás que se abrirá un panel lateral con todo tipo de ayudas. Contarás con información sobre ambos equipos, el estadio donde se juega, horas que quedan para el inicio, árbitro, goles marcados esta temporada, máximos goleadores, etc. Además, habrá otras pestañas en la que podrás ver los enfrentamientos anteriores entre ambos, la probabilidad de victoria de cada uno, la clasificación y las alineaciones probables en el caso del fútbol.',
  'Cuando realizas una apuesta deportiva en Codere esta se sitúa en el apartado “Mis apuestas”. Esto se encuentra entrando en tu perfil de usuario de Codere, pinchando en la pestaña te aparecerán todas tus apuestas y el estado en el que se encuentran: pendientes, ganadas o perdidas.',
  'Existen infinidad de mercados para realizar apuestas deportivas. Pero por encima de todos hay unos cuantos que son los más usados por parte de los usuarios de Codere. Entre ellos destacan: Ganador del partido, Más o menos goles, Primer equipo en marcar, Goleadores, Hándicap e incluso mercados especiales para apostar al ganador de una competición.',
];

function Content() {
  return (
    <div className='content-container container'>
      <h1 className='bottomContentTitle'>
        ¡Bienvenido a la mejor Casa de Apuestas Deportivas en Línea de España!
      </h1>
      <p>
        En Codere vas a encontrar cantidad de apuestas deportivas seguras para hoy, mañana o dentro
        de un mes. ¡No importa! En línea tendrás a tu disposición una amplia gama de deportes en los
        que podrás colocar tus apuestas online
      </p>

      <nav className='row apuestas'>
        <div className='col'>
          <NavLink to='/cuotas-deportivas/apuestas-futbol'>Apuestas de fútbol</NavLink>
        </div>
        <div className='col'>
          <NavLink to='/cuotas-deportivas/apuestas-baloncesto'>Apuestas de baloncesto</NavLink>
        </div>
        <div className='col'>
          <NavLink to='/cuotas-deportivas/apuestas-tenis'>Apuestas Tenis</NavLink>
        </div>
        <div className='col'>
          <NavLink to='cuotas-deportivas/apuestas-ciclismo'>Apuestas de Ciclismo</NavLink>
        </div>
        <div className='col'>
          <NavLink to='/cuotas-deportivas/apuestas-formula1'>Apuestas F1</NavLink>
        </div>
        <div className='col'>
          <NavLink to='/cuotas-deportivas/apuestas-ufc'>Apuestas UFC</NavLink>
        </div>
      </nav>

      <div className='row'>
        <div className='col-12 col-sm-4 left-col'>
          <Zoom triggerOnce>
            <h2 className='bottomContentSubTitle'>Tips de apuestas deportivas en Codere</h2>
            <p className='bottomContentText'>
              Todo apostador novato necesita aprendizaje para convertirse en un experto, como los
              que vemos por redes sociales o televisión. Pero, ¿cómo llegar a ese nivel? Desde
              luego, no hay que tener prisa ni obsesionarse y, de hecho, podemos resumir unos
              cuantos tips de apuestas deportivas que pueden ayudaros a ganar dinero con una apuesta
              deportiva, hacer apuestas seguras y, sobre todo, conformar vuestra propia estrategia
              de apuestas deportivas personalizada sólo para nosotros.
            </p>

            <h3 className='bottomContentSubTitle'>Entender a los equipos</h3>
            <div className='bottomContentText'>
              <p>
                ¿Cómo ganar en apuestas deportivas en línea? El primer paso es definir una
                estrategia bien ordenada y con un objetivo final. Y como el objetivo es obtener el
                mayor beneficio posible en forma de ganancias, lo primero que tendremos que hacer es
                obtener un conocimiento lo más profundo posible del deporte o deportes a los que
                queramos apostar.
              </p>
              <p>
                Y entender el deporte consiste, básicamente, en entender a los equipos: ¿Es el
                equipo al que vas a apostar ofensivo o defensivo? ¿Está pasando por una buena racha?
                ¿Recibe muchos goles en contra? ¿Cómo se comporta en las distintas partes de un
                encuentro? Todos estos son números que uno tiene que tener en su cabeza a la hora de
                establecer probabilidades generales en función de los mercados de apuesta que vaya a
                escoger.
              </p>
              <p>
                No es lo mismo, por ejemplo, hacer una apuesta a favor de un equipo que está
                teniendo una mala racha de resultados, que al revés; como tampoco lo es saber si se
                trata de un partido normal de Liga, una eliminatoria en la que uno de los dos
                equipos será ganador y el otro no, o no digamos ya una final; la actitud de los
                equipos cambia considerablemente.
              </p>
              <p>
                Aprende a dar valor a todas estas posibilidades y estarás mucho más cerca de una
                apuesta segura.
              </p>
            </div>
          </Zoom>
        </div>
        <div className='col-12 col-sm-4 middle-col'>
          <Zoom triggerOnce>
            <h3 className='bottomContentSubTitle'>Conocer tus probabilidades</h3>
            <div className='bottomContentText'>
              <p>
                Pero claro, nadie como tú sabe cuánto puedes gastar en una apuesta, o qué mercados
                de apuestas deportivas se te dan mejor o peor; Conocerte a ti mismo también es
                fundamental a la hora de controlar los máximos parámetros posibles y tener más
                posibilidades de ganar.
              </p>
              <p>
                Sólo dominando ambos aspectos podrás definir una buena estrategia para apostar
                online, permitiéndote disfrutar de esta práctica de la forma más sostenible posible.
              </p>
            </div>
            <h3 className='bottomContentSubTitle'>Aprender las estrategias</h3>
            <div className='bottomContentText'>
              <p>
                Imaginemos que buscas apuestas deportivas seguras para hoy. ¿Cómo saber cuáles
                escoger, y cuánto apostar en cada una? Como ya hemos dicho, nadie como uno mismo se
                conoce y sabe cuáles son sus puntos fuertes y débiles a la hora de apostar.
              </p>
              <p>
                Hay cantidad de estrategias de apuestas deportivas prestablecidas que se pueden
                aprender. Sin embargo, la mejor estrategia no es otra que la que uno mismo va
                moldeando con el paso del tiempo, la experiencia obtenida y los errores cometidos.
                Sólo de este modo sabrás cuánto dinero puedes gastar en según qué eventos o
                deportes, o qué mercados son los más adecuados para cada situación.
              </p>
            </div>
            <h2 className='bottomContentSubTitle'>Casino Online de Codere – Lo mejor en España</h2>
            <div className='bottomContentText'>
              <p>
                En Codere, tenemos a disposición de nuestros usuarios el mejor{' '}
                <a href='/casino'>casino online</a> de España, con una amplia cantidad de juegos de
                casino como <a href='/casino/ruleta'>ruleta online</a>, ruleta en vivo,{' '}
                <a href='/casino/blackjack'>blackjack</a> o <a href='/casino/slots'>slots</a> de
                marcas tan reconocidas como Playtech o Netent.
              </p>
              <p>
                Sumérgete en el Casino online de Codere y navega por sus distintas secciones de
                juegos como si estuvieses en tu plataforma preferida de Streaming en la televisión.
                Con grandes Jackpots y los títulos más populares, el Casino online de Codere no
                tiene nada que envidiar al de otras casas de apuestas deportivas y, por supuesto,
                absolutamente nada a los Casinos tradicionales y presenciales.
              </p>
            </div>
          </Zoom>
        </div>
        <div className='col-12 col-sm-4 right-col'>
          <Zoom triggerOnce>
            <h2 className='bottomContentSubTitle'>Consejos para apuestas online</h2>
            <div className='bottomContentText'>
              <p>
                El juego de las apuestas deportivas exige que juguemos de manera responsable. Pero,
                ¿cómo establecer un sistema de apuestas que realmente funcione a la hora de jugar
                seguro? Definimos los consejos tipo más importantes:
              </p>
              <p>
                Nunca gastes lo que no tienes. Establece un presupuesto máximo para jugar al día, a
                la semana o al mes, y usa sólo cantidades que no te supongan un problema para el día
                a día. ¿El mejor consejo? Da ese dinero por perdido incluso antes de empezar a
                jugar. Si a pesar de ello nunca te va a faltar para tus necesidades básicas de
                manutención o higiene, entonces lo estarás haciendo bien
              </p>
              <p>
                No trates de recuperar pérdidas. Perder es una parte normal de las apuestas
                deportivas. Igual que ganar. Por eso, cuando enganches varias apuestas sin hacerlo,
                no desesperes, y no empieces a gastar tu saldo a lo loco para intentar volver a
                donde estabas al principio. Apostarás sin cabeza y, lo más probable, es que acabes
                perdiéndolo todo.
              </p>
              <p>
                No apuestes a lo que no sabes. ¿Te gustan sólo las apuestas deportivas de fútbol?
                Entonces, no apuestes a baloncesto; ¿Controlas de NBA pero no de Euroliga? Pues
                apuesta sólo a aquellos tipos de apuestas que conoces. De ese modo, evitarás
                pérdidas
              </p>
              <p>
                No fuerces tus apuestas. ¿Qué un día no hay apuestas a deportes que dominas? Tu
                siguiente apuesta puede esperar un día más. No hay que tener ansia.
              </p>
              <p>
                La información es poder. Tal y como ya hemos dicho: conocer a los equipos, saber sus
                objetivos, conocerte a ti mismo y saber algunas estrategias básicas harán de ti
                alguien que, como poco, no va a ser vulnerable a cualquier aspecto burdo del azar a
                la hora de apostar. Si pierdes, pierde porque tenía que pasar, pero no lo pongas
                fácil.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
      <Table
        striped
        bordered
        hover
        variant='dark'
        className='mb-4'>
        <tbody>
          <tr>
            <td>🏆 Inicio de operaciones</td>
            <td>2008</td>
          </tr>
          <tr>
            <td>⚽ Apuestas Deportivas</td>
            <td>Apuestas fútbol, Apuestas tenis, Apuestas baloncesto y más</td>
          </tr>
          <tr>
            <td>🎲 Licencia</td>
            <td>
              Licencias otorgadas por la DGOJ: 225-11/GA/A86346038/SGR, AOC/2014/002, ADC/2014/001,
              AHC/2014/002, 223-11/GO/ A86346038/SGR, MAZ/2015/032,RLT/2016/009, BLJ/2016/007.
            </td>
          </tr>
          <tr>
            <td>✔️ Moneda</td>
            <td>EUR</td>
          </tr>
          <tr>
            <td>💰 Depósito mínimo</td>
            <td>10€</td>
          </tr>
        </tbody>
      </Table>

      <section>
        <h2 className='bottomContentTitle'>
          Preguntas frecuentes sobre Apuestas deportivas en España
        </h2>
        <Accordion className='content-accordion'>
          {answers.map((answer, index) => {
            return (
              <Accordion.Item
                key={index}
                eventKey={index}>
                <Accordion.Header as='h3'>{questions[index]}</Accordion.Header>
                <Accordion.Body>
                  <p>{answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
}

export default Content;
