import React, { Component } from 'react';
// import Nav from '../../components/Nav/Nav';
import MainContents from './MainContents/MainContents';
import Footer from '../../components/Footer/Footer';
// import GoTop from '../../components/GoToTop/GoTop';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'main',
    };
  }

  HandlePageChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <MainContents />
        <Footer />
        {/* <GoTop /> */}
      </>
    );
  }
}

export default Main;
