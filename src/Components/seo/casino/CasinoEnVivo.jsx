import { useEffect } from 'react';
import { React } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, Col, NavLink, Container, Row, Table, Nav } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import games from './JSON/games.json';
import TableOfContents from '../TableOfContents';
import Floating from '../Floating';
import { Link } from 'react-router-dom';

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
          text: 'Sí. Puedes disfrutar de todo el Casino en vivo de desde tu móvil y cualquier dispositivo en la app de o en Codere.es.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En qué consisten los juegos de Casino en vivo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los juegos de Casino en vivo son una experiencia única y real en la que puedes vivir la sensación de un casino real',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo jugar en Casino en vivo en Codere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simplemente tienes que tener una cuenta en Codere y confiar en tu ritual para jugar en nuestro casino en vivo.',
        },
      },
    ],
  };

  const table_of_contents_list = [
    {
      title: 'Juegos de casino en Vivo',
      id: 'juegos',
    },
    {
      title: 'Chatea en directo con crupiers y jugadores',
      id: 'chatea',
    },
    {
      title: 'Preguntas frecuentes sobre el Casino en vivo',
      id: 'preguntas',
    },
  ];

  const juegos = {
    id: 'juegos',
    h2: 'Juegos de casino en Vivo',
    inner: [
      {
        h3: 'Ruleta Coderista',
        text: 'Es la ruleta propia y exclusiva de Codere.es. Una ruleta en la que contarás con los crupieres de habla hispana más amables y un chat en vivo con otros jugadores que son una auténtica familia.',
      },
      {
        h3: 'Quantum Roulette',
        text: 'Es un juego de apuestas de cuotas fijas y con una ruleta en 3D. Además, añade una función de multiplicador de premios pero solo para las apuestas directas.',
      },
      {
        h3: 'Casiopea Ruleta',
        text: 'Es una de las ruletas más famosas del mundo. Una ruleta con un único cero en su mesa: la más clásica y popular',
      },
      {
        h3: 'Express Ruleta',
        text: 'Descubre las características especiales de esta ruleta en la que vivirás la experiencia de un casino online.',
      },
      {
        h3: 'Slingshot Roulette',
        text: 'Es una ruleta que no cuenta con un crupier de carne y hueso. En su lugar se usa una mesa automatizada que puede hacer girar el cilindro hasta 100 veces cada hora.',
      },
    ],
  };

  const chatea = {
    id: 'chatea',
    h2: 'Chatea en directo con crupiers y jugadores ',
    p: 'En la experiencia única del Casino en vivo de Codere podrás chatear con crupieres como si estuvieras en un casino real. Podrás tener conversaciones, oír sus consejos e incluso chatear junto a ellos.',
    p2: 'En el Casino en vivo de Codere también tendrás la oportunidad de chatear en directo con el resto de jugadores que están en tu partida. Podrás escribir mensajes y comentarios que, además de ser leídos por los demás usuarios, también serán respondidos por los crupieres.',
  };

  const preguntas = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre el Casino en vivo ',
    inner: [
      {
        h3: '¿Puedo jugar en un casino en vivo en mi dispositivo móvil?',
        text: 'Sí. Puedes disfrutar de todo el Casino en vivo de desde tu móvil y cualquier dispositivo en la app de o en Codere.es.',
      },
      {
        h3: '¿En qué consisten los juegos de Casino en vivo?',
        text: 'Los juegos de Casino en vivo son una experiencia única y real en la que puedes vivir la sensación de un casino real',
      },
      {
        h3: '¿Cómo jugar en Casino en vivo en Codere? ',
        text: 'Simplemente tienes que tener una cuenta en Codere y confiar en tu ritual para jugar en nuestro casino en vivo. ',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>El mejor Casino en Vivo de España » Juega Online | Codere®</title>

        <meta
          name='description'
          content='Codere España tiene la mejor experiencia de casino online en vivo Participa en la gran variedad de juegos como Ruleta o BlackJack ¡Juega y diviértete!'
        />
        <link
          rel='canonical'
          href='https://www.codere.es/casino/casino-en-vivo'
        />
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>

      <Floating
        text='Gran Diversión en Vivo'
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

      <Container>
        <div>
          <h1 className='PageH1TitleSeoPages923 mt-3'>
            El Casino en Vivo #1 de España está en Codere
          </h1>
          <p>
            Los juegos de mesas de <Link to={'/casino'}>casino</Link> en vivo brindan una
            experiencia más inmersiva y realista. Puedes disfrutar de todas las ruletas en directo,
            blackjack y mucho más, con tu dispositivo móvil, en tu Tablet u ordenador.
          </p>
        </div>
        {!props.flag ? <TableOfContents table={table_of_contents_list} /> : null}

        <div
          id={juegos.id}
          className='mt-4'>
          <h2>{juegos.h2}</h2>
          <Row className='casino-row'>
            {games.casino_live
              .slice(0, !props.flag ? games.casino_live.length : 4)
              .map((game, k) => (
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
                key={k}
                eventKey={k}>
                <Accordion.Header as='h3'>{game.h3}</Accordion.Header>
                <Accordion.Body>{game.text}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div
          id={chatea.id}
          className='mt-4'>
          <h2>{chatea.h2}</h2>
          <p>{chatea.p}</p>
          <p>{chatea.p2}</p>
        </div>

        <div
          id={preguntas.id}
          className='mt-4'>
          <h2>{preguntas.h2}</h2>
          <Accordion>
            {preguntas.inner.map((question, k) => (
              <Accordion.Item
                key={k}
                eventKey={k}>
                <Accordion.Header as='h3'>{question.h3}</Accordion.Header>
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
    </>
  );
};

export default CasinoEnVivo;
