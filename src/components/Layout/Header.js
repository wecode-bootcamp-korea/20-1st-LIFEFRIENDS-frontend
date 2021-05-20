import { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img alt="logo" src="../../../Data/images/naver_logo.png" />
      </header>
    );
  }
}
