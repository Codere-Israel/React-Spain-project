import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Floating from '../Floating';
import { useEffect } from 'react';
import axios from 'axios';

export default function EventosDeportivos(props) {
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AFFILIATE_API, {
        headers: {
          CodereAffiliateApiKey: process.env.REACT_APP_AFFILIATE_KEY,
          CodereAffiliateApiSecret: process.env.REACT_APP_AFFILIATE_SECRET,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const directions = ['left', 'down', 'right', 'left'];
  const prefix = 'https://www.codere.es/Spain/assets/seoPages/sports/';

  const title = 'Cuotas Deportivas » Fútbol / NFL / F1 / UFC | Codere®';
  const description =
    'Conoce acerca del mundo de las apuestas deportivas online, juega en línea desde España y sigue los partidos de las competencias más importantes';
  const indexes = [
    {
      img: 'futbol-promo',
      url: '/cuotas-deportivas/apuestas-futbol',
      h2: 'Apuestas de fútbol',
      game: 'Fútbol',
    },
    {
      img: 'balenco-promo',
      url: '/cuotas-deportivas/apuestas-baloncesto',
      h2: 'Apuestas de baloncesto y NBA',
      game: 'NBA',
    },
    {
      img: 'tenis-promo',
      url: '/cuotas-deportivas/apuestas-tenis',
      h2: 'Apuestas de Tenis',
      game: 'Tenis',
    },
    {
      img: 'ciclismo-promo',
      url: '/cuotas-deportivas/apuestas-ciclismo',
      h2: 'Apuestas de Ciclismo',
      game: 'Ciclismo',
    },
    {
      img: 'f1-promo',
      url: '/cuotas-deportivas/apuestas-formula1',
      h2: 'apuestas de Gran Premio de España',
      game: 'Formula1',
    },
    {
      img: 'ufc-promo',
      url: '/cuotas-deportivas/apuestas-ufc',
      h2: 'Apuestas de UFC',
      game: 'UFC',
    },
  ];

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
            <LazyLoadImage src={`${prefix}promos/${g.img}.jpg`} />
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
          href='https://www.codere.es/cuotas-deportivas'
        />
        <meta
          name='description'
          content={description}
        />
      </Helmet>
      <div id='eventos'>
        <Floating text='Cuotas Deportivas' />
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
            {indexes.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
