import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './PageLayout.scss';

export default class PageLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="PageLayout">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
