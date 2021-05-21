import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainProducts/MainProducts.scss';
import { GET_CATEGORY_API } from '../../../../config';

class MainProducts extends Component {
  constructor() {
    super();
    this.state = {
      productsData: 0,
      num: 1,
    };
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  getData = () => {
    const { num } = this.state;
    fetch(`${GET_CATEGORY_API}/categories?size=10&page=${num}`)
      .then(response => response.json())
      .then(productsdata => {
        this.setState({
          productsData: productsdata.message,
          num: num + 1,
        });
      });
  };

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { num } = this.state;
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      fetch(`${GET_CATEGORY_API}/categories?size=10&page=${num}`)
        .then(response => response.json())
        .then(productsdata => {
          this.setState({
            productstData: [
              ...this.state.productsData,
              ...productsdata.message,
            ],
          });
        });
      this.getData();
    }
  };

  render() {
    const { productstData } = this.state;
    return (
      <section className="mainProducts mainMiddleCards">
        <article className="mainGoods">
          <h2 className="title">마음껏 둘러보세요</h2>
          <MainMediumCard data={productstData} />
        </article>
      </section>
    );
  }
}

export default MainProducts;
