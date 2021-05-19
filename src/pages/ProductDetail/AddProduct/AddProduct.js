import React, { Component } from 'react';
import './AddProduct.scss';

class AddProduct extends Component {
  render() {
    return (
      <div className="addProduct">
        <header className="titleBox">
          <div className="addProductTitle">LINE FRENDS X CASETIFY</div>
          <div className="addProductPrice">44,000원</div>
        </header>

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

        <div className="selectSizeBox">
          <select className="selectSize">
            <option value="size">size</option>
            <option value="singleproduct">single product</option>
          </select>
        </div>

        <div className="selectQuantityBox">
          <p className="sizeTitle">size</p>
          <div className="selectQuantity">
            <div className="countQuantity">
              <div className="quantityBox minus">
                <i class="fas fa-minus"></i>
              </div>
              <div className="quantityBox quantityNumber">1</div>
              <div className="quantityBox plus">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div className="countedPrice">
              <p>44,000원</p>
              <button className="closeQuantity">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>

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
      </div>
    );
  }
}

export default AddProduct;
