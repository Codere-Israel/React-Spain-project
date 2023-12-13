import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, Container, Image, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';
import { Link } from 'react-router-dom';

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
        name: '¿Cómo ganar en el juego 21?',
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

  const juegos = {
    id: 'juegos',
    h2: 'Juegos de BlackJack en Codere ',
    inner: [
      {
        h3: 'Cashback blackjack',
        text: 'El objetivo es obtener una mano total de 21 o más cercana que la mano del crupier, sin pasarse. En el Cashback Blackjack, los Ases cuentan como 1 u 11, las figuras como 10 y las cartas numeradas como su valor numérico.',
      },
      {
        h3: 'Lucky lucky',
        text: 'Es uno de los juegos en el que necesitarás al crupier para poder ganar en una de sus apuestas secundarias. Intenta conseguir 21 y los números de la suerte con tus cartas y las del crupier para adquirir numerosas ganancias y suculentos premios.',
      },
      {
        h3: 'Perfect Blackjack',
        text: 'El jugador que decide realizar la apuesta paralela debe hacerla antes de que el croupier reparta las cartas de la nueva ronda. La apuesta paralela se hace junto a la apuesta principal, que sigue las reglas estándar del juego. Ésta no interfiere con la dinámica o la velocidad del juego.',
      },
    ],
  };

  const como_jugar = {
    id: 'como_jugar',
    h2: '¿Cómo jugar BlackJack Online? ',
    text: 'Si esta es la primera vez que vas a probar este juego, lo más importante será que tengas en cuenta cómo se juega y las reglas principales para que tus partidas sean lo más entretenidas posibles. En este juego solo tienes que pensar en un número: Esa cifra tiene que ser el 21 ya que si lo consigues la victoria estará asegurada. El valor de las cartas es muy importante: Del 2 al 10 su valor es dicha cifra, la J, Q o K tienen el valor de 10 y el AS podrá ser usado como 1 u 11. Ahora que ya sabes cómo empezar, es momento de jugar.',
    inner: [
      {
        h3: 'Las reglas del blackjack y valores de cartas',
        text: 'Para aprender a jugar como un profesional solo tienes que aprender estos 7 pasos:',
        list: [
          'Seleccionar la cantidad que quieres apostar en cada partida',
          'El croupier se encargará de repartir 2 cartas visibles a cada jugador y dejará descubierta 1 más para sí mismo.',
          'De acuerdo con la mano del croupier, cada jugador podrá decidir si se planta con sus dos cartas o pide más cartas.',
          'Posteriormente el croupier hará lo mismo con su mano.',
          'El objetivo será conseguir una mano lo más cercana o igual a 21 pero sin pasarse de dicha cantidad ya que, si se rebasa la cifra automáticamente, la mano se convierte en perdedora.',
          'Si la mano de un jugador es igual a la del croupier, se declara empate y se devuelve la apuesta.',
          'Si tienes la suerte de sacar una mano con AS y figura el pago será de 3X2 o si tu partida es ganadora con otra combinación, el pago correspondiente será de 1X1',
        ],
      },
      {
        h3: 'Estrategia de juego ',
        text: 'Durante cada partida habrá ciertos momentos en que puedes realizar ciertas acciones ¿Quieres que les revelamos los secretos?',
        table: [
          [
            'Pedir carta',
            'Sólo cuando creas que tu mano es un tanto baja para alcanzar el número 21.',
          ],
          [
            'Plantarse',
            'Aquí es cuando mola utilizar póker face para cuando creas que tu mano es lo suficientemente buena para ganar.',
          ],
          [
            'Dobla',
            'Una apuesta arriesgada que consiste en duplicar la cantidad apostada justo después de recibir las dos primeras cartas. ¡Todo o nada!',
          ],
          [
            'Separar',
            'Esto suele hacerse cuando la mano está compuesta por dos figuras y se crean dos manos independientes, las cuales deben de tener la misma apuesta.',
          ],
        ],
      },
      {
        h3: 'Tipos de apuestas',
        text: 'Parlay en Blackjack: supone duplicar las apuestas cada vez que ganas. Lo que es sumamente riesgoso si consideramos lo difícil que es mantener varias manos ganadoras sucesivas en este juego. Aun así, si optas por este método, hay que tener en cuenta lo siguiente: establece un máximo de ganancias para, en el momento justo, poder retirarte sin haberlo perdido todo..',
        text2:
          'Martingala en Blackjack: se duplica la apuesta en la medida en que se pierde. Una vez que ganas, reduces tu apuesta al mínimo. Si bien no es aconsejable, muchos jugadores la eligen cuando el croupier lleva varias manos ganadoras.',
      },
      {
        h3: 'Recomendaciones para jugar blackjack ',
        text: '',
        iter: [
          'Si piensas que esto del Casino es 100% suerte, estás muy equivocado. Existen muchos trucos que pueden convertirlos en todos unos estrategas de este juego. Uno de los principales es aprender a diferenciar el tipo de cartas o clasificarlas. Puede haber cartas duras o cartas débiles. El 7, 8, 9, 10 y As son cartas fuertes, 2, 3, 4, 5 y 6 cartas débiles. Dependiendo del tipo de carta, se recomienda pedir otra, plantarse o incluso separar.',
          'Los trucos de la peli no valen para online. Si pensabas que por haber visto 3 o más veces la parte de cómo contar cartas ya podéis petarlo, estás un poco equivocado. Este truco solo vale para los locales ya que las cartas se barajan y reparten tras cada partida, de modo que una misma carta puede aparecer en varias partidas seguidas.',
          'Decide cuando parar, y si tu mano alcanza el 17, mejor ponerle un stop antes que te pases por querer ser muy basto. Las posibilidades de que tu mano se vaya al traste son muy elevadas si optas por pedir otra carta. Lo mejor es aguantar y esperar a que la mano que tenga que correr el riesgo sea la del croupier.',
          'Si la suerte te cae del cielo y pillas una mano con 8-8 o AS-AS, la opción que tienes que considerar es la de dividir cartas ya que 16 de las 52 cartas de la baraja tienen un valor de 10, por tanto, las probabilidades de ganar son altísimas.',
        ],
        img: 'https://www.codere.es/_catalogs/masterpage/codere/images/seo/tabla.jpg',
      },
    ],
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre Blackjack',
    inner: [
      {
        h3: '¿Cómo se juega al blackjack?',
        text: 'El objetivo de este juego es sumar 21 puntos o no pasarse de esta cifra, pero siempre sobrepasando el valor que tiene el crupier para ganar la apuesta.',
      },
      {
        h3: '¿Cómo se cuentan las cartas en el blackjack? ',
        text: 'Dale el valor de -1 a las cartas altas (del 10 al A), +1 a las bajas (del 2 al 6) y 0 al resto. Empieza a contar tras el reparto dando el valor a cada carta que sale de la baraja.',
      },
      {
        h3: '¿Cómo ganar en el juego 21? ',
        text: 'El As es la carta más fuerte en el BlackJack porque vale 11 puntos, por lo que la mejor opción es dividir los ases si tienes más de uno y así tener dos opciones para conseguir un 21 (BlackJack). Con los ochos pasa algo parecido, ya que juntos suman 16, que es la peor mano posible en este juego.',
      },
      {
        h3: '¿Cuántos tipos de blackjack online existen? ',
        text: 'Hay dos tipos o estilos de blackjack, el europeo y el americano, que, aunque parezcan iguales, tienen unas pequeñas diferencias: En el americano, el crupier se reparte dos cartas, una descubierta y otra cubierta, junto con los otros jugadores. En el europeo solo se reparte una carta descubierta y dependiendo de lo que haya salido deben pasar otra ronda de apuestas antes de recibir el siguiente naipe.',
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: 'Juegos de BlackJack en Codere',
      id: 'juegos',
    },
    {
      title: '¿Cómo jugar BlackJack Online?',
      id: 'como_jugar',
    },
    {
      title: 'Preguntas frecuentes sobre Blackjack:',
      id: 'preguntas',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Juega 21 ♠ Blackjack Online en España | Codere®</title>
        <meta
          name='description'
          content='Se parte de la aventura de lograr 21 en las cartas y juega en línea al Blackjack en las mejores mesas del casino online de Codere'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/blackjack'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating
        text='¡Increíbles mesas en vivo!'
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
      <Container>
        <h1 className='mt-4'>Juega al Blackjack y emociónate con el popular juego en línea</h1>
        <p>
          Codere te quiere hacer parte de esta aventura y adentrarte en el divertidísimo mundo de
          las partidas del 21 o mejor conocido como Blackjack en el <Link to='/casino'>casino</Link>
          , ¡Ahora también Online! Pero ojo, queremos que esa aventura no sea sólo un momento de
          suerte y corazonadas, sino que además de disfrutarlo puedas petarlo en cada partida con
          todos los trucos y estrategias de este emocionante juego.
        </p>

        {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

        <div
          id={juegos.id}
          className='mt-4'>
          <h2>{juegos.h2}</h2>

          <Row className='casino-row'>
            {games.blackjack.slice(0, !props.flag ? games.blackjack.length : 4).map((game, k) => (
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
          <Accordion>
            {juegos.inner.map((game, k) => (
              <Accordion.Item
                eventKey={k}
                key={k}>
                <Accordion.Header as={'h3'}>{game.h3}</Accordion.Header>
                <Accordion.Body>{game.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div
          id={como_jugar.id}
          className='mt-4'>
          <h2>{como_jugar.h2}</h2>
          <p>{como_jugar.text}</p>
          {como_jugar.inner.map((inn, k) => (
            <div key={k}>
              <h3>{inn.h3}</h3>
              <p>{inn.text}</p>

              {inn.list ? (
                <ol style={{ color: '#fff' }}>
                  {inn.list.map((li, k2) => (
                    <li key={k2}>{li}</li>
                  ))}
                </ol>
              ) : null}
              {inn.table ? (
                <Table
                  striped
                  bordered
                  hover
                  variant='dark'>
                  <tbody>
                    {inn.table.map((tr, i) => (
                      <tr key={i}>
                        {tr.map((td, j) => (
                          <td key={j}>{td}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : null}
              {inn.iter ? (
                <>
                  {inn.iter.map((inn, k) => (
                    <p key={k}>{inn}</p>
                  ))}
                </>
              ) : null}
              {inn.img ? (
                <LazyLoadImage
                  style={{ width: '450px', maxWidth: '90%', display: 'flex', margin: 'auto' }}
                  src={inn.img}
                />
              ) : null}
              {inn.text2 ? <p>{inn.text}</p> : null}
            </div>
          ))}
        </div>
        <div
          id={preguntas.id}
          className='mt-4'>
          <h2>{preguntas.h2}</h2>
          <Accordion>
            {preguntas.inner.map((question, k) => (
              <Accordion.Item
                eventKey={k}
                key={k}>
                <Accordion.Header as={'h3'}>{question.h3}</Accordion.Header>
                <Accordion.Body>{question.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className='mt-4 RegistrateMobBtn'>
          <NavLink
            rel='nofollow'
            style={{ color: '#fff', width: '250px', maxWidth: '80%', margin: 'auto' }}
            className='registrate-button btn btn-primary'
            href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
            Regístrate
          </NavLink>
        </div>
      </Container>

      {/*container end div*/}
    </>
  );
};

export default Blackjack;
