// import React from 'react';
import { menuItems } from '../data/menuItems';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeStyle = {
    color: '#79c000',
  };
  // const checkActive = (match, location) => {

  //     console.log("test");
  //     //some additional logic to verify you are in the home URI
  //     if(!location) return false;
  //     const {pathname} = location;
  //     console.log(pathname);
  //     return pathname === "/";
  // }
  // let activeClassName = 'underline';
  return (
    <nav className='codereInnerMenuSeoP'>
      <ul className='codereInnerMenuSeoPmenus'>
        {menuItems.map((menu, index) => {
          return (
            <li
              className=''
              key={index}>
              <NavLink
                className={'codereInnerMenuItems'}
                to={menu.url}
                end>
                <div className={'codereInnerMenuItemsT64'}>
                  <img
                    className='navBarImage'
                    src={menu.iconUrl}
                    alt=''
                  />
                  <span className='navBarMenuTitle'> {menu.title}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
