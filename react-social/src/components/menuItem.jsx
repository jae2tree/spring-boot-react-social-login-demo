import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  const {menu} = props;

  return (
    <>
      <NavLink to={`/${menu}`} className="navlink" activeClassName="selectedNavLink">{menu}</NavLink>
    </>
  )
}

export default MenuItem;