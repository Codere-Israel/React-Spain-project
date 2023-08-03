import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import './eventos-styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigations from '../Navigations';
import Floating from '../Floating';
import { useEffect } from 'react';

export const backTopTop = () => {
  return (
    <div className='scroll'>
      <ScrollToTop
        smooth
        component={<FontAwesomeIcon icon={faChevronUp} />}
      />
    </div>
  );
};

export default function EventosDeportivos(props) {
  const directions = ['left', 'down', 'right', 'left'];
  const prefix = 'https://www.codere.es/Spain/assets/seoPages/sports/';

  const title = 'Apuesta en los mejores eventos desde España | Codere®';
  const description =
    'Encuentra aquí las guías para apostar en línea a tus eventos deportivos favoritos al rededor del mundo. Juega con Codere.';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    top_games: [
      {
        img: 'Soccer/soccer-promo',
        url: '/eventos-deportivos/apuestas-mundial-fifa',
        h2: 'consejos para apostar en el Mundial',
        game: 'Mundial',
      },
      {
        img: 'Basketball/balenco-promo',
        url: '/eventos-deportivos/apuestas-mundial-baloncesto',
        h2: 'apuestas de la Copa del Rey Baloncesto​',
        game: 'Basketball',
      },
      {
        img: 'F1/f1-promo',
        url: '/eventos-deportivos/apuestas-grand-prix',
        h2: 'apuestas de Gran Premio de España',
        game: 'Formula1',
      },
      {
        img: 'Esport/esports-promo',
        url: '/eventos-deportivos/apuestas-esport',
        h2: 'Guía de apuestas para Esports',
        game: 'Esports',
      },
    ],
  };

  const cardGenerator = (g, i) => {
    return (
      <Col
        md={6}
        xs={6}
        key={i}>
        <Card className={`eventos_card`}>
          <Link
            style={{ textDecoration: 'unset' }}
            to={g.url}>
            <Card.Header as={'h2'}>{!props.flag ? g.h2 : g.game}</Card.Header>
          </Link>
          <Card.Body>
            <LazyLoadImage src={`${prefix}${g.img}.jpg`} />
          </Card.Body>
          <Card.Footer>
            <Link
              rel='nofollow'
              to={g.url}>
              <Button
                as='span'
                style={{
                  width: '100%',
                  fontWeight: 600,
                  borderRadius: '1rem',
                }}>
                VER INFORMACIÓN
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/eventos-deportivos'
        />
        <meta
          name='description'
          content={description}
        />
      </Helmet>
      <div id='eventos'>
        <Floating text='Deportes En Vivo' />
        <div
          className='top-bg-seo'
          style={{
            backgroundImage: `url(${prefix}general-${!props.flag ? 'desktop' : 'mobile'}.jpg)`,
            backgroundSize: 'cover',
          }}></div>

        <h1 style={{ color: '#fff', textAlign: 'center', padding: '1.5rem' }}>
          Los mejores Eventos Deportivos estan en Codere
        </h1>
        <Container className='eventos-container'>
          <Row>
            {data.top_games.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
