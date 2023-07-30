import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, Container, NavLink, Row, Table } from 'react-bootstrap';
import TableOfContents from '../TableOfContents';
import games from './JSON/games.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Floating from '../Floating';

const Slots = (props) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo ganar en las slots?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para ganar en las slots deben coincidir varias veces el mismo símbolo en una sola línea de pago para llevarse así el premio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo jugar a las slots?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Elige la tragaperras online que prefieras y ábrela en tu dispositivo. Elige la cantidad que desees apostar y a cuántas líneas de pago quieres jugar. Utiliza el botón de “Apuesta Máxima” si quieres jugar en todas las líneas a la vez. Dale a “girar” para que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si optas por hacerlo, puedes ganar premios aún mayores.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué son las líneas en las tragaperras? ',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca una combinación de símbolos determinada por el desarrollador de la slot.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el RTP en las máquinas tragaperras?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Detrás de estas tres letras se esconde el término inglés “return to player rate”, que en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del dinero jugado a largo plazo en todas tus apuestas en una tragaperras. Es un dato que deberíamos tener en cuenta a la hora de decidirnos por una slot u otra.',
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: '¿Cómo jugar a las tragaperras online?',
      id: 'anchor1',
    },
    {
      title: 'Las mejores slots online están en Codere',
      id: 'anchor2',
    },
    {
      title: 'Tipos de máquinas tragaperras online',
      id: 'anchor3',
    },
    {
      title: 'Preguntas frecuentes sobre las slots',
      id: 'anchor4',
    },
  ];

  return (
    <>
      <Helmet>
        <title> Slots en Línea » Juega Tragaperras en España | Codere®</title>

        <meta
          name='description'
          content='Los Slots son de lo más emocionante en el casino online de Codere España. Diviértete jugando en maquinas tragamonedas desde tu móvil u ordenador.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/slots'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      {/* End of SEO block */}

      <Floating
        text='¡Las mejores Slots!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/slots/Slots${
            props.flag ? 'Mobile' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='row mb-2 mt-3'>
          <div className='col-12'>
            <h1 className='PageH1TitleSeoPages923'>
              ¡Juega Slots en Codere! las mejores máquinas tragaperras de España{' '}
            </h1>
          </div>
        </div>

        <p className='text982T'>
          El mejor Casino online del mundo te está esperando en Codere. En él podrás encontrar las
          mejores slots del mercado con las temáticas más divertidas del mundo. Ya no tendrás que
          preocuparte por sacar tiempo para acudir a tu casino más cercano ya que ahora podrás jugar
          a una gran variedad de las conocidas como máquinas tragaperras desde cualquier dispositivo
          (móvil, app de Codere o desde tu ordenador).
        </p>
        <p className='text982T'>
          Cada juego de slot o maquinita tragaperras que encuentres en nuestro casino en línea
          contará con un conjunto único de líneas de pago. Para ganar, deberás hacer coincidir un
          símbolo concreto en una de estas líneas, así de sencillo. Elige entre la gran variedad de
          opciones de juegos de máquinas tragamonedas en Codere.
        </p>

        {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

        <Row className='casino-row'>
          {games.slots.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
            <Col
              lg={2}
              md={4}
              xs={6}
              key={k}>
              <NavLink href={game.link}>
                <div className='cas-game-wrapper'>
                  <LazyLoadImage
                    className='casino-game-img shining'
                    src={game.img}
                  />
                  <div className='hvr'>
                    <p>{game.name}</p>
                    <LazyLoadImage src='https://www.codere.bet.ar/assets/seo/jackpotsPlayHoverLogo.svg' />
                  </div>
                </div>
              </NavLink>
            </Col>
          ))}
        </Row>

        <a name='anchor1'></a>
        <Accordion>
          <Accordion.Item
            className='accordionT454'
            eventKey='0'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              ¿Cómo jugar a las tragaperras online?
            </Accordion.Header>

            <Accordion.Body className='accordionBody text982T'>
              <p className='text982T'>
                Antes de arrancar en el magnífico mundo de los juegos de slot en línea vas a querer
                entender cómo funcionan. Las máquinas clásicas de slots cuentan con tres carretes y
                tres filas, pero esto puede llegar a variar ampliamente cuando estés jugando a las
                slots online, debido a los diferentes tipos que puedes encontrar.
              </p>
              <p className='text982T'>
                Cada máquina tragaperras cuenta con un conjunto único de líneas de pago. Deben
                coincidir varias veces el mismo símbolo en una sola línea de pago para que los
                jugadores de slot puedan ganar. Las líneas de pago no siempre corren en una línea
                recta ya que a veces se deslizan a través de los carretes.
              </p>
              <p className='text982T'>
                Las máquinas de slot contienen un conjunto único de símbolos los cuáles determinan
                el dinero que se gana cuando el mismo símbolo se muestra múltiples veces en una
                única línea de pago. Cada juego de tragamonedas contiene una tabla de pago que
                muestra la cantidad a pagar en modo de recompensa por cada símbolo.
              </p>
              <h3 className='PageH3TitleSeoPages923'>
                Juega a tus slots favoritos desde tu celular
              </h3>
              <p className='text982T'>
                Codere ya tiene su app. Podrás encontrarla en la Play Store de Android o en la App
                Store de Apple. Además, la app de Codere te permitirá jugar en el mejor casino
                online desde el sofá de tu casa, y disfrutar en tu móvil, en tu ordenador o desde
                una tablet.
              </p>
              <p className='text982T'>
                Comienza a disfrutar de la mejor app de Codere en dónde podrás encontrar la gran
                gama de slots que se encuentran en el Casino. Age of the Gods, Book of oz, la Casa
                de papel y muchos más slots que te están esperando en la app de Codere. Asi que no
                te lo pienses más, descárgate la app de Codere y disfruta ahora del mejor casino
                online del mundo.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h2 className='PageH2TitleSeoPages923'>
          Ventajas de jugar Slot o Máquinas tragamonedas en línea
        </h2>
        <p className='text982T'>
          Aunque las reglas básicas del juego no cambian en ninguna, existen grandes diferencias
          entre las slots online y las máquinas tragaperras. Una de las principales diferencias
          viene en la experiencia que tiene el usuario a la hora de jugar. En las máquinas
          tragaperras tradicionales, existe una interacción con la máquina a la hora de sentarse
          delante, introducir el dinero, darle al botón, escuchar el ruido de las máquinas. Algo que
          se ha perdido con las slots online.
        </p>
        <p className='text982T'>
          Otra de las diferencias existentes está en los carretes, filas y líneas de pago. En las
          tradicionales, los juegos contienen solo tres carretes y tres filas, mientras que en las
          online contienen por lo menos cinco carretes, aunque el número puede ser mayor dependiendo
          del juego específico. Desde que las slots online tienen más carretes, también cuentan con
          más líneas de pago, lo que significa que hay más maneras de ganar con cada giro que se
          haga.
        </p>
        <p className='text982T'>
          Adicional a los carretes de más, las máquinas de slot online también cuentan con muchos
          más temas interactivos. Estos juegos de slots de casino online combinan la emoción de las
          máquinas tragaperras, con gráficos en 3D y las historias inmersivas de los videojuegos.
        </p>

        <div className='col-12  RegistrateMobBtn mb-5 mt-5'>
          <a
            rel='nofollow'
            className='registrate-button  bottomContentPromoButton btn btn-primary'
            href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
            Regístrate
          </a>
        </div>

        <a name='anchor2'></a>
        <h2 className='PageH2TitleSeoPages923'>Las mejores slots online están en Codere</h2>
        <p className='text982T'>
          En Codere, podrás encontrar los mejores juegos para slots del mercado. Entre ellas
          destacan:
        </p>
        <Table
          striped
          bordered
          hover
          variant='dark'
          className='mb-6'>
          <tbody>
            <tr>
              <td>Juego de slot 🎰 </td>
              <td>Temática</td>
            </tr>
            <tr>
              <td>Age of the Gods </td>
              <td>Es una tragamonedas de Playtech basada en la mitología griega antigua.</td>
            </tr>
            <tr>
              <td>Book of oz: </td>
              <td>
                El camino de Dorothy hasta Ciudad Esmeralda es tortuoso pero mágico y ante el mago
                de Oz podrás encontrar toda la fortuna que estás buscando.
              </td>
            </tr>
            <tr>
              <td>La Casa de Papel </td>
              <td>
                Ayuda al profesor y a su banda con máscaras de Dalí a robar el Banco de España.
              </td>
            </tr>
            <tr>
              <td>Kingdoms Rise </td>
              <td>Lucha contra los dragones en esta slot de Playtech.</td>
            </tr>
            <tr>
              <td>Buffalo Blitz </td>
              <td>
                Ambientado en el lejano Oeste, ganarás interesantes premios gracias a los
                protagonistas de este juego: los búfalos.
              </td>
            </tr>
            <tr>
              <td>Chiquito </td>
              <td>Échate unas risas junto a ‘El Risitas’ en esta slot de lo más gánster.</td>
            </tr>
          </tbody>
        </Table>
        <a name='anchor3'></a>
        <Accordion>
          <Accordion.Item
            className='accordionT454'
            eventKey='0'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              Tipos de máquinas tragaperras online
            </Accordion.Header>
            <Accordion.Body className='accordionBody text982T'>
              <p className='text982T'>
                Existen hasta siete tipos de tragaperras. Aquí te dejamos los tipos:
              </p>
              <Accordion>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='0'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Máquinas tragamonedas Clásicas (3 rodillos)
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    Son las más sencillas: cada rodillo contiene una cantidad determinada de
                    símbolos, y cuando tres símbolos iguales se alinean, obtienes un jackpot.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='1'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    VideoTragaperras (5 rodillos o más)
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    Cada vez son más populares este tipo de tragaperras y el número máximo de
                    monedas, varía entre una o varias por cada línea de premio. La representación
                    gráfica puede ser de cinco rodillos completos, aunque lo más común es que
                    utilicen una pantalla de vídeo. Lo mejor de estas tragaperras es que al tener
                    más líneas de pago, las probabilidades de ganar son más altas que con las de
                    tres rodillos, y tus apuestas durarán más. Además, los jackpots también tienden
                    a ser mayores.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='2'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Tragamonedas con líneas de pago Múltiples
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    Mientras que las tragamonedas tradicionales sólo tienen una línea de pago (la
                    horizontal del centro), las tragaperras múltiples admiten múltiples
                    combinaciones de líneas de pago.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='3'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Tragamonedas Progresivas
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    También llamadas tragaperras con bote progresivo, son uno de los juegos de
                    casino más emocionantes. La única pega es que para poder optar al bote
                    progresivo (o bote acumulado,) normalmente tienes que jugar haciendo apuesta
                    máxima, por lo que tienes que tener en cuenta que la inversión necesaria para
                    jugar a este tipo de tragaperras tendrá que ser mayor que para una tragamonedas
                    normal y corriente.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='4'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Tragamonedas con Mini Juegos (i-Tragamonedas)
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    Este tipo de slots online son (en nuestra opinión) de los más divertidos.
                    También se las conoce como tragaperras con fase de bono. Además del juego
                    habitual de las tragaperras con los rodillos, ciertas jugadas activan las fases
                    de bono donde aparece un mini juego, en el que puedes multiplicar tus ganancias.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='5'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Tragamonedas 3D
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    Se denominan también tragaperras 3D, a todas aquellas tragamonedas online que
                    cuentan con gráficos y elementos tridimensionales en el juego. El diseño de este
                    tipo de slots online es muy variado. Se inspira en el cine, la cultura popular,
                    los videojuegos.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  className='accordionT454'
                  eventKey='6'>
                  <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                    Tragamonedas de Realidad Virtual
                  </Accordion.Header>
                  <Accordion.Body className='accordionBody text982T'>
                    La Realidad Virtual ya no es futuro, es el presente en todo tipo de juegos y
                    experiencias virtuales. Todo esto es gracias a una tecnología que opera con
                    cascos especiales como Oculus Rift, Razer OSVR, Sony Playstation VR, Samsung VR
                    entre otros. Estos cascos insonorizados y aislados, están equipados con
                    múltiples pantallas LED y un sistema de sonido. La idea es que el usuario se
                    sumerja por completo en una realidad virtual que simula, cada vez mejor, la vida
                    real.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <a name='anchor4'></a>
        <h2 className='PageH2TitleSeoPages923 mt-3 mb-3'>Preguntas frecuentes sobre las slots:</h2>
        <Accordion>
          <Accordion.Item
            className='accordionT454'
            eventKey='0'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              ¿Cómo ganar en las slots?
            </Accordion.Header>
            <Accordion.Body className='accordionBody text982T'>
              Para ganar en las slots, debe coincidir varias veces el mismo símbolo en una sola
              línea de pago para llevarse así el premio.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className='accordionT454'
            eventKey='1'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              ¿Cómo jugar a las slots?
            </Accordion.Header>
            <Accordion.Body className='accordionBody text982T'>
              Elige la tragaperras online que prefieras y ábrela en tu dispositivo. Elige la
              cantidad que desees apostar y a cuántas líneas de pago quieres jugar. Utiliza el botón
              de “Apuesta Máxima” si quieres jugar en todas las líneas a la vez. Dale a “girar” para
              que los rodillos empiecen a moverse. Si has ganado, el juego mostrará tus ganancias en
              pantalla, y también la oportunidad de jugártelas en una ronda de bonificación. Si
              optas por hacerlo, puedes ganar premios aún mayores.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className='accordionT454'
            eventKey='2'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              ¿Qué son las líneas en las tragaperras?
            </Accordion.Header>
            <Accordion.Body className='accordionBody text982T'>
              Las líneas de pago son las diferentes líneas donde obtendrás un premio cuando aparezca
              una combinación de símbolos determinada por el desarrollador de la slot.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className='accordionT454'
            eventKey='3'>
            <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
              ¿Qué es el RTP en las tragamonedas?
            </Accordion.Header>
            <Accordion.Body className='accordionBody text982T'>
              Detrás de estas tres letras, se esconde el término inglés “return to player rate”, que
              en español sería la tasa de retorno al jugador. Es el porcentaje de recuperación del
              dinero jugado a largo plazo en todas tus apuestas en una tragaperras. Es un dato que
              deberíamos tener en cuenta a la hora de decidirnos por una slot u otra.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className='col-12 RegistrateMobBtn mb-5 mt-5'>
          <a
            rel='nofollow'
            className='registrate-button  bottomContentPromoButton btn btn-primary'
            href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
            Regístrate
          </a>
        </div>
      </Container>
      {/*container end div*/}
    </>
  );
};

export default Slots;
