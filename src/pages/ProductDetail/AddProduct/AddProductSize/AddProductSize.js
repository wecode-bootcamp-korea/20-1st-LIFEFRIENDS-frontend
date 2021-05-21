import React, { Component } from 'react';
import Modal from '../../../../components/Modal/Modal';

class AddProductSize extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      sizeValue: 'size',
      modalOn: false,
    };
  }

  sendBuyingInfo = e => {
    e.preventDefault();

    const tokenValue = localStorage.getItem('AUTHORIZATION');
    const API = 'http://10.58.7.181:8000/orders/cart';
    const { number, sizeValue } = this.state;
    const { product_id } = this.props;

    fetch(API, {
      method: 'POST',
      headers: { Authorization: tokenValue },
      body: JSON.stringify({
        product_id: product_id,
        size: sizeValue,
        quantity: number,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          this.setState({ modalOn: true });
        }
      });
  };

  openModal = () => {
    this.setState({ modalOn: true });
  };

  closeModal = () => {
    this.setState({ modalOn: false });
  };

  countQuantity = e => {
    const { number } = this.state;
    const className = e.target.className;
    if (number <= 0) {
      this.setState({
        number: 1,
      });
    } else if (className.includes('minus')) {
      this.setState({
        number: number - 1,
      });
    } else if (className.includes('plus')) {
      this.setState({
        number: number + 1,
      });
    }
  };

  selectSize = e => {
    this.setState({
      sizeValue: e.target.value,
    });
  };

  render() {
    const { size, cost } = this.props;
    const { number, sizeValue, modalOn } = this.state;
    const resultPrice = (cost * number).toLocaleString();
    const buyingModal = `총 ${resultPrice}원 구매완료 되었습니다.`;
    const cartModal = `총 ${number}개의 상품이 장바구니에 담겼습니다.`;

    return (
      <>
        <div className="selectSizeBox">
          <select className="selectSize" onChange={this.selectSize}>
            <option value="size">option</option>
            {size &&
              size.map(sizeName => (
                <option value={sizeName} key={sizeName}>
                  {sizeName}
                </option>
              ))}
          </select>
        </div>
        <div className="selectQuantityBox">
          <p className="sizeTitle">{sizeValue}</p>
          <div className="selectQuantity">
            <div className="countQuantity">
              <button
                className="quantityBox minus"
                onClick={this.countQuantity}
              >
                <i className="fas fa-minus"></i>
              </button>
              <div className="quantityBox quantityNumber">{number}</div>
              <button className="quantityBox plus" onClick={this.countQuantity}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="countedPrice">
              <p>{resultPrice}원</p>
            </div>
          </div>
        </div>
        <section className="resultPriceBox">
          <h3>
            <span className="bold">총 상품 금액</span>
          </h3>
          <div className="resultPrice">
            <p>
              <span className="textGray">총 수량 {number}개 |</span>
            </p>
            <h2>
              <span className="textBlue">{resultPrice}원</span>
            </h2>
          </div>
        </section>
        <form className="addProductButtonBox" onSubmit={this.sendBuyingInfo}>
          <button
            name="buy"
            onClick={this.sendBuyingInfo}
            className="addProductBtn buyingBtn"
          >
            구매하기
          </button>
          {modalOn && (
            <Modal
              open={modalOn}
              close={this.closeModal}
              title="LIFE FRIENDS"
              content={buyingModal}
            />
          )}
          <button name="cart" className="addProductBtn cartBtn">
            장바구니
          </button>
        </form>
      </>
    );
  }
}

export default AddProductSize;
