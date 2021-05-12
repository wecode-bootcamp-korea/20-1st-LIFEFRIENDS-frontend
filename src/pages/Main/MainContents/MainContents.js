import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainNews from './MainNews/MainNews';
import MainCoupon from './MainCoupon/MainCoupon';
import MainGift from './MainGift/MainGift';
import MainProducts from './MainProducts/MainProducts';
import MainBottom from './MainBottom/MainBottom';

class MainContents extends Component {
  render() {
    return (
      <section>
        <MainHeader />
        <MainNews />
        <MainCoupon />
        <MainGift />
        <MainProducts />
        <MainBottom />
      </section>
    );
  }
}

export default MainContents;
