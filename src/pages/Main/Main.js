import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import MainContents from './MainContents/MainContents';

class Main extends Component {
  render() {
    return (
      <>
        <MainContents />
        <Footer />
      </>
    );
  }
}

export default Main;
