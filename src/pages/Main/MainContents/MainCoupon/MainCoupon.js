import React, { Component } from 'react';
import Modal from '../../../../components/Modal/Modal';
import '../MainCoupon/MainCoupon.scss';
import { GET_AUTHORIZATION_API, GET_COUPON_API } from '../../../../config';

class MainCoupon extends Component {
  constructor() {
    super();
    this.state = {
      coupontData: 0,
      userName: '고객',
      modalOn: false,
    };
  }

  initializeUserInfo = () => {
    const loggedInfo = localStorage.getItem('AUTHORIZATION');
    fetch(GET_AUTHORIZATION_API, {
      method: 'GET',
      headers: {
        AUTHORIZATION: loggedInfo,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          this.setState({
            userName: data.user_info.user_name,
          });
        }
        // if (data.MESSAGE === 'LOGIN_REQUIRED')
        else {
          this.setState({
            userName: '고객',
            couponData: 0,
          });
        }
        // else if (data.MESSAGE === 'INVALID_JWT') {
        //   this.setState({
        //     userName: '고객',
        //     coupontData: 0,
        //   });
        // }
      });
  };

  componentDidMount() {
    // fetch('http://172.16.20.134:8000/users/coupon/40%')
    fetch(GET_COUPON_API)
      .then(response => response.json())
      .then(coupondata => {
        this.setState(
          {
            couponData: coupondata.message,
          },
          () => this.initializeUserInfo()
        );
      });
  }

  openModal = () => {
    this.setState({ modalOn: true });
  };

  closeModal = () => {
    this.setState({ modalOn: false });
  };

  render() {
    const { couponData, userName } = this.state;
    console.log(couponData, userName);
    return (
      <>
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
              <button
                className="linkBtn"
                onClick={() => {
                  this.openModal();
                }}
              >
                쿠폰받기
              </button>
            </div>
          </div>
        </section>
        <Modal
          open={this.state.modalOn}
          close={this.closeModal}
          title="LIFE FRIENDS"
          content="쿠폰이 발급되었습니다."
        />
      </>
    );
  }
}

export default MainCoupon;
