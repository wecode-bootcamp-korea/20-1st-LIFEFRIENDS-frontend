import React, { Component } from 'react';

class AddProductTitle extends Component {
  getIntPrice = price => {
    return Math.round(price).toLocaleString();
  };
  render() {
    const { name, cost } = this.props;
    return (
      <header className="titleBox">
        <div className="addProductTitle">{name}</div>
        <div className="addProductPrice">{this.getIntPrice(cost)}원</div>
      </header>
    );
  }
}

export default AddProductTitle;
