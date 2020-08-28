import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  showInfoProduct(product){
    if (product.status) {
      return <h3>
                id: {product.id} <br/>
                status: {product.status ? 'Ok' : 'not Ok'}
             </h3>
    }
  }
  render(){
    var a = 3, b = 7;
    var product={
      id: '1',
      price: 1000,
      status: true
    };
    var users = [
      {
        id: '1',
        name: 'nguyen van a',
        age: 24
      },
      {
        id: '2',
        name: 'ly thi b',
        age: 32
      },
      {
        id: '3',
        name: 'tran thi c',
        age: 30
      }
    ]
    var elements = users.map((user, index) => {
      return <div key={user.id}>
        <h2>Tên: {user.name}</h2>
        <p>Tuổi: {user.age}</p>
      </div>
    })
    return (
      <div>
        <nav className="nav justify-content-center">
          <a className="nav-link active" href="#">
            Active link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled">
            Disabled link
          </a>
        </nav>
  
        
        <button type="button" className="btn btn-xs btn-success btn-default">button</button>
        
        
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            bootstrap 3 <br/>
            a: {a} <br/>
            b: {b} <br/>
            a + b: {a + b}
            {this.showInfoProduct(product)}
            <br/>
            <hr/>
            {elements}
          </div>
        </div>
        
      </div>
    );
  }
  
}

export default App;
