import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Product from "./components/Product";
class App extends Component {
  render() {
    var products = [
      {
        id: "1",
        name: "Iphone 6 plus",
        price: 15000000,
        status: true,
      },
      {
        id: "2",
        name: "Samsung Galaxy S7",
        price: 12000000,
        status: false,
      },
      {
        id: "3",
        name: "Xiaomi Redmi 5",
        price: 3000000,
        status: false,
      },
    ];

    let elements = products.map((product, index) =>{
      if (product.status) {
        return <Product key={product.id} price={product.price}>{product.name}</Product>
      }else{
        return '';
      }
   
    })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Props</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
