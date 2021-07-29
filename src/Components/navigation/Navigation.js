import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../../routes/routes';


const Navigation = () => {
    return (
        <>
         {routes.map((route) => (
        <li className="headerListItem" key={route.path}>
          <NavLink
            to={route.path}
            className="headerLink"
            activeClassName="activeHeaderLink"
            exact={route.exact}
          >
            {route.name}
          </NavLink>
          </li>
         ))}
      </>
    );
}

export default Navigation;