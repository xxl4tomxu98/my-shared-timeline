import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Introduction from './Introduction';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import NewProductForm from './NewProductForm';

function App() {
  return (
    <main>
      <BrowserRouter>
        <ProductsList />
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route exact path="/products/new" component={NewProductForm}/>
          <Route exact path="/products/:productId" render={(props) => <ProductDetail {...props}/>} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>

  );
}

export default App;
