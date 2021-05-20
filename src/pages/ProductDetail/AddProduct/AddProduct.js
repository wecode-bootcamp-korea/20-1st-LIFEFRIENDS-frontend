import React, { Component } from 'react';
import AddProductTitle from './AddProductTitle/AddProductTitle';
import AddProductPoint from './AddProductPoint/AddProductPoint';
import AddProductSize from './AddProductSize/AddProductSize';
import './AddProduct.scss';

class AddProduct extends Component {
  render() {
    const { key, copiedproductData } = this.props;
    const { product_id, cost, name, size } =
      copiedproductData && copiedproductData.productdetail;
    return (
      <div className="addProduct">
        <AddProductTitle name={name} cost={cost} />
        <AddProductPoint />
        <AddProductSize product_id={product_id} size={size} cost={cost} />
      </div>
    );
  }
}

export default AddProduct;
