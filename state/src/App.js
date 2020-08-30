import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
          status: true,
        },
        {
          id: "3",
          name: "Xiaomi Redmi 5",
          price: 3000000,
          status: true,
        },
      ],
      isActive: true,
    };
  }

  onSetState= () =>{
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      })
    }else{
      this.setState({
        isActive: true
      })
    }
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      if (product.status) {
        return (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <span className="label label-danger">{product.price} VNĐ</span>
            </td>
          </tr>
        );
      }
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">State</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>{elements}</tbody>
              </table>
              
              <button type="button" className="btn btn-success" onClick={this.onSetState}>
                Active: {this.state.isActive === true ? '1':'2'}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
