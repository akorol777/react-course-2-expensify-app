import React from 'react';
import {NavLink} from 'react-router-dom';

// NavLink это то же что и Nav, но можно добавить activeClassName
// exact - активный пункт по умолчанию, иначе он всегда будет активным

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  </header>
);

export default Header;