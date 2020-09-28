import React from 'react';

import ProductsContext from './ProductsContext';

const NewProductForm = () =>
  <ProductsContext.Consumer>
    {value =>
      <form onSubmit={value.addProduct}>
        <div>
          <input onChange={value.updateNewProductName}
                 type="text"
                 placeholder="Name" />
        </div>
        <div>
          <textarea onChange={value.updateNewProductDescription}
                    placeholder="Description">
          </textarea>
        </div>
        <div>
          <button type="submit">Create new product</button>
        </div>
      </form>
    }
  </ProductsContext.Consumer>
;

export default NewProductForm;
