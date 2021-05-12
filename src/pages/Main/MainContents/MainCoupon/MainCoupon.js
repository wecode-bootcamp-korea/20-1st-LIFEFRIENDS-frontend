import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MainCoupon/MainCoupon.scss';

class MainCoupon extends Component {
  render() {
    return (
      <section className="mainCoupon">
        <div>
          <div>
            <div className="coupon">
              <h1>LIFE FRIENDS</h1>
              <p>
                2,000<span>원</span>
              </p>
              <p>Brand Store Coupon</p>
            </div>
            <div className="couponDesc">
              <h2>LIFE FRIENDS 고객님을 위한 혜택</h2>
              <p>스토어찜 고객에게 드리는 혜택! 2,000원 장바구니 할인</p>
              <button className="linkBtn">쿠폰받기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainCoupon;
