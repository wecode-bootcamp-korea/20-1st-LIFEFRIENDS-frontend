import React, { Component } from 'react';
import AddProductTitle from './AddProductTitle/AddProductTitle';
import AddProductPoint from './AddProductPoint/AddProductPoint';
import AddProductSize from './AddProductSize/AddProductSize';
import AddProductResults from './AddProductResults/AddProductResults';
import './AddProduct.scss';

class AddProduct extends Component {
  render() {
    const { key, copiedproductData } = this.props;
    console.log(copiedproductData);
    const { product_id, cost, name, size } = copiedproductData.productdetail;
    return (
      <div className="addProduct">
        <AddProductTitle name={name} cost={cost} />
        <AddProductPoint />
        <AddProductSize size={size} cost={cost} />
        <AddProductResults cost={cost} product_id={product_id} />
      </div>
    );
  }
}

export default AddProduct;
