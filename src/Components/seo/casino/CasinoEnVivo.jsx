import { useEffect } from 'react';
import { React } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Container, Row, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';

const CasinoEnVivo = (props) => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Puedo jugar en un casino en vivo en mi dispositivo móvil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Puedes disfrutar de todo el Casino en vivo de Codere desde tu móvil y cualquier dispositivo en la app de Codere o en Codere.es.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En qué consisten los juegos de Casino en vivo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los juegos de Casino en vivo son una experiencia única y real en la que puedes vivir la sensación de un casino real.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo jugar en Casino en vivo en Codere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simplemente tienes que tener una cuenta en Codere y confiar en tu ritual para jugar en nuestro casino en vivo. ¡Así de fácil!',
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: '¿Cómo funciona el Casino en vivo?',
      id: 'anchor1',
    },
    {
      title: 'Chatea en directo con crupiers y jugadores',
      id: 'anchor2',
    },
    {
      title: 'Juegos de Casino en vivo',
      id: 'anchor3',
    },
    {
      title: 'Preguntas frecuentes sobre el Casino en vivo',
      id: 'anchor4',
    },
  ];

  const preguntas = {
    id: 'anchor4',
    h2: 'Preguntas frecuentes sobre el Casino en vivo',
    questions: [
      {
        h3: '¿Puedo jugar en un casino en vivo en mi dispositivo móvil?',
        answer:
          'Sí. Puedes disfrutar de todo el Casino en vivo de Codere desde tu móvil y cualquier dispositivo en la app de Codere o en Codere.es.',
      },
      {
        h3: '¿En qué consisten los juegos de Casino en vivo?',
        answer:
          'Los juegos de Casino en vivo son una experiencia única y real en la que puedes vivir la sensación de un casino real',
      },
      {
        h3: '¿Cómo jugar en Casino en vivo en Codere?',
        answer:
          'Simplemente tienes que tener una cuenta en Codere y confiar en tu ritual para jugar en nuestro casino en vivo. ¡Así de fácil!',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>El mejor Casino en Vivo de España » Juega Online | Codere®</title>

        <meta
          name='description'
          content='Codere España tiene la mejor experiencia de casino online en vivo. Participa en la gran variedad de juegos como Ruleta o BlackJack. ¡Juega y diviértete!'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/casino-en-vivo'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating
        text='¡El mejor Casino En Vivo!'
        juega={true}
      />
      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/casino-en-vivo/casinoEnVivo${
            props.flag ? 'Mobile' : ''
          }.webp)`,
          backgroundSize: 'cover',
        }}></div>

      <h1 className='PageH1TitleSeoPages923 mt-3'>Bienvenido al casino live de Codere</h1>
      <Container fluid='md'>
        <Row>
          <div>
            <p>
              El Casino en Vivo de Codere España te permitirá disfrutar de una experiencia real de
              Casino sin moverte del sofá de tu casa. Puedes disfrutar de todas las ruletas en vivo,
              blackjack y mucho más, con tu dispositivo móvil, en tu Tablet u ordenador.
            </p>
            <p>
              No habrá nadie más que tú y el crupier. Sentirás que estás en tu Casino favorito. Y
              todo con la seguridad de jugar en el Casino de Codere. ¡Descubre ahora nuestro Casino
              en Vivo, así de fácil!
            </p>
          </div>
          {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}
          <div
            id='anchor1'
            className='mt-3'>
            <h2>¿Cómo funciona el Casino en vivo?</h2>
            <p>
              Si lo que buscas es vivir una experiencia única como si de un Casino real se tratara,
              el Casino en vivo de Codere es tu sitio. Podrás disfrutar de todos los slots y jugar
              al blackjack online desde tu app de Codere. Eres tú quien decide cuándo jugar, en
              dónde y la manera de divertirte.
            </p>
            <p>
              La manera para hacerlo es descargando la app de Codere o entrando en Codere. Es,
              recarga tu perfil y confía en tu ritual para disfrutar de todos nuestros juegos en
              vivo. ¡Así de fácil!
            </p>
          </div>
        </Row>
        <Row className='casino-row'>
          {games.casino_live.slice(0, !props.flag ? games.slots.length : 4).map((game, k) => (
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

        <div id='anchor2'>
          <h2>Chatea en directo con crupiers y jugadores </h2>
          <p>
            En la experiencia única del Casino en vivo de Codere podrás chatear con crupiers como si
            estuvieras en un casino real. Podrás tener conversaciones, oír sus consejos e incluso
            chatear junto a ellos.
          </p>
          <p>
            En el Casino en vivo de Codere también tendrás la oportunidad de chatear en directo con
            el resto de jugadores que están en tu partida. Podrás escribir mensajes y comentarios
            que, además de ser leídos por los demás usuarios, también serán respondidos por los
            crupiers
          </p>
        </div>

        <div id='anchor3'>
          <h2>Juegos de Casino en vivo</h2>
          <p>
            En el Casino en vivo de Codere tenemos todo tipo de juegos, pero sin duda la gran
            estrella es nuestra Ruleta en vivo. Tenemos varias ruedas giratorias como son las
            Ruletas en vivo, la Ruleta Coderista, Quantum Roulette, Casiopea Ruleta, Express Ruleta
            y Slingshot Roulette
          </p>
          <p>Vamos a adentrarnos un poco más en el mundillo de las ruletas en vivo:</p>

          <ul className='seo_list'>
            <li>
              Ruleta Coderista: Es la ruleta propia y exclusiva de Codere. Una ruleta en la que
              contarás con los crupiers de habla hispana más amables y un chat en vivo con otros
              jugadores, que es una auténtica familia
            </li>
            <li>
              Quantum Roulette: es un juego de apuestas de cuotas fijas y con una ruleta en 3D.
              Además, añade una función de multiplicador de premios pero solo para las apuestas
              directas.
            </li>
            <li>
              Casiopea Ruleta: es una de las ruletas más famosas del mundo. Una ruleta con un único
              cero en su mesa, la más clásica y popular.
            </li>
            <li>
              Express Ruleta: descubre las características especiales de esta ruleta en la que
              vivirás la experiencia de un casino online.
            </li>
            <li>
              Slingshot Roulette: es una ruleta que no cuenta con un crupier de carne y hueso. En su
              lugar se usa una mesa automatizada que puede hacer girar el cilindro hasta 100 veces
              cada hora.
            </li>
          </ul>
        </div>

        <div
          id={preguntas.id}
          className='mt-4'>
          <h2>{preguntas.h2}</h2>
          <Accordion>
            {preguntas.questions.map((question, k) => (
              <Accordion.Item
                key={k}
                eventKey={k}>
                <Accordion.Header as='h3'>{question.h3}</Accordion.Header>
                <Accordion.Body>{question.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className='col-12 mt-3 RegistrateMobBtn'>
          <a
            rel='nofollow'
            className='registrate-button  bottomContentPromoButton btn btn-primary'
            href='https://m.apuestas.codere.es/deportes/#/RegistroESPage'>
            Regístrate
          </a>
        </div>
        {/* end */}
      </Container>
    </>
  );
};

export default CasinoEnVivo;
