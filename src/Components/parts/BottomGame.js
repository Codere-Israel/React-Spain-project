import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-bootstrap';
import React from 'react';
function BottomGame(props) {
  return (
    <NavLink
      href={props.gameLink}
      rel={'nofollow'}>
      <div className='bottom-card'>
        <div className='bottom-box'>
          <div className='game'>
            <img
              src={props.img}
              alt={props.alt}
            />
          </div>
          <div className='logo'>
            <img
              src={props.logo}
              alt={props.logoAlt}
            />
          </div>
        </div>
        <div className='bottom-content'>
          <span className='bottom-game-regis'>
            Juega Ahora
            <FontAwesomeIcon
              id='game-svg'
              icon={faChevronRight}
            />
          </span>
        </div>
        <div className='bottom-game-title'>
          <h3>{props.name}</h3>
        </div>
      </div>
    </NavLink>
  );
}

export default BottomGame;
