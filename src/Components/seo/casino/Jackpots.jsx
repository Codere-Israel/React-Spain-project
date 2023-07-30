import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';
// import articleStructuredData from './articleStructuredData.json';

const Jackpots = (props) => {
  const table_of_contents_list = [
    {
      title: '¿Qué es un jackpot y cuales son sus diferentes tipos?',
      id: 'anchor1',
    },
    {
      title: 'Consejos para llevarte el gato al agua',
      id: 'anchor2',
    },
    {
      title: 'El jackpot más grande en españa se ganó en codere',
      id: 'anchor3',
    },
  ];

  return (
    <>
      <Helmet>
        <title>¿Cómo Funciona un Jackpot? » Aprende a Jugar | Codere®</title>

        <meta
          name='description'
          content='Un Jackpot o bote acumulado es el premio máximo que un slot puede dar a un jugador. En Codere encontrarás los mejores Jackpots para jugar en línea.'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/jackpots'
        />
        {/* <script type='application/ld+json'>{JSON.stringify(articleStructuredData)}</script> */}
      </Helmet>
      {/* End of SEO block */}

      <Floating
        text='¡Los mejores Jackpots!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/jackpots/jackpots${
            props.flag ? 'Moblie' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>

      <div className='container'>
        <div className='row mb-2 mt-3'>
          <div className='col-12'>
            <h1 className='PageH1TitleSeoPages923'>Jackpots - El premio máximo en las slots</h1>
          </div>
        </div>
        <div className='row mb-5 mt-3'>
          <div className='col-12'>
            <p className='text982T'>
              Si te mola eso de jugar a las slots y las tragaperras seguramente habrás escuchado
              alguna vez el término Jackpot pero, ¿sabes de qué se trata y lo fácil que es poder
              llegar a ganar uno de estos?
            </p>
            <p className='text982T'>
              Pues muy sencillo. Aquí en Codere te la ponemos cortita y al pie para que la próxima
              vez que entres en tu cuenta de Casino vayas directamente a estos juegos que pueden
              darte un premio brutal.
            </p>
          </div>
          {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

          <Row className='casino-row'>
            {games.jackpots.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
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
          <h2 className='PageH2TitleSeoPages923'>
            ¿Qué es un jackpot y cuales son sus diferentes tipos?
          </h2>
          <p className='text982T'>
            Un Jackpot o bote acumulado es el premio máximo que una slot puede dar a un jugador.
            Para conseguirlo tienes que mirar si la tragaperra dispone de un bote superior al que
            paga como máximo dicho juego. A partir de ahí ya es cuestión de suerte ya que
            necesitarás conseguir que los símbolos del Jackpot aparezcan en la misma línea de juego.
            Si logras pillar estos símbolos tendrás la ansiada recompensa.
          </p>

          <ul className='seo_list'>
            <li>
              Jackpot fijos: Son botes en los cuales la cantidad en juego no tiene variación. Esta
              cantidad siempre se mantendrá sin importar si juegas más veces.
            </li>
            <li>
              Jackpot progresivo: Son los premios acumulados que pueden ir creciendo cada vez más.
              Estos Jackpots crecerán de acuerdo un porcentaje de la cantidad que tú sigas jugando
              en esta slot. ¡No pierdas de vista este tipo de Jackpots!
            </li>
          </ul>
          <p className='text982T'>
            Pero te preguntarás ¿Cuáles son las slots de Codere en donde puedo encontrar esos
            famosos Jackpots? Pon mucha atención y no olvides estos juegos:
          </p>
          <ul className='seo_list'>
            <li>
              Age of the Gods God of Storms y Age of The Gods Mighty Midas: La mítica saga de los
              dioses en donde puedes disfrutar sus diferentes juegos y llevarte uno de los grandes
              premios.
            </li>
            <li>
              Gladiator Road to Rome: Una aventura épica en donde el máximo luchador buscará
              conseguir la gloria en territorio romano.
            </li>
            <li>
              Jackpot Bells: Una espectacular slot que te puede hacer ganar con su mezcla de sabores
              y frutas de todos colores.
            </li>
            <li>
              Pharaohs Treasure Deluxe: El antiguo egipto no solamente tiene grandes faraones, es
              más tiene algo mucho más grande, y es un Jackpot progresivo
            </li>
            <li>
              Jackpot Giant: Si de gigantes hablamos, este Jackpot es uno de los más tochos y todo
              es gracias a que está resguardado por un tío que es bastante grandulón.
            </li>
          </ul>
          <div className='col-12  RegistrateMobBtn mt-3'></div>
          <h2 className='PageH2TitleSeoPages923'>
            Tu oportunidad con los jackpots es todos los días
          </h2>
          <p className='text982T'>
            Ahora que ya sabes lo que son los Jackpots y los diferentes juegos, también tienes que
            saber dónde y cuándo puedes localizar estos botes. No hace falta que hagas una gran
            búsqueda, ni que pongas una alarma para pillar el día, ya que puedes encontrarlos en la
            sección de Casino todos nuestros Jackpots diarios. Sí, diarios, no hace falta que
            esperes a un día exacto de la semana para que puedas pillar ese premio que tanto
            quieres, solo tienes que tener la suerte que todos necesitamos y acertar la línea
            exacta.
          </p>
          <a name='anchor2'></a>
          <h2 className='PageH2TitleSeoPages923'>Consejos para llevarte el gato al agua</h2>
          <p className='text982T'>
            Seguramente con todo lo que has leído lo primero que harás será comenzar a jugar uno de
            los juegos que te hemos recomendado, pero antes de eso pon atención a estos consejos que
            sin duda te serán muy útiles.
          </p>
          <p className='text982T'>
            El problema de los Jackpots es que solo se entregan cada cierto tiempo, por lo que es
            muy difícil ganarlos. Nuestro primer consejo es: No aferrarse con ganar ese premio
            máximo cueste lo que cueste.
          </p>
          <p className='text982T'>
            Algunos aconsejan también jugar a los Jackpots de tipo progresivo ya que hay más
            posibilidades de que salgan en comparación con las slots que cuestan menos dinero. Pero,
            sin duda, lo mejor es apostar al juegos que más conozcas y que mejor se adapte a tus
            necesidades. En cualquier caso, no olvides que siempre hay que jugar con cabeza y nunca
            abusar del tiempo y/o la cantidad de dinero con la que se puede jugar.
          </p>

          <a name='anchor3'></a>
          <h2 className='PageH2TitleSeoPages923'>
            El jackpot más grande en españa se ganó en codere
          </h2>
          <p className='text982T'>
            Si eres de los que piensas que hasta que no lo veas no lo crees, tienes que conocer esta
            gran historia que se dio con uno de los jugadores de Casino en Codere.es En enero de
            2020 un usuario se puso a jugar de forma habitual su slot preferida de Gladiator Road to
            Rome sin saber que ese día batiría uno de losa{' '}
            <a
              className='text982T'
              href='https://www.yogonet.com/latinoamerica/noticias/2019/08/12/79979-codere-entrego-el-mayor-premio-online-de-su-historia'>
              records más grandes para un jugador de Jackpots.
            </a>
          </p>
          <p className='text982T'>
            Anteriormente el jugador español que se había llevado el premio más grande consiguió un
            acumulado de 130.000€ euros. Esta vez la historia se repetiría, pero con un incremento
            brutal de más de 10 veces en la recompensa. El tiro de la suerte fue sacando 9 símbolos
            de corona dorada, lo que provocó la fatídica victoria del bote progresivo. El premio que
            se llevó a casa el millonario afortunado fue de 1.510.172,82 €, batiendo todos los
            récords anteriores.
          </p>
          <div className='col-12  RegistrateMobBtn mb-5 mt-5'>
            <a
              rel='nofollow'
              className='registrate-button  bottomContentPromoButton btn btn-primary'
              href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
              Regístrate
            </a>
          </div>

          <p className='text982T'>
            <strong>
              Si quieres convertirte en el próximo ganador, no te lo pienses más, cruza los dedos y
              comienza tu siguiente partida, porque en Codere ganar es Descomplicado.
            </strong>
          </p>
          {/* end */}
        </div>
      </div>
      {/*container end div*/}
    </>
  );
};

export default Jackpots;
