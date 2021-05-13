import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainGift/MainGift.scss';

class MainGift extends Component {
  constructor() {
    super();
    this.state = {
      giftData: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.7.181:8000/categories/선물추천')
      .then(response => response.json())
      .then(giftdata => {
        this.setState({
          giftData: giftdata.MESSAGE,
        });
      });
  }

  render() {
    const { giftData } = this.state;
    return (
      <section className="mainGift mainMiddleCards">
        <article>
          <h2 className="title">선물하기 좋은 제품</h2>
          <MainMediumCard giftData={giftData} />
          <div>
            <p className="prev">
              <i className="fas fa-chevron-left" />
            </p>
            <p className="next">
              <i className="fas fa-chevron-right" />
            </p>
            <ul className="contentPageBtn">
              {giftData &&
                giftData.map(el => {
                  return (
                    <li key={el.id}>
                      <button />
                    </li>
                  );
                })}
            </ul>
          </div>
        </article>
      </section>
    );
  }
}

export default MainGift;
