import React, { Component } from 'react';
import AddProductTitle from './AddProductTitle/AddProductTitle';
import AddProductPoint from './AddProductPoint/AddProductPoint';
import AddProductSize from './AddProductSize/AddProductSize';
import AddProductResults from './AddProductResults/AddProductResults';
import './AddProduct.scss';

class AddProduct extends Component {
  render() {
    return (
      <div className="addProduct">
        <AddProductTitle />
        <AddProductPoint />
        <AddProductSize />
        <AddProductResults />
      </div>
    );
  }
}

export default AddProduct;
