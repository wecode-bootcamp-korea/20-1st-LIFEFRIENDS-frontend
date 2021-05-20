import React, { Component } from 'react';

class AddProductResults extends Component {
  render() {
    return (
      <>
        <section className="resultPriceBox">
          <h3>
            <span className="bold">총 상품 금액</span>
          </h3>
          <div className="resultPrice">
            <p>
              <span className="textGray">총 수량 1개 |</span>
            </p>
            <h2>
              <span className="textBlue">63,000원</span>
            </h2>
          </div>
        </section>
        <div className="addProductButtonBox">
          <button className="addProductBtn buyingBtn">구매하기</button>
          <button className="addProductBtn cartBtn"> 장바구니</button>
        </div>
      </>
    );
  }
}

export default AddProductResults;
