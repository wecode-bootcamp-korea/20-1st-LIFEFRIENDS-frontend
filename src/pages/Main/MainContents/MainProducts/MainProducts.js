import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainProducts/MainProducts.scss';

class MainProducts extends Component {
  constructor() {
    super();
    this.state = {
      productstData: 0,
      num: 1,
    };
  }

  getData = () => {
    const { num } = this.state;
    fetch(`http://10.58.7.181:8000/products/categories?size=10&page=${num}`)
      .then(response => response.json())
      .then(productstdata => {
        this.setState({
          productstData: productstdata.MESSAGE,
          num: num + 1,
        });
        console.log(productstdata.MESSAGE);
      });
  };

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

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
      fetch(`http://10.58.7.181:8000/products/categories?size=10&page=${num}`)
        .then(response => response.json())
        .then(productstdata => {
          this.setState({
            productstData: [
              ...this.state.productstData,
              ...productstdata.MESSAGE,
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
