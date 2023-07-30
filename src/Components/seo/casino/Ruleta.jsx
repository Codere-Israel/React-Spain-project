import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';

const Ruleta = (props) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuántos tipos de ruleta online existen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Existen varios tipos de Ruleta dentro de nuestra oferta de juegos en Codere, puedes elegir la que te traiga más suerte entre: Ruleta Francesa, Ruleta Americana, Ruleta Quantum y muchas más.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Existe un mínimo de apuesta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Normalmente sí, pero este mínimo puede variar ampliamente dependiendo de la mesa. Algunas mesas de ruleta tendrán un mínimo de 1€, mientras otras fijan su mínimo en 5€.',
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: 'Juegos de Ruleta en Codere',
      id: 'anchor1',
    },
    {
      title: 'Conoce las reglas para jugar a la ruleta',
      id: 'anchor2',
    },
    {
      title: 'Opciones de apuestas en la ruleta',
      id: 'anchor3',
    },
    {
      title: 'Preguntas frecuentes',
      id: 'anchor4',
    },
  ];

  const juegos = [
    {
      h3: 'Ruleta Coderista',
      p: 'Es la ruleta propia, exclusiva y completamente en Español de Codere. Una ruleta en la que contarás con los crupiers más amables con un chat en directo con el que podrás comunicarte con ellos para tener la mejor experiencia.',
    },
    {
      h3: 'Ruleta Americana',
      p: 'La gran diferencia entre las ruletas europeas y la americana es que esta última cuenta con un doble cero entre sus números posibles de apostar.',
    },
    {
      h3: 'Ruleta Europea',
      p: 'La ruleta europea viene a ser lo mismo que la ruleta francesa. Una ruleta en la que también contarás con un crupier que te ayudará en todas tus apuestas.',
    },
    {
      h3: 'Ruleta Francesa',
      p: 'Disfruta de la verdadera ruleta jugando en Codere. La emoción te está esperando.',
    },
    {
      h3: 'Ruleta Quantum',
      p: 'La Ruleta Quantum es aquel tipo de ruleta en vivo que cuenta con multiplicadores, pudiendo obtener un bonus de hasta x500 en tu apuesta. Cada vez que la bola se pone a girar se eligen al azar dos multiplicadores con el que podemos obtener un premio superior al que nos llevaríamos haciendo una apuesta en una ruleta normal.',
    },
    {
      h3: 'Ruleta Age of Gods ',
      p: 'La Ruleta Age of Gods es una ruleta en vivo exclusiva que funciona de la misma manera que la ruleta americana, quitando que, la casilla del doble cero se convierte en BONUS.',
    },
  ];

  const preguntas = [
    {
      h3: '¿Cuántos tipos de ruleta online existen? ',
      p: 'Existen varios tipos de Ruleta dentro de nuestra oferta de juegos en Codere, puedes elegir la que te traiga más suerte entre: Ruleta Francesa, Ruleta Americana, Ruleta Quantum y muchas más.',
    },
    {
      h3: '¿Existe un mínimo de apuesta? ',
      p: 'Normalmente sí, pero este puede variar ampliamente dependiendo de la mesa. Algunas mesas de ruleta tendrán un mínimo de 1€, mientras otras fijan su mínimo en 5€.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Juega a la mejor Ruleta Online de España | Codere® </title>
        <meta
          name='description'
          content='¿Te gusta jugar ruleta online?, conoce todos los tipos de ruleta de nuestro casino, aprende estrategias y comienza a jugar en línea en el Casino de Codere.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/ruleta'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      {/* End of SEO block */}

      <Floating
        text='¡Las mejores Ruletas!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/roulette/Roulette${
            props.flag ? 'Mobile' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>
      <div className='col-12  posRelative '>{/* <SeoPagesTopBunner data={TopBunnerData} /> */}</div>
      <div className='container'>
        <div className='row mb-2 mt-3'>
          <div className='col-12'>
            <h1 className='PageH1TitleSeoPages923'>
              Juega a la Ruleta en vivo con crupieres de verdad
            </h1>
          </div>
        </div>

        <div className='row mb-5 mt-3'>
          <div className='col-12'>
            <p className='text982T'>
              No dejes de vivir la emoción de la ruleta online y disfruta en Codere de mesas en
              vivo, y de los juegos de casino que más incluyen el uso de habilidades, suerte y
              suspense.
            </p>
            {/* <p className='text982T'>En este artículo aprenderás a jugar ruleta en casino online:</p> */}
            {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}{' '}
          </div>
          <a name='anchor1'></a>
          <h2 className='PageH2TitleSeoPages923 mt-4'>Juegos de Ruleta en Codere</h2>
          <p className=''>
            El mejor casino online te está esperando en Codere, con todo tipo de ruletas que te
            harán saltar de emoción. Lo que hace especial es que en las mesas de ruleta en vivo al
            jugar continúas disfrutando la presencia e interacción con crupier y jugadores en
            directo para que nunca pierdas la sensación de estar jugando en un Casino. Y solo te
            preocupes por ¿Qué tipo de ruleta prefieres para jugar hoy?:
          </p>
          <Row className='casino-row'>
            {games.ruleta.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
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
            {juegos.map((j, k) => (
              <Accordion.Item
                eventKey={k}
                key={k}>
                <Accordion.Header
                  className='PageH3TitleSeoPages923 accordionT454'
                  as={'h3'}>
                  {j.h3}
                </Accordion.Header>
                <Accordion.Body>{j.p}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <a name='anchor2'></a>
          <h2 className='PageH2TitleSeoPages923'>
            Conoce las reglas para jugar a la ruleta en línea
          </h2>
          <p className='text982T'>
            La ruleta es un juego de azar en el que los jugadores apuestan a qué número, al grupo de
            números o al color en el que caerá la bola en el cilindro giratorio. El cilindro tiene
            36 números (del 1 al 36) alternando en color entre rojo y negro, además de un número 0
            (y en la ruleta americana, un 00 adicional).
          </p>
          <p>Hay dos categorías principales de apuestas en la ruleta: </p>
          <Table
            style={{ width: '100%' }}
            striped
            bordered
            hover
            variant='dark'
            className='mb-5'>
            <thead>
              <tr>
                <th>Categorias</th>
                <th>Descripción:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internas</td>
                <td>
                  Se colocan en números específicos (pleno) o en combinaciones de números adyacentes
                </td>
              </tr>
              <tr>
                <td>Externas</td>
                <td>
                  Mientras que las apuestas externas se realizan en áreas más amplias, como colores,
                  docenas o números pares/impares.
                </td>
              </tr>
            </tbody>
          </Table>
          <h3 className='PageH2TitleSeoPages923'>Tipos de apuestas </h3>
          <p className='text982T'>
            Existen varios tipos de apuesta existentes y en Codere en línea te los vamos a explicar
            todos:
          </p>
          <Table
            style={{ width: '100%' }}
            striped
            bordered
            hover
            variant='dark'
            className='mb-6'>
            <thead>
              <tr>
                <th>Apuesta</th>
                <th>Descripción</th>
                <th>Pago</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rojo/Negro</td>
                <td>
                  Se apuesta si será rojo o negro, el color del número ganador. En esta apuesta se
                  juega a 18 números (en la ruleta hay 18 números rojos y 18 números negros.)
                </td>
                <td>1x1</td>
              </tr>
              <tr>
                <td>Par/Impar </td>
                <td>
                  Se apuesta si el número ganador será par o impar. Aquí apuestas a 18 opciones para
                  o 18 opciones impar
                </td>
                <td>1x1</td>
              </tr>
              <tr>
                <td>Pasa/Falta </td>
                <td>
                  Consiste en apostar si el número estará entre los números del 1 al 18 (falta) o
                  entre los números del 19 al 36 (pasa). Jugando así con 18 números.
                </td>
                <td>1x1</td>
              </tr>
              <tr>
                <td>Docena </td>
                <td>
                  Puede apostar a un conjunto de doce números al colocar una ficha en un área
                  marcada para cada fila. Si gana uno de los 12 números de la línea que usted
                  seleccionó, recibirá un pago de 2:1. Tenga en cuenta que usted pierde su apuesta
                  si el resultado es cero(0).
                </td>
                <td>1x1</td>
              </tr>
              <tr>
                <td> Columna </td>
                <td>
                  El tapete se divide en 3 columnas, cada una de ellas alberga 12 números. Por lo
                  cual, al apostar por una columna se juega a 12 números.
                </td>
                <td>2x1</td>
              </tr>
              <tr>
                <td>Dos docenas </td>
                <td>
                  Se trata de apostar en qué columna estará el número ganador. El tapete se divide
                  en 3 columnas, cada una de ellas alberga 12 números. Así que, al apostar por una
                  columna se juega a 12 números
                </td>
                <td>0.5x1</td>
              </tr>
              <tr>
                <td>Dos columnas </td>
                <td>
                  Se trata de apostar con una sola apuesta a dos columnas, esta apuesta solo se
                  puede realizar para dos columnas contiguas. Recuerda, con la apuesta de dos
                  columnas se podrá apostar a las columnas 1 y 2 o a las columnas 2 y 3. Se juega a
                  24 números.
                </td>
                <td>0.5x1</td>
              </tr>
              <tr>
                <td>Seisena </td>
                <td>
                  Se trata de apostar a 6 números con una sola apuesta. Los 6 números sobre los que
                  se realiza este tipo de apuesta se encuentran en dos filas contiguas.
                </td>
                <td>5x1</td>
              </tr>
              <tr>
                <td>Cuadro </td>
                <td>
                  Se trata de apostar a 4 números con una sola apuesta. Esta apuesta se realiza
                  sobre 4 números que forman un cuadrado en el tapete.
                </td>
                <td>8x1</td>
              </tr>
              <tr>
                <td>Transversal </td>
                <td>
                  Se trata de apostar a 3 números con una sola apuesta, con la apuesta se apuesta a
                  los 3 números de una fila. Por ejemplo, apostar al 0, 1 y 2 o a los números 0, 2 y
                  3.
                </td>
                <td>11x1</td>
              </tr>
              <tr>
                <td>Caballo </td>
                <td>
                  Se trata de apostar a 2 números con una sola apuesta, los 2 números deberán estar
                  contiguos en el tapete de manera horizontal o vertical.
                </td>
                <td>17x1</td>
              </tr>
              <tr>
                <td>Pleno </td>
                <td>
                  Puede apostar a cualquier número, incluyendo el cero (0) colocando su ficha en el
                  centro de un número. La apuesta máxima para esta jugada aparece bajo el panel
                  Límites.
                </td>
                <td>35x1</td>
              </tr>
            </tbody>
          </Table>
          <a name='anchor3' />
          <h2 className='PageH2TitleSeoPages923 mt-4 mb-4'>Opciones de apuestas en la ruleta</h2>
          <h3 className='PageH3TitleSeoPages923'>Voisins du Zéro.</h3>
          <p className='text982T'>
            Esta apuesta abarca cada número en la rueda entre el 22 y el 25, abarca casi la mitad de
            la rueda e incluye al cero (0).
          </p>
          className='accordionT454'
          <h3 className='PageH3TitleSeoPages923 accordionT454'>Tiers du Cylindre. </h3>
          <p className='text982T'>
            Tiers du Cylindre o Tercios significan <strong>"un tercio de la ruleta"</strong>, esto
            es lo más próximo posible a 1/3 de la rueda. Esta apuesta cubre los doce números que se
            encuentran al lado opuesto de la rueda, entre el 27 y el 33, inclusive. La serie es
            27,13,36,11,30,8,23,10,5,24,16,33 (en la ruleta de un solo cero).
          </p>
          <p className='text982T'>
            La apuesta usa seis fichas en total, y se coloca una ficha en las siguientes seis
            divisiones: 5/8; 10/11; 13/16; 23/24; 27/30; 33/36.
          </p>
          <h3 className='PageH3TitleSeoPages923'>Orphelins (Huérfanos).</h3>
          <p className='text982T'>
            Estos números representan las dos porciones de la ruleta que no abarcan las apuestas
            Tiers y Voisins. Esta apuesta abarca ocho números en total, incluyendo 17, 34 y 6 así
            como 1, 20, 14, 31 y 9.
          </p>
          <ul className='seo_list'>
            <li>
              <p className='text982T'>
                <strong>- Orphelins en Plein:</strong>
                se coloca una apuesta <strong>a un pleno (1 número)</strong> en cada posición de
                Orphelins (huérfanos).
              </p>
            </li>
            <li>
              <p className='text982T'>
                <strong>- Orphelins a Cheval: </strong>se coloca una ficha sobre el número 1 y una
                ficha en cada una de las siguientes divisiones: 6/9; 14/17; 17/20 y 31/34.
              </p>
            </li>
          </ul>
          <h3 className='PageH3TitleSeoPages923 accordionT454'>Jeu 0 - Zéro</h3>
          <p className='text982T'>
            Es una versión más pequeña de la apuesta Voisins du Zéro. Esta apuesta cubre los números
            entre 12 y 15, inclusive, en la ruleta. Se coloca una ficha sobre el número 26 y una
            ficha en cada una de las siguientes divisiones: 0/3; 12/15; 32/35.
          </p>
          <h3 className='PageH3TitleSeoPages923 accordionT454'>Jeu 7/9</h3>
          <p className='text982T'>
            Esta apuesta cubre todos los números que terminan en los dígitos 7, 8 o 9. Se coloca una
            ficha como apuestas A un Número sobre 19 y 27, así como una ficha en cada una de las
            siguientes divisiones: 7/8; 8/9; 17/18 y 28/29.
          </p>
          <a name='anchor4' />
          <h2 className='PageH2TitleSeoPages923 mt-4'>Preguntas frecuentes sobre la Ruleta </h2>
          <Accordion className='content-accordion'>
            {preguntas.map((p, k) => (
              <Accordion.Item
                eventKey={k}
                key={k}>
                <Accordion.Header as={'h3'}>{p.h3}</Accordion.Header>
                <Accordion.Body>{p.p}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <div className='col-12  RegistrateMobBtn mb-5 mt-5'>
            <a
              rel='nofollow'
              className='registrate-button  bottomContentPromoButton btn btn-primary'
              href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
              Regístrate
            </a>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
};

export default Ruleta;
