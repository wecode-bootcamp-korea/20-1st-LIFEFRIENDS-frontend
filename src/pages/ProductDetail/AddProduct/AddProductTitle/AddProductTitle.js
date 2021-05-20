import React, { Component } from 'react';

class AddProductTitle extends Component {
  render() {
    const { name, cost } = this.props;
    return (
      <header className="titleBox">
        <div className="addProductTitle">{name}</div>
        <div className="addProductPrice">{cost}원</div>
      </header>
    );
  }
}

export default AddProductTitle;
