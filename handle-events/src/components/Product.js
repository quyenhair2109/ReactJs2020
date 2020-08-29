import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Product extends Component {
  constructor(props){
    super(props);
    this.onSeeDetail = this.onSeeDetail.bind(this);
  }
  onAddToCart(text){
    console.log(text);
  }
  onSeeDetail(){
    console.log('xem chi tiết');
  }

  render(){
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img alt=""/>
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>
                {this.props.price}
              </p>
              <p>
                {/* event có truyền tham số */}
                <a className="btn btn-primary" onClick={()=>{this.onAddToCart('mua thành công')}}>Mua ngay</a>
                {/* event dùng constructor */}
                <a className="btn btn-primary" onClick={this.onSeeDetail}>Chi tiết</a>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Product;
