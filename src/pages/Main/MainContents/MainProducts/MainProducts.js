import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainProducts/MainProducts.scss';

class MainProducts extends Component {
  constructor() {
    super();
    this.state = {
      productstData: [],
    };
  }

  componentDidMount() {
    fetch('/data/mainGift.json')
      .then(response => response.json())
      .then(giftdata => {
        this.setState({
          products: giftdata,
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <section className="mainProducts mainMiddleCards">
        <article className="mainGoods">
          <h2 className="title">마음껏 둘러보세요</h2>
          <MainMediumCard giftData={products} />
        </article>
      </section>
    );
  }
}

export default MainProducts;
