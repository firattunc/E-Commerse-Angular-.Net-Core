import React from 'react';

class Product extends React.Component {
  constructor(props:any) {
    super(props);
    this.props=props;
  }
  props = {      
    name: '',
    price: 0,
    imgUrl: '',
  };
  public render() {
    return (
      <div className="product">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <a href="detail.html">
                <img src={this.props.imgUrl} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="back">
              <a href="detail.html">
                <img src="img/product1_2.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <a href="detail.html" className="invisible">
          <img src={this.props.imgUrl} alt="" className="img-fluid" />
        </a>
        <div className="text">
          <h3>
            <a href="detail.html">{this.props.name}</a>
          </h3>
          <p className="price">
            <del></del>${this.props.price}
          </p>
          <p className="buttons">
            <a href="detail.html" className="btn btn-outline-secondary">
              View detail
            </a>
            <a href="basket.html" className="btn btn-primary">
              <i className="fa fa-shopping-cart"></i>Add to cart
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default Product;
