import { Container, Accordion, Image, Placeholder } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { backTopTop } from '../EventosDeportivos';
import './events.css';
import Navigations from '../../Navigations';
import { useEffect, useState } from 'react';
import Floating from '../../Floating';
import TableOfContents from '../../TableOfContents';
import AddTable from '../../AddTable';

export default function Formula(props) {
  const title = 'Guía de apuestas para el Gran premio de España  | Codere®';
  const description =
    'El gran premio de España es una competición automovilística que es válida para el Campeonato Mundial de Fórmula 1.';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo llegar al Circuito de Catalunya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Situado a 32 km del centro de Barcelona, hay diferentes vías para llegar. En coche por la autovía C-17 (salida Montmeló) y la autopista AP-7 (salidas 13, 14 o 15. Las salidas 14 y 15 enlazan con la C-17). En tren Montmeló cuenta con estación por lo que podrás ir en Cercanías desde Barcelona o desde Girona. En días de carrera también contarás con un autobús especial desde el centro de Barcelona por 18€',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde ver el gran premio de España?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Gran Premio de España de Fórmula 1 se podrá ver en directo desde los canales de DAZN.',
        },
      },
    ],
  };

  const prefix = `https://www.codere.es/Spain/assets/seoPages/sports/F1/${
    props.flag ? 'M' : 'D'
  }-Formula1-`;
  const postfix = '.jpg';

  const table_list = [
    {
      title: 'Historia de la carrera',
      id: 'history',
    },
    {
      title: 'Acerca del Circuito de Barcelona-Cataluña',
      id: 'acerca',
    },
    {
      title: 'Preguntas frecuentes sobre el Gran Premio de España',
      id: 'preguntas',
    },
  ];

  const top_par = {
    h1: 'Guía de apuestas el Gran Premio de España',
  };

  const history = {
    id: 'history',
    h2: 'Historia de la carrera',
    p: [
      'El gran premio de España es una competición automovilística que es válida para el Campeonato Mundial de Fórmula 1. El primer gran premio en España se disputó en el año 1913 en un circuito cerca de Madrid. Oficialmente, el GP de España se disputó en Cataluña por primera vez en el año 1923. En 1951, el Gran Premio entró en el calendario de la Fórmula 1.',
      'No fue hasta el año 1991 cuando Barcelona logró tener una Gran Premio de forma permanente en la Fórmula 1. En el año 2006, Fernando Alonso logró la primera victoria para un piloto español en este circuito. Actualmente, el Gran Premio de Cataluña se disputa en el Circuito de Montmeló.',
    ],
  };

  const acerca = {
    id: 'acerca',
    h2: 'Acerca del Circuito de Barcelona-Cataluña',
    p: [
      'Situado en Montmeló, el Circuit de Barcelona-Catalunya del Gran Premio fue inaugurado el 10 de septiembre de 1991. En sus 30 años de vida, el Circuit de Barcelona-Catalunya se ha posicionado como uno de los mejores circuitos permanentes de Fórmula 1 y se ha potenciado como un escenario único para organizar cualquier evento o experiencia gracias a la calidad de sus servicios y a la polivalencia de sus instalaciones.',
      'Este circuito no solo acoge las carreras de Fórmula 1, sino que, además, también acoge el Gran Premio de Moto GP de Cataluña, siendo uno de los circuitos más importantes del mundo automovilístico.',
    ],
    inner: {
      h3: 'Carreras históricas ',
      text: 'El Circuito de Cataluña es uno de los grandes del mundo del automovilismo. Un circuito en dónde más carreras se han disputado y del que recogemos los momentos más icónicos de su historia:',
      ul: [
        {
          bolded: 'En el año 2007,',
          text: 'el Gran Premio de Cataluña entrará a la historia de la Fórmula 1 por contar con 140.700 espectadores en sus gradas. Tras los dos títulos consecutivos de Fernando Alonso, la población española inundó las gradas de Montmeló con la intención de ver ganar al piloto asturiano. No fue así, pero se dejó una imagen histórica.',
        },
        {
          bolded: 'En 1991',
          text: 'se vivió un hecho histórico en lo que era la presentación del circuito como habitual de la Fórmula 1. La imagen de Ayrton Senna y Nigel Mansell en paralelo en la recta de meta, mirándose el uno al otro mientras peleaban por la victoria ilustró un momento muy especial en la carrera deportiva de ambos.',
        },
        {
          bolded: 'Max Verstappen',
          text: 'siempre recordará el Circuito de Cataluña con un gran cariño. El piloto neerlandés se convirtió en el más joven en lograr salir campeón de un circuito de fórmula 1 con 18 años, 7 meses y 15 días. Un récord que será muy complicado de superar y más tras el cambio de normas de que ningún piloto podrá competir antes de la mayoría de edad.',
        },
        {
          bolded: 'El comienzo de Ferrari:',
          text: 'Era el año 1996 y la gesta de Michael Schumacher con Ferrari será recordada por siempre en Barcelona. Sería el inicio de la leyenda del piloto y de la escudería en la Fórmula 1. Con un coche menos veloz que sus rivales, el alemán demostró en pocos años porque era considerado el “Barón Rojo”.',
        },
        {
          bolded: 'Fernando Alonso',
          text: 'y su victoria en el año 2006. Un hecho histórico que hizo vibrar a la afición española que por fin veía al asturiano llevarse la victoria en Montmeló. Era la primera vez que un español lograba la victoria en casa en la Fórmula 1.',
        },
      ],
    },
  };

  const ultimos = {
    id: 'ultimos',
    h2: 'Últimos ganadores (10 años)',
    p: 'En Codere te traemos la lista de los últimos 10 ganadores de Fórmula 1 en el Gran Premio de España en Montmeló. Aquí la lista:',
    ul: [
      '2012. Pastor Maldonado - Williams-Renault',
      '2013. Fernando Alonso - Ferrari',
      '2014. Lewis Hamilton - Mercedes',
      '2015. Nico Rosberg - Mercedes',
      '2016. Max Verstappen - Red Bull',
      '2017. Max Verstappen - Red Bull',
      '2018. Max Verstappen - Red Bull',
      '2019. Max Verstappen - Red Bull',
      '2020. Max Verstappen - Red Bull',
      '2021. Max Verstappen - Red Bull',
      '2022. Max Verstappen - Red Bull',
    ],
    inner: [
      {
        h3: 'Pilotos con más victorias',
        p: 'Muchos han sido los que han logrado la victoria en el Gran Premio de España. Pero en Codere te traemos la lista definitiva de los pilotos con más títulos en territorio español.',
        table: {
          th: ['Títulos', 'Piloto', 'Años'],
          tr: [
            ['6 Títulos', 'Michael Schumacher', '1995, 1996, 2001, 2002, 2003, 2004'],
            ['6 Títulos', 'Lewis Hamilton', '2014, 2017, 2018, 2019, 2020, 2021'],
            ['3 Títulos', 'Jackie Stewar', '1969, 1970, 1971'],
            ['3 Títulos', 'Nigel Mansell', '1987, 1991, 1992'],
            ['3 Títulos', 'Alain Prost', '1988, 1990, 1993'],
            ['3 Títulos', 'Mika Häkkinen', '1998, 1999, 2000'],
            ['2 Títulos', 'Emerson Fittipaldi', '1972, 1973'],
            ['2 Títulos', 'Mario Andretti', '1977, 1978'],
            ['2 Títulos', 'Ayrton Senna', '1986, 1989'],
            ['2 Títulos', 'Kimi Räikkönen', '2005, 2008'],
            ['2 Títulos', 'Fernando Alonso', '2006, 2013'],
            ['2 Títulos', 'Max Verstappen', '2016, 2022'],
          ],
        },
      },
      {
        h3: 'Constructores con más victorias',
        p: '',
        table: {
          th: ['Títulos', 'Constructor', 'Años'],
          tr: [
            [
              '12 Títulos',
              'Ferrari',
              '1954, 1974, 1981, 1990, 1996, 2001, 2002, 2003, 2004, 2007, 2008, 2013',
            ],
            ['8 Títulos', 'McLaren', '1975, 1976, 1988, 1989, 1998, 1999, 2000, 2005'],
            ['7 Títulos', 'Mercedes', '2014, 2015, 2017, 2018, 2019, 2020, 2021'],
            ['7 Títulos', 'Williams', '1987, 1991, 1992, 1993, 1994, 1997, 2012'],
            ['6 Títulos', 'Lotus', '1968, 1972, 1973, 1977, 1978, 1986'],
            ['4 Títulos', 'Red Bull', '2010, 2011, 2016, 2022'],
            ['4 Títulos', 'Red Bull', '2010, 2011, 2016, 2022'],
          ],
        },
      },
    ],
  };

  const questions = {
    id: 'preguntas',
    h2: 'Preguntas frecuentes sobre el Gran Premio de España',

    inner: [
      {
        h3: '¿Cómo llegar al Circuit de Catalunya?',
        text: 'Situado a 32 km del centro de Barcelona, hay diferentes vías para llegar. En coche por la autovía C-17 (salida Montmeló) y la autopista AP-7 (salidas 13, 14 o 15. Las salidas 14 y 15 enlazan con la C-17). En tren Montmeló cuenta con estación por lo que podrás ir en Cercanías desde Barcelona o desde Girona. En días de carrera también contarás con un autobús especial desde el centro de Barcelona por 18€',
      },
      {
        h3: '¿Dónde ver el gran premio de España?',
        text: 'El Gran Premio de España de Fórmula 1 se podrá ver en directo desde los canales de DAZN',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel='canonical'
          href='https://www.codere.es/eventos-deportivos/apuestas-grand-prix'
        />
        <meta
          name='description'
          content={description}
        />
        {/* <meta name="robots" content="noindex" /> */}
        <script type='application/ld+json'>{JSON.stringify(json)}</script>
      </Helmet>
      {/* <Navigations index={props.index} type={0} /> */}
      <Floating text='Recorre las pistas' />

      <div
        className='top-bg-seo'
        style={{
          backgroundImage: `url(https://www.codere.es/Spain/assets/seoPages/sports/F1/${
            props.flag ? 'M' : 'D'
          }-Header.jpg)`,
          backgroundSize: 'cover',
        }}></div>

      <Container>
        <div className='event'>
          <Container style={{ marginTop: '2rem' }}>
            <h1 className='header subtitle'>{top_par.h1}</h1>
            {!props.flag ? (
              <TableOfContents
                isFormula={false}
                table={table_list}
              />
            ) : (
              <></>
            )}
            <div
              id={history.id}
              className='mt-4'>
              <h2 className='subtitle'>{history.h2}</h2>
              {history.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}
            </div>

            <LazyLoadImage
              src={prefix + '1' + postfix}
              width='100%'
            />

            <div
              id={acerca.id}
              className='mt-4'>
              <h2 style={{ color: '#79c000' }}>{acerca.h2}</h2>
              {acerca.p.map((pi, k) => (
                <p key={k}>{pi}</p>
              ))}

              <h3>{acerca.inner.h3}</h3>
              <p>{acerca.inner.p}</p>
              <ul>
                {acerca.inner.ul.map((li, k) => (
                  <li key={k}>
                    <p>
                      {li.bolded} {li.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <LazyLoadImage
              src={prefix + '2' + postfix}
              width='100%'
            />

            <div
              className='mt-4'
              id={ultimos.id}>
              <h2>{ultimos.h2}</h2>
              {ultimos.inner.map((i, k) => (
                <div
                  className='mt-3'
                  key={k}>
                  <h3>{i.h3}</h3>
                  <p>{i.p}</p>
                  <AddTable table={i.table} />
                </div>
              ))}
            </div>

            <div
              className='mt-4'
              id={questions.id}>
              <h2>Preguntas frecuentes sobre el Grand Prix</h2>
            </div>
            <Accordion>
              {questions.inner.map((q, k) => (
                <Accordion.Item
                  key={k}
                  eventKey={k + ''}>
                  <Accordion.Header as={'h3'}>{q.h3}</Accordion.Header>
                  <Accordion.Body>{q.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <LazyLoadImage
              src={prefix + '3' + postfix}
              width='100%'
            />
          </Container>
        </div>
      </Container>
    </>
  );
}
