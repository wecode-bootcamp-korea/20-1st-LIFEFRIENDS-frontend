import React, { Component } from 'react';
import '../MainCoupon/MainCoupon.scss';

class MainCoupon extends Component {
  constructor() {
    super();
    this.state = {
      coupontData: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.83:8000/mainpages/coupons/40%')
      .then(response => response.json())
      .then(coupondata => {
        this.setState({
          couponData: coupondata.MESSAGE,
        });
      });
  }

  render() {
    const { coupontData } = this.state;
    return (
      <section className="mainCoupon">
        {coupontData &&
          coupontData.map(el => {
            return (
              <div>
                <div className="coupon">
                  <h3>LIFE FRIENDS</h3>
                  <p>
                    <span>{el}</span>
                  </p>
                  <p>Brand Store Coupon</p>
                </div>
                <div className="couponDesc">
                  <h2>LIFE FRIENDS 고객님을 위한 혜택</h2>
                  <p>스토어찜 고객에게 드리는 혜택! {el} 장바구니 할인</p>
                  <button className="linkBtn">쿠폰받기</button>
                </div>
              </div>
            );
          })}
      </section>
    );
  }
}

export default MainCoupon;
