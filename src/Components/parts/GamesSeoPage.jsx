import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GamesSeoPage(props) {
  return (
    <Container>
      {/* <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink href={`${game_prefix}${game.sponsor} ${game.name}`}>
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.bet.ar/lobby_tiles/" +
                        game.img +
                        ".jpg"
                      }
                    />
                    <div className="hvr">
                      <p>{game.name}</p>
                      <LazyLoadImage src="https://www.codere.bet.ar/assets/seo/jackpotsPlayHoverLogo.svg" />
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
        </Row> */}
    </Container>
  );

  //   const k = useContext(isMobileContext);
  //   if (data === '' || data === false || data === undefined) {
  //     return <div className='errorData'>Error Data!</div>;
  //   } else {
  //     return (
  //       <>
  //         {data.data.map((item, key) => {
  //           if ((item.onlyMobile === true || item.onlyMobile === undefined) && k.isMobile === true) {
  //             return (
  //               <Col
  //                 xs={6}
  //                 lg={2}
  //                 m={2}
  //                 key={key}>
  //                 <div className='test '>
  //                   <div className='test1'>
  //                     <img
  //                       src={item.img}
  //                       alt={item.alt}
  //                       className='test12'
  //                     />
  //                   </div>

  //                   <div
  //                     className='test3'
  //                     style={{
  //                       backgroundRepeat: 'no-repeat',
  //                       backgroundPosition: 'center',
  //                     }}>
  //                     <div className='hoverJuego'>
  //                       <a
  //                         className='test6'
  //                         href={item.link}>
  //                         <img
  //                           className='hoverImageSeoPagesGames'
  //                           src={item.hoverImg}
  //                           alt=''
  //                         />
  //                         {/* <div className="jackpotHoverButton ">{item.hoverBtn}</div> */}
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </Col>
  //             );
  //           } else if (
  //             (item.onlyMobile === false || item.onlyMobile === undefined) &&
  //             k.isMobile === false
  //           ) {
  //             return (
  //               <Col
  //                 xs={6}
  //                 lg={2}
  //                 md={6}
  //                 key={key}>
  //                 <div className='test '>
  //                   <div className='test1'>
  //                     <img
  //                       src={item.img}
  //                       alt={item.alt}
  //                       className='test12'
  //                     />
  //                   </div>

  //                   <div
  //                     className='test3'
  //                     style={{
  //                       backgroundRepeat: 'no-repeat',
  //                       backgroundPosition: 'center',
  //                     }}>
  //                     <div className='hoverJuego'>
  //                       <a
  //                         className='test6'
  //                         href={item.link}>
  //                         <img
  //                           className='hoverImageSeoPagesGames'
  //                           src={item.hoverImg}
  //                           alt=''
  //                         />
  //                         {/* <div className="jackpotHoverButton">{item.hoverBtn}</div> */}
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </Col>
  //             );
  //           }
  //         })}
  //       </>
  //     );
  //   }
}
export default GamesSeoPage;
