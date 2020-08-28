import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Header></Header>
      
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product/>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
