import React from 'react';
import ProductsContext from './ProductsContext';
import { NavLink } from 'react-router-dom';
import AddProductLink from './AddProductLink';
const ProductsList = props =>
  <div className="products-list">
    <AddProductLink />
    <ProductsContext.Consumer>
      {value => value.products.map(product =>
        <NavLink to={`/products/${product.id}`} activeClassName="is-selected" exact={true} key={product.id}>
           {product.name}
        </NavLink>
      )}
    </ProductsContext.Consumer>
  </div>

;

export default ProductsList;
