import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';

const Blackjack = (props) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo se juega al blackjack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El objetivo de este juego es sumar 21 puntos o no pasarse de esta cifra, pero siempre sobrepasando el valor que tiene el crupier para ganar la apuesta.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo se cuentan las cartas en el blackjack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dale el valor de -1 a las cartas altas (del 10 al A), +1 a las bajas (del 2 al 6) y 0 al resto. Empieza a contar tras el reparto dando el valor a cada carta que sale de la baraja.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo ganar dinero en el juego 21?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El As es la carta más fuerte en el BlackJack porque vale 11 puntos, por lo que la mejor opción es dividir los ases si tienes más de uno y así tener dos opciones para conseguir un 21 (BlackJack). Con los ochos pasa algo parecido, ya que juntos suman 16, que es la peor mano posible en este juego.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuántos tipos de blackjack online existen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hay dos tipos o estilos de blackjack, el europeo y el americano, que, aunque parezcan iguales, tienen unas pequeñas diferencias: En el americano, el crupier se reparte dos cartas, una descubierta y otra cubierta, junto con los otros jugadores. En el europeo solo se reparte una carta descubierta y dependiendo de lo que haya salido deben pasar otra ronda de apuestas antes de recibir el siguiente naipe.',
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: '¿Cómo jugar BlackJack Online?',
      id: 'anchor1',
    },
    {
      title: 'Las reglas del blackjack y valores de cartas',
      id: 'anchor2',
    },
    {
      title: 'Juegos de BlackJack en Codere',
      id: 'anchor3',
    },
    {
      title: 'Tipos de apuestas en blackjack ofrecidos en Codere:',
      id: 'anchor4',
    },
    {
      title: 'Preguntas frecuentes sobre Blackjack::',
      id: 'anchor5',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Juega 21 ♠ Blackjack Online en España | Codere®</title>
        <meta
          name='description'
          content='Se parte de la aventura de lograr 21 en las cartas y juega en línea Blackjack en las mejores mesas del casino online de Codere.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/blackjack'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating
        text='¡El mejor BlackJack!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/blackjack/BJ${
            props.flag ? 'Mobile' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>

      <div className='col-12 posRelative'>{/* <SeoPagesTopBunner data={TopBunnerData} /> */}</div>
      <div className='container'>
        <div className='row mb-3 mt-3'>
          <div className='col-12'>
            <h1 className='PageH1TitleSeoPages923'>
              Blackjack Online, las mejores mesas en vivo están en Codere
            </h1>
          </div>
        </div>

        <div className='row mb-3 mt-3'>
          <div className='col-12'>
            <p className='text982T'>
              Codere te quiere hacer parte de esta aventura y adentrarte en el divertidísimo mundo
              de las partidas de Veintiuno o mejor conocido como Blackjack, ¡Ahora también en
              Online! Pero ojo, queremos que esa aventura no sea solo un momento de suerte y
              corazonadas, sino que además de disfrutarlo podáis petarlo en cada partida con todos
              los trucos, estrategias y formas de jugar este emocionante juego.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}
            <Row className='casino-row'>
              {games.blackjack.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
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
            <div name='anchor1'>
              <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>¿Cómo jugar BlackJack Online? </h3>
              <p className='text982T'>
                Si esta es la primera vez que vais a probar este juego, lo más importante será que
                tengáis en cuenta cómo se juega y las reglas principales para que vuestras partidas
                sean lo más entretenidas posibles. En este juego solo tenéis que pensar en un
                número: Esa cifra tiene que ser el 21 ya que si lo conseguís la victoria estará
                asegurada. El valor de las cartas es muy importante: Del 2 al 10 su valor es dicha
                cifra, la J, Q o K tienen el valor de 10 y el AS podrá ser usado como 1 u 11. Ahora
                que ya sabes cómo empezar, es momento de jugar.
              </p>
            </div>
            <div
              id='anchor2'
              className='mt-3'>
              <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
                Las reglas del blackjack y valores de cartas
              </h3>
              <p className='text982T'>
                Para aprender a jugar como un profesional solo tenéis que aprender estos 7 pasos:
              </p>
              <ol className='seo_list'>
                <li>Seleccionar la cantidad que queréis apostar en cada partida.</li>
                <li>
                  El croupier se encargará de repartir 2 cartas visibles a cada jugador y dejará
                  descubierta 1 más para sí mismo.
                </li>
                <li>
                  De acuerdo con la mano del croupier, cada jugador podrá decidir si se planta con
                  sus dos cartas o pide más cartas.
                </li>
                <li>Posteriormente el croupier hará lo mismo con su mano.</li>
                <li>
                  El objetivo será conseguir una mano lo más cercana o igual a 21 pero sin pasarse
                  de dicha cantidad ya que, si se rebasa la cifra automáticamente, la mano se
                  convierte en perdedora.
                </li>
                <li>
                  Si la mano de un jugador es igual a la del croupier, se declara empate y se
                  devuelve la apuesta.
                </li>
                <li>
                  Si tenéis la suerte de sacar una mano con AS y figura el pago será de 3X2 o si tu
                  partida es ganadora con otra combinación, el pago correspondiente será de 1X1
                </li>
              </ol>
            </div>

            <Accordion
            // defaultActiveKey={["/"]}
            >
              <Accordion.Item
                className='accordionT454'
                eventKey='0'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  Estrategia de juego
                </Accordion.Header>

                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Durante cada partida habrá ciertos momentos en que podéis realizar ciertas
                    acciones ¿Queréis que os revelamos los secretos?
                  </p>
                  <Table
                    striped
                    bordered
                    hover
                    variant='dark'
                    className='w-100'>
                    <tbody>
                      <tr>
                        <td>Pedir carta</td>
                        <td>
                          Solo cuando creas que tu mano es un tanto baja para alcanzar el número 21.
                        </td>
                      </tr>
                      <tr>
                        <td>Plantarse </td>
                        <td>
                          Aquí es cuando mola utilizar póker face para cuando creas que tu mano es
                          lo suficientemente buena para ganar.
                        </td>
                      </tr>
                      <tr>
                        <td>Dobla </td>
                        <td>
                          Una apuesta arriesgada que consiste en duplicar la cantidad apostada justo
                          después de recibir las dos primeras cartas. ¡Todo o nada!
                        </td>
                      </tr>
                      <tr>
                        <td>Separar </td>
                        <td>
                          {' '}
                          Esto suele hacerse cuando la mano está compuesta por dos figuras y se
                          crean dos manos independientes, las cuales deben de tener la misma
                          apuesta.{' '}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className='accordionT454'
                eventKey='1'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  Tipos de apuestas
                </Accordion.Header>
                <h3 className='PageH3TitleSeoPages923 '> </h3>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Parlay en Blackjack: supone duplicar las apuestas cada vez que ganas. Lo que es
                    sumamente riesgoso si consideramos lo difícil que es mantener varias manos
                    ganadoras sucesivas en este juego. Aun así, si optas por este método, hay que
                    tener en cuenta lo siguiente: establece un máximo de ganancias para, en el
                    momento justo, poder retirarte sin haberlo perdido todo..
                  </p>
                  <p className='text982T'>
                    Martingala en Blackjack: se duplica la apuesta en la medida en que se pierde.
                    Una vez que ganas, reduces tu apuesta al mínimo. Si bien no es aconsejable,
                    muchos jugadores la eligen cuando el croupier lleva varias manos ganadoras.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className='accordionT454'
                eventKey='2'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  Recomendaciones para jugar blackjack
                </Accordion.Header>
                <h3 className='PageH3TitleSeoPages923 '> </h3>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Si pensáis que esto del Casino es 100% suerte, estáis muy equivocados. Existen
                    muchos trucos que pueden convertiros en todos unos estrategas de este juego. Uno
                    de los principales es aprender a diferenciar el tipo de cartas o clasificarlas.
                    Puede haber cartas duras o cartas débiles. El 7, 8, 9, 10 y As son cartas
                    fuertes, 2, 3, 4, 5 y 6 cartas débiles. Dependiendo del tipo de carta, se
                    recomienda pedir otra, plantarse o incluso separar.
                  </p>
                  <p className='text982T'>
                    Los trucos de la peli no valen para online. Si pensabais que por haber visto 3 o
                    más veces la parte de cómo contar cartas ya podéis petarlo, estáis un poco
                    equivocados. Este truco solo vale para Casinos físicos ya que las cartas se
                    barajan y reparten tras cada partida, de modo que una misma carta puede aparecer
                    en varias partidas seguidas.
                  </p>
                  <p className='text982T'>
                    Decidid cuando parar, y si vuestra mano alcanza el 17, mejor ponerle un stop
                    antes que os paséis por querer ser muy bastos. Las posibilidades que vuestra
                    mano se vaya al traste son muy elevadas si optáis por pedir otra carta. Lo mejor
                    es aguantar y esperar a que la mano que tenga que correr el riesgo sea la del
                    croupier.
                  </p>
                  <p className='text982T'>
                    Si la suerte os cae del cielo y pilláis una mano con 8-8 o AS-AS, la opción que
                    tenéis que considerar es la de dividir cartas ya que 16 de las 52 cartas de la
                    baraja tienen un valor de 10, por tanto, las probabilidades de ganar son
                    altísimas.
                  </p>
                  <img src='	https://www.codere.es/_catalogs/masterpage/codere/images/seo/tabla.jpg' />
                  <div className='col-12 mt-3 RegistrateMobBtn'>
                    <a
                      rel='nofollow'
                      className='registrate-button  bottomContentPromoButton btn btn-primary'
                      href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
                      Regístrate
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div
              id='anchor3'
              className='mt-3'>
              <h3 className='PageH3TitleSeoPages923 '>Juegos de BlackJack en Codere </h3>
              <ul className='seo_list'>
                <li>
                  Cashback blackjack: El objetivo es obtener una mano total de 21 o más cercana a 21
                  que la mano del crupier, sin pasarse de 21. En el Cashback Blackjack, los Ases
                  cuentan como 1 u 11, las figuras como 10 y las cartas numeradas como su valor
                  numérico.
                </li>
                <li>
                  Lucky lucky: es uno de los juegos en el que necesitarás al crupier para poder
                  ganar en una de sus apuestas secundarias. Intenta conseguir 21 y los números de la
                  suerte con tus cartas y las del crupier para adquirir numerosas ganancias y
                  suculentos premios.
                </li>
                <li>
                  Perfect Blackjack: El jugador que decide realizar la apuesta paralela debe hacerla
                  antes de que el crupier reparta las cartas de la nueva ronda. La apuesta paralela
                  se hace junto a la apuesta principal, que sigue las reglas estándar del juego. Las
                  apuestas paralelas no interfieren con la dinámica o la velocidad del juego.
                </li>
              </ul>
            </div>

            <div id='anchor4'>
              <h3 className='PageH3TitleSeoPages923 '>
                Tipos de apuestas en blackjack ofrecidos en Codere:
              </h3>
              <ul className='seo_list'>
                <li>
                  Parlay en Blackjack: supone duplicar las apuestas cada vez que ganas. Lo que es
                  sumamente riesgoso si consideramos lo difícil que es mantener varias manos
                  ganadoras sucesivas en este juego. Aun así, si optas por este método, hay que
                  tener en cuenta lo siguiente: establece un máximo de ganancias para, en el momento
                  justo, poder retirarte sin haberlo perdido todo. Hay que tener en cuenta:
                  establece un máximo de ganancias para, en el momento justo, poder retirarte sin
                  haberlo perdido todo
                </li>
                <li>
                  Martingala en Blackjack: se duplica la apuesta en la medida en que se pierde. Una
                  vez que ganas, reduces tu apuesta al mínimo. Si bien no es aconsejable, muchos
                  jugadores la eligen cuando el croupier lleva varias manos ganadoras.
                </li>
              </ul>
            </div>

            <a name='anchor5'></a>
            <h3 className='PageH3TitleSeoPages923 '>Preguntas frecuentes sobre Blackjack: </h3>
            <p className='text982T'></p>
            <Accordion className='content-accordion mt-4'>
              <Accordion.Item
                className='accordionT454'
                eventKey='3'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cómo se juega al blackjack?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    El objetivo de este juego es sumar 21 puntos o no pasarse de esta cifra, pero
                    siempre sobrepasando el valor que tiene el crupier para ganar la apuesta.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className='accordionT454'
                eventKey='4'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cómo se cuentan las cartas en el blackjack?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Dale el valor de -1 a las cartas altas (del 10 al A), +1 a las bajas (del 2 al
                    6) y 0 al resto. Empieza a contar tras el reparto dando el valor a cada carta
                    que sale de la baraja.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className='accordionT454'
                eventKey='5'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cómo ganar dinero en el juego 21?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    El As es la carta más fuerte en el BlackJack porque vale 11 puntos, por lo que
                    la mejor opción es dividir los ases si tienes más de uno y así tener dos
                    opciones para conseguir un 21 (BlackJack). Con los ochos pasa algo parecido, ya
                    que juntos suman 16, que es la peor mano posible en este juego.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className='accordionT454'
                eventKey='6'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cuántos tipos de blackjack online existen?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Hay dos tipos o estilos de blackjack, el europeo y el americano, que, aunque
                    parezcan iguales, tienen unas pequeñas diferencias: En el americano, el crupier
                    se reparte dos cartas, una descubierta y otra cubierta, junto con los otros
                    jugadores. En el europeo solo se reparte una carta descubierta y dependiendo de
                    lo que haya salido deben pasar otra ronda de apuestas antes de recibir el
                    siguiente naipe.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mt-4 RegistrateMobBtn'>
            <a
              rel='nofollow'
              className='registrate-button  bottomContentPromoButton btn btn-primary'
              href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
              Regístrate
            </a>
          </div>
          <hr className='mt-4' />
        </div>
      </div>
      {/*container end div*/}
    </>
  );
};

export default Blackjack;
