import React, { useState, useEffect } from 'react';

import sportCSS from '../css/sportgames.module.css';
// import { sortByDate } from "../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy, Navigation } from 'swiper';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import 'swiper/css/navigation';

const URL = process.env.REACT_APP_GAMES_API;
const headers = {
  CodereAffiliateApiKey: process.env.REACT_APP_AFFILIATE_API_KEY,
  CodereAffiliateApiSecret: process.env.REACT_APP_AFFILIATE_API_SECRET,
};

const spinnerCss = { margin: 'auto', marginTop: '4rem', marginBottom: '2rem' };

function SportGames() {
  const [data, setData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  // revoke the 1X2 from server side
  useEffect(() => {
    axios.get(URL, { headers }).then((res) => {
      // console.log(res.data);
      setData(
        res.data
          .sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
          .filter((item) => item.Games.length > 0)
          .slice(0, 6),
      );
      // console.log("START: ", START);
      setShowSpinner(false);
    });
  }, []);

  function dateFix(date) {
    let x = new Date(date);
    // console.log(date);
    let day = x.getDate();
    let month = x.getMonth() + 1;
    if (day < 10) day = '0' + x.getDate();
    if (month < 10) day = '0' + x.getMonth();

    return day + '/' + month + '/' + x.getFullYear();
  }

  function getGameHour(date) {
    let x = new Date(date);
    let hours = x.getHours(),
      mins = x.getMinutes();
    if (x.getHours() < 10) hours = '0' + x.getHours();
    if (x.getMinutes() < 10) mins = '0' + x.getMinutes();
    return hours + ':' + mins;
  }

  return (
    <>
      {showSpinner ? (
        <BarLoader
          color='#79c000'
          cssOverride={spinnerCss}
        />
      ) : (
        <div className={sportCSS.sport_games_slider}>
          <>
            <h2
              style={{
                color: '#79c000',
                fontWeight: 700,
                marginBottom: '2vw',
              }}>
              Copa del Mundo
            </h2>
            <Swiper
              modules={[Autoplay, Lazy, Navigation]}
              lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              spaceBetween={25}
              // slidesPerView={isMobile ? 1 : 3}
              slidesPerView={1}
              loop={data.length > 1 ? true : false}>
              {data.map((item, key) => (
                <SwiperSlide
                  key={key}
                  style={{ color: '#fff', fontSize: '1.2rem' }}>
                  <Card
                    className={sportCSS.card}
                    bg='dark'>
                    <div className={sportCSS.startdate}>
                      <span>{dateFix(item.StartDate)}</span>
                      <span>{getGameHour(item.StartDate)}</span>
                    </div>
                    <div className={sportCSS.row + ' row'}>
                      <div className={sportCSS.col + ' col-4'}>
                        <img
                          style={{
                            width: 'auto',
                            padding: '8px',
                            marginBottom: '.25rem',
                          }}
                          src={
                            'https://www.codere.es/copaflags/' +
                            item.Games[0].Results[0].Name +
                            '.png'
                          }
                        />
                        <Card.Link
                          className={sportCSS.url}
                          href={
                            'https://m.apuestas.codere.es/deportes/#/HomePage?addbet=' +
                            item.Games[0].Results[0].NodeId
                          }>
                          <div className={sportCSS.frame}>
                            <div>
                              {item.Games[0].Results[0].Name.includes('Sur')
                                ? 'Corea del S'
                                : item.Games[0].Results[0].Name}
                            </div>

                            <div>{parseFloat(item.Games[0].Results[0].Odd).toFixed(2)}</div>
                          </div>
                        </Card.Link>
                      </div>
                      <div
                        className={sportCSS.vs + ' col-4'}
                        style={{
                          fontSize: '2rem',
                          paddingTop: '0',
                        }}>
                        vs
                        <Card.Link
                          className={sportCSS.url}
                          href={
                            'https://m.apuestas.codere.es/deportes/#/HomePage?addbet=' +
                            item.Games[0].Results[1].NodeId
                          }>
                          <div className={sportCSS.frame}>
                            <div
                              style={{
                                fontSize: '1.2rem',
                                marginTop: '1.4rem',
                              }}>
                              X
                            </div>
                            <div style={{ fontSize: '1.2rem' }}>
                              {parseFloat(item.Games[0].Results[1].Odd).toFixed(2)}
                            </div>
                          </div>
                        </Card.Link>
                      </div>

                      <div className={sportCSS.col + ' col-4'}>
                        <img
                          style={{
                            width: 'auto',
                            padding: '8px',
                            marginBottom: '.25rem',
                          }}
                          src={
                            'https://www.codere.es/copaflags/' +
                            item.Games[0].Results[2].Name +
                            '.png'
                          }
                        />
                        <div className={sportCSS.frame}>
                          <Card.Link
                            className={sportCSS.url}
                            href={
                              'https://m.apuestas.codere.es/deportes/#/HomePage?addbet=' +
                              item.Games[0].Results[2].NodeId
                            }>
                            <div>
                              {item.Games[0].Results[2].Name.includes('Sur')
                                ? 'Corea Rep.'
                                : item.Games[0].Results[2].Name}
                            </div>
                            <div>{parseFloat(item.Games[0].Results[2].Odd).toFixed(2)}</div>
                          </Card.Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      )}
    </>
  );
}

export default SportGames;
