import React, { Component } from 'react';
import './AddProduct.scss';

class AddProduct extends Component {
  render() {
    return (
      <div className="addProduct">
        <header className="titleBox">
          <h1 className="addProductTitle">LINE FRENDS X CASETIFY</h1>
          <h1 className="addProductPrice">44,000</h1>
        </header>
        <section className="addProductPoint">
          <h2 className="pointtitle">라인프렌즈 고객을 위한 혜택</h2>
          <div className="maxPointBox">
            <div className="pointTitle">
              <p>최대 적립 포인트</p>
              <p>기본적립</p>
            </div>
            <div className="pointPrice">
              <p>740원</p>
              <p>440원</p>
            </div>
          </div>
          <p></p>
        </section>
      </div>
    );
  }
}

export default AddProduct;
