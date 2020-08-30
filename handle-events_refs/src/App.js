import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Product from "./components/Product";
class App extends Component {
  alert123() {
    alert("đây là app compornent");
  }

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onAddProduct = () => {
    console.log(this.myRef);
  };
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

    let elements = products.map((product, index) => {
      if (product.status) {
        return (
          <Product key={product.id} price={product.price}>
            {product.name}
          </Product>
        );
      } else {
        return "";
      }
    });
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
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={this.myRef}
                    />
                  </div>
                  <button
                    onClick={this.onAddProduct}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.alert123}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
