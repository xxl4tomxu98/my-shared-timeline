import React from 'react';
import { NavLink } from 'react-router-dom';


function AddProductLink(props) {
  return (
    <NavLink to="/products/new" activeClassName="is-selected">
      New product
    </NavLink>

  );
}

export default AddProductLink;
