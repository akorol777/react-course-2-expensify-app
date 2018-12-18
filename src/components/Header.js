import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

// NavLink это то же что и Nav, но можно добавить activeClassName
// exact - активный пункт по умолчанию, иначе он всегда будет активным

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);