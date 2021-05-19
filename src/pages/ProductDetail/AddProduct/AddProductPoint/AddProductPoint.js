import React, { Component } from 'react';
import './AddProductPoint.scss';

class AddProductPoint extends Component {
  render() {
    return (
      <>
        <section className="addProductPoint">
          <h2 className="pointTitle">라인프렌즈 고객을 위한 혜택</h2>
          <div className="maxPointBox">
            <div className="maxPoint">
              <p>최대 적립 포인트</p>
              <p>740원</p>
            </div>
            <div className="pointPrice">
              <p>기본적립</p>
              <p>440원</p>
            </div>
          </div>
        </section>
        <div className="deliveryFeeBox">
          <p className="deliveryFee deliveryText">
            택배배송 | <span className="bold">3000원</span>
            <span className="textBlue">(주문시 결제)</span>
          </p>
          <p className="freeDelivery deliveryText">
            30,000원 이상 구매 시 무료
          </p>
          <p className="showSaveDeliveryFee deliveryText">
            <span className="textBlue">배송비 절약상품 보기</span>
          </p>
        </div>
      </>
    );
  }
}

export default AddProductPoint;
