import React from 'react';

import ProductsContext from './ProductsContext';

class ProductDetail extends React.Component {

  renderProduct = (value) => {
    const productId = Number.parseInt(this.props.match.params.productId);
    const product = value.products.find(p => p.id === productId);
    if (!product) {
      return (<h1>Product not found</h1>);
    }
    return (
     <section>
       <h1>{product.name}</h1>
       <p>{product.description}</p>
     </section>
    );
  }

  render() {
    return (
      <ProductsContext.Consumer>
        {this.renderProduct}
      </ProductsContext.Consumer>
    )
  }
}

export default ProductDetail;
