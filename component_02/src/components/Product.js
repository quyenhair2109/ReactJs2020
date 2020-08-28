import React, {Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img alt="" src="https://media.4rgos.it/i/Argos/2153591_R_Z001A?w=750&h=440&qlt=70"/>
                    <div className="caption">
                        <h3>Iphone 6 Plus</h3>
                        <p>
                            $ 1600
                        </p>
                        <p>
                            <a className="btn btn-primary">Mua hàng</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;