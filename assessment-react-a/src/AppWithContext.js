import React from 'react';
import ProductsContext from './ProductsContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
        { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
        { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
      ],
      newProduct: {},
      addProduct: this.addProduct,
      updateNewProductName: this.updateNewProductName,
      updateNewProductDescription: this.updateNewProductDescription,
    }

  }

  addProduct = e => {
    e.preventDefault();
    const product = { ...this.state.newProduct };
    product.id = this.state.products.length + 1;
    const products = this.state.products;
    products.push(product);
    this.setState({
      products,
      newProduct: {},
    });
  }

  updateNewProductName = e => {
    this.setState({
      newProduct: {
        name: e.target.value,
        description: this.state.newProduct.description,
      },
    });
  }

  updateNewProductDescription = e => {
    this.setState({
      newProduct: {
        name: this.state.newProduct.name,
        description: e.target.value
      },
    });
  }

  render() {
    return (
      <ProductsContext.Provider value={this.state}>
        <App  />
      </ProductsContext.Provider>

    );
  }
}

export default AppWithContext;
