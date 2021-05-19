import React, { Component } from 'react';
import './AddProductTitle.scss';

class AddProductTitle extends Component {
  render() {
    return (
      <header className="titleBox">
        <div className="addProductTitle">LINE FRENDS X CASETIFY</div>
        <div className="addProductPrice">44,000원</div>
      </header>
    );
  }
}

export default AddProductTitle;
