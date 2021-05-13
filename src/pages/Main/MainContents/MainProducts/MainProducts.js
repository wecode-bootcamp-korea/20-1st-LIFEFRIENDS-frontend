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
    fetch('http://10.58.7.181:8000/categories/토이')
      .then(response => response.json())
      .then(productstData => {
        this.setState({
          productstData: productstData.MESSAGE,
        });
      });
  }

  render() {
    const { productstData } = this.state;
    return (
      <section className="mainProducts mainMiddleCards">
        <article className="mainGoods">
          <h2 className="title">마음껏 둘러보세요</h2>
          <MainMediumCard giftData={productstData} />
        </article>
      </section>
    );
  }
}

export default MainProducts;
