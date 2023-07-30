import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';

const Casino = (props) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Es seguro jugar en un Casino Online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siempre y cuando se juegue en un casino regulado en España, estos incorporan las medidas de seguridad necesarias para jugar de manera segura, y que además, no nos estafen.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo saber si un Casino Online está regulado en España?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Todos los casinos online legales en España cuentan en su página web con el sello de 'Juego Seguro'.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuáles son los tipos de juego en el Casino más populares?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Existe una gran variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo, slots y mucho más.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo se retira las ganancias en Codere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entra en la sección de cobros de Codere y, siempre que tengas saldo retirable, podrás usar cualquiera de nuestros métodos de cobro. ',
        },
      },
    ],
  };
  const table_of_contents_list = [
    {
      title: '¿Cómo se juega en un Casino Online regulado en España?',
      id: 'anchor1',
    },
    {
      title: 'Los mejores juegos de Casino están en Codere',
      id: 'anchor2',
    },
    {
      title: '¿Por qué elegir jugar en el Casino Online de Codere?',
      id: 'anchor3',
    },
    {
      title: 'Preguntas frecuentes sobre el Casino Online:',
      id: 'anchor4',
    },
  ];
  return (
    <>
      <Helmet>
        <title>El Casino de España #1 para Jugar Online | Codere®</title>
        <meta
          name='description'
          content='Juega en línea con Codere y disfruta de los mejores juegos de Casino Online en España: ruletas, blackjack, tragaperras y más.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      {/* End of SEO block */}

      <Floating
        text='¡El mejor Casino!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/casino/casino${
            props.flag ? 'Mobile' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>

      <div className='container'>
        <div className='row mt-3'>
          <div className='col-12'>
            <h1 className='PageH1TitleSeoPages923'>Juega en el mejor Casino online de España</h1>
          </div>
        </div>

        <div className='row mb-3 mt-3'>
          <div className='col-12'>
            <p className='text982T'>
              Entra en Codere.es para disfrutar del mejor Casino online del mundo. Elige entre la
              enorme lista de juegos de slot que tendrás al alcance, descubre las últimas novedades
              que han llegado a nuestro casino y disfruta al máximo jugando con total seguridad.
              Apúntate ahora, acepta el reto y aprovéchate de todas las ventajas que tiene jugar en
              el Casino de Codere. ¡Empieza a ganar ya!
            </p>
          </div>
        </div>

        {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

        <Row className='casino-row'>
          {games.casino.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
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

        <div className='row'>
          <div className='col-12'>
            <a name='anchor1'></a>
            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
              ¿Cómo se juega en un Casino Online regulado en España?
            </h3>
            <p className='text982T'>
              En España jugar en un casino online es muy fácil una vez que descubras los primeros
              pasos básicos y consejos para empezar. Antes de arrancar vas a tener que realizar una
              pequeña investigación.
            </p>
            <p className='text982T'>
              Si ya has encontrado el casino que mejor se ajuste a tus deseos de juego, tienes que
              registrarte para crear una cuenta. Pero ojo, antes de que empieces a divulgar
              cualquier información personal, verifica la seguridad del sitio. Un casino en línea
              debería ofrecer no menos de 128-bit SSL de cifrado digital. Después de que tu elección
              de casino online sea segura, ¡estás listo para registrarte, realizar tus apuestas y
              jugar!
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>Ventajas de jugar en Casino Online</h3>
            <p className='text982T'>
              Cada vez hay más personas en el mundo que optan por el Casino Online. Pero esta
              elección no es fruto de la coincidencia, tiene una explicación. Una de las primeras
              cosas que más llama la atención de los casinos online es la adaptabilidad a horarios y
              lugar, haciendo posible a todo el mundo jugar cuando ellos lo deseen.
            </p>

            <p className='text982T'>
              Además, la rapidez de las partidas en los Casinos Online hace que sea más interesante
              para aquellos jugadores impacientes. Otro de los aspectos es la seguridad de jugar en
              casinos online en mitad de una pandemia.
            </p>

            <p className='text982T'>
              Por otro lado, el mayor número de promociones y beneficios presentes en los casinos
              online, hace que los usuarios lo vean como una ventaja. Por último, la facilidad de
              elección en la forma de pago y la seguridad que te ofrece un Casino online, hace que
              mucha gente prefiera eso a uno físico.
            </p>

            <Accordion
              // defaultActiveKey={["/"]}
              alwaysOpen>
              <Accordion.Item
                className='accordionT454'
                eventKey='0'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  Estrategias y trucos para ganar en un Casino Online
                </Accordion.Header>
                <h3 className='PageH3TitleSeoPages923 '> </h3>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Aunque no es fácil, podemos ganar dinero con los juegos de casino. Pero ganar a
                    la banca en una mesa de blackjack, en una ruleta o en una tragaperras no está al
                    alcance de todos, así que hay que conocer las claves para ganar en el casino. No
                    olvidemos que el azar juega un papel vital en los juegos de casino, y por mucho
                    que tengas una estrategia perfectamente depurada, puede no ser perfecta la
                    estrategia.
                  </p>
                  <p className='text982T'>
                    Una de las primeras estrategias sería fijar un precio máximo de apuesta y no
                    salir de él. Además, hay que tener en cuenta que hacer con el dinero ganado, si
                    retirar una parte o seguir jugando. Otra de las cuestiones a tener en cuenta es
                    la de ir aumentando el dinero invertido, tiene que ser progresivo.
                  </p>
                  <p className='text982T'>
                    Si quieres ganar, debes conocer todos los aspectos del juego, y esto incluye
                    conocer a fondo las normas de cada juego. Al hilo de lo que señalábamos
                    anteriormente, hay que conocer los diferentes tipos de apuesta de cada juego de
                    casino para poder sacar el máximo provecho.
                  </p>
                  <p className='text982T'>
                    Antes de comenzar a jugar en serio, hay que invertir un poco de tiempo en testar
                    nuestras estrategias en modo demo. Aquí los errores no tienen el mismo precio
                    que jugando con dinero real. Otro de los aspectos a tener en cuenta es realizar
                    apuestas de bajo riesgo ya que tienen más opciones de salir que las de medio o
                    alto así que será más fácil ganar con ellas.
                  </p>
                  <p className='text982T'>
                    Por último, pero no por ello menos importante, siempre que hay dinero por medio,
                    el control emocional es clave para ganar.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <a name='anchor2'></a>
            <div className='col-12 mt-4 RegistrateMobBtn'>
              <a
                rel='nofollow'
                className='registrate-button  bottomContentPromoButton btn btn-primary'
                href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
                Regístrate
              </a>
            </div>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
              Los mejores juegos de Casino están en Codere
            </h3>
            <h3 className='PageH3TitleSeoPages923 '> </h3>

            <p className='text982T'>
              En el Casino Online de Codere te puedes encontrar una gran variedad increíble de
              juegos casino como blackjack, ruleta, ruleta en vivo y la última incorporación a
              nuestro catálogo, ¡el videobingo! Recuerda que en todos los juegos de casino tus
              ganancias no serán en bono y podrás retirarlas en cualquier momento sin problemas.
            </p>
            <p className='text982T'>
              Aquí te dejamos los mejores juegos de Casino que podrás encontrar en Codere:
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>Age of the Gods</h3>

            <p className='text982T'>
              Esta tragamonedas de 5 carretes y 20 líneas de pago tiene 6 símbolos que representan a
              los famosos dioses griegos como Zeus, Atenea, Poseidón, Ares y otros, así como el
              casco de Hércules.
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'> Buffalo Blitz</h3>
            <p className='text982T'>
              Ambientado en el lejano Oeste, ganarás interesantes premios gracias a los
              protagonistas de este juego: los búfalos.
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'> Kingdoms Rise</h3>
            <p className='text982T'>
              Disfruta de esta tragamonedas de temática de fantasía prehistórica en la serie de
              premios mayores de Playtech, y viene con 6 carretes y 4096 líneas de pago.
            </p>
            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>Ruleta en vivo</h3>
            <p className='text982T'>
              Aprovéchate de nuestros crupiers en vivo para disfrutar de la ruleta de Codere.
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>Ruleta Coderista</h3>

            <p className='text982T'>
              La mejor ruleta te está esperando en el Casino de Codere. ¡No va más!.
            </p>
            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>Blackjack</h3>

            <a name='anchor3'></a>
            <p className='text982T'>
              Consigue una mano de cartas que sea lo más cercana posible al 21, pero sin pasarte.{' '}
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
              ¿Por qué elegir jugar en el Casino Online de Codere?
            </h3>
            <p className='text982T'>
              En el Casino Online de Codere puedes encontrar de todo. Es sin ninguna duda el mejor
              casino en línea del mundo, con una gran variedad de títulos de juegos que te están
              esperando: Torrente, Chiquito, Cat in Vegas y muchos más. Ojo porque muchas de las
              slots tendrán premios extra y además contarás con unos jackpots espectaculares.
              Gracias a nuestro buscador será más fácil encontrarlos y podrás filtrar por tipo de
              juego, nombre, compañía y pagos... ¡e incluso podrás hacer tu propia lista de slots
              favoritas! Además, sorpréndete con la rapidez de nuestra plataforma, tanto en tu
              ordenador como en tu móvil.
            </p>

            <Table
              striped
              bordered
              hover
              variant='dark'
              className='mb-3'>
              <tbody>
                <tr>
                  <td>Establecido</td>
                  <td>2008</td>
                </tr>
                <tr>
                  <td>🎰Juegos ofrecidos </td>
                  <td>900+</td>
                </tr>
                <tr>
                  <td>Licencia de juego </td>
                  <td>
                    Licencias otorgadas por la DGOJ: 225-11/GA/A86346038/SGR, AOC/2014/002,
                    ADC/2014/001, AHC/2014/002, 223-11/GO/ A86346038/SGR, MAZ/2015/032,
                    RLT/2016/009, BLJ/2016/007.
                  </td>
                </tr>
                <tr>
                  <td>Moneda </td>
                  <td>EUR </td>
                </tr>
                <tr>
                  <td> 💰Depósito mínimo </td>
                  <td> 10€</td>
                </tr>
                <tr>
                  <td>Limites de Retiros </td>
                  <td>El máximo de retiro es de 10.000€</td>
                </tr>
                <tr>
                  <td>Formas de Pago </td>
                  <td>
                    Bizum, Visa, MasterCard, Tranferencia Bancaria, Netller, Skrill, Paypal,
                    Paysajecard, MuchBetter, Halcash, Rapid
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
              Juega desde tu celular con la APP de Casino de Codere
            </h3>
            <p className='text982T'>
              Podrás encontrar la app de Codere tanto en el Play Store de Android, como en la App
              Stores de Apple. Con la aplicación de Codere podrás jugar desde cualquier parte del
              mundo y disfrutar desde tu sofá del mejor casino online del planeta. Todo el Casino,
              en una misma app.
            </p>
            <a name='anchor4'></a>
            <p className='text982T'>
              Esta app de Codere la podrás utilizar tanto desde tu móvil, como en tu ordenador o en
              una tablet. Asi que ya sabes, descargate ahora la app de Codere y disfruta de una
              manera sencilla del mejor casino del mundo. ¡En Codere, así de fácil!
            </p>

            <h3 className='PageH3TitleSeoPages923 mt-4 mb-2'>
              Preguntas frecuentes sobre el Casino Online
            </h3>

            <Accordion className='content-accordion'>
              <Accordion.Item
                className='accordionT454'
                eventKey='0'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Es seguro jugar en un Casino Online?{' '}
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Siempre y cuando se juegue en un casino regulado en España, estos incorporan las
                    medidas de seguridad necesarias para jugar de manera segura, y que además, no
                    nos estafen.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className='accordionT454'
                eventKey='1'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cómo saber si un Casino Online está regulado en España?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Todos los casinos online legales en España cuentan en su página web con el sello
                    de &apos;Juego Seguro &apos;.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className='accordionT454'
                eventKey='2'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cuáles son los tipos de juego en el Casino más populares?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Existe una gran variedad increíble de juegos casino como blackjack, ruleta,
                    ruleta en vivo, slots y mucho más.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className='accordionT454'
                eventKey='3'>
                <Accordion.Header className='PageH3TitleSeoPages923 accordionT454'>
                  ¿Cómo se retira las ganancias en Codere?
                </Accordion.Header>
                <Accordion.Body className='accordionBody text982T'>
                  <p className='text982T'>
                    Entra en la sección de cobros de Codere y, siempre que tengas saldo retirable,
                    podrás usar cualquiera de nuestros métodos de cobro.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mt-3 RegistrateMobBtn'>
            <a
              rel='nofollow'
              className='registrate-button  bottomContentPromoButton btn btn-primary'
              href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
              Regístrate
            </a>
          </div>
          <hr className='mt-3' />
        </div>
      </div>
      {/*container end div*/}
    </>
  );
};

export default Casino;
