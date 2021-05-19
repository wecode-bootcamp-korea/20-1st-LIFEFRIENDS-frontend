import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import MainContents from './MainContents/MainContents';
import Footer from '../../components/Footer/Footer';

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <MainContents />
        <Footer />
      </>
    );
  }
}

export default Main;
