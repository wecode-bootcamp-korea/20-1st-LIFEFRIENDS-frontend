import React, { Component } from 'react';
import '../MainCoupon/MainCoupon.scss';

class MainCoupon extends Component {
  constructor() {
    super();
    this.state = {
      coupontData: {},
      userName: '',
    };
  }

  initializeUserInfo = () => {
    const loggedInfo = localStorage.getItem('AUTHORIZATION');
    fetch('http://172.16.20.241:8000/users/user', {
      method: 'GET',
      headers: {
        AUTHORIZATION: loggedInfo,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          this.setState({
            userName: data.USER_INFO.user_name,
          });
        } else if (data.MESSAGE === 'LOGIN_REQUIRED') {
          this.setState({
            userName: '고객',
          });
        }
      });
  };

  componentDidMount() {
    fetch('http://172.16.20.134:8000/users/coupon/40%')
      .then(response => response.json())
      .then(coupondata => {
        this.setState({
          couponData: coupondata.MESSAGE,
        });
        console.log(this.state.couponData);
      });
    this.initializeUserInfo();
  }

  render() {
    const { couponData, userName } = this.state;
    return (
      <section className="mainCoupon">
        <div>
          <div className="coupon">
            <h3>LIFE FRIENDS</h3>
            <p>
              <span>{couponData}</span>
            </p>
            <p>Brand Store Coupon</p>
          </div>
          <div className="couponDesc">
            <h2>{userName}님을 위한 혜택</h2>
            <p>스토어찜 고객에게 드리는 혜택! {couponData} 장바구니 할인</p>
            <button className="linkBtn">쿠폰받기</button>
          </div>
        </div>
      </section>
    );
  }
}

export default MainCoupon;
