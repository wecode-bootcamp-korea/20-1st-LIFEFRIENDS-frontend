import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainGift/MainGift.scss';

class MainGift extends Component {
  constructor() {
    super();
    this.pageSize = Math.round(document.documentElement.clientWidth * 0.8);
    this.sliderRef = React.createRef();
    this.state = {
      giftData: [],
      getData: [],
      items: [],
      target: Math.round(this.pageSize / 230) - 1,
      cnt: 0,
      modalOn: false,
    };
  }

  componentDidMount() {
    const { cnt, target, items, giftData } = this.state;
    // fetch('http://10.58.7.181:8000/categories/선물추천')
    fetch('/data/mainGift.json')
      .then(response => response.json())
      .then(giftdata => {
        this.setState({
          giftData: giftdata,
          getData: giftdata,
          items: giftdata,
          cnt: target,
        });
      });
  }

  handlePrevBtn = () => {
    const { giftData, getData, cnt, items, target } = this.state;
    const pageSize = Math.round(document.documentElement.clientWidth * 0.8);
    const targeta = Math.round(pageSize / 230);
    if (0 >= cnt) return;
    let dataToChange = getData.splice(cnt, target);
    console.log(giftData.length, giftData, -target, 'Prevcnt', cnt);

    this.setState({
      getData: giftData,
      cnt: cnt - target,
      items: dataToChange,
    });
  };

  handleNextBtn = () => {
    const { giftData, getData, cnt, items, target } = this.state;
    // const pageSize = Math.round(document.documentElement.clientWidth * 0.8);
    // const targeta = Math.round(pageSize / 230);
    // if (giftData.length <= cnt) return;
    let dataToChange = getData.splice(cnt, target);
    console.log(giftData.length, giftData, 'Nextcnt', cnt);
    // return dataToChange;
    this.setState({
      getData: giftData,
      cnt: cnt + target,
      items: dataToChange,
    });
  };

  render() {
    const { items, cnt, giftData } = this.state;
    console.log('render ', items);
    console.log('cnt ', cnt, 'items ', items, 'giftData', giftData);
    return (
      <section className="mainGift mainMiddleCards">
        <article>
          <h2 className="title">선물하기 좋은 제품</h2>
          <MainMediumCard
            Data={giftData}
            openModal={this.openModal}
            ref={this.sliderRef}
          />
          <div>
            <p className="prev" onClick={this.handlePrevBtn}>
              <i className="fas fa-chevron-left" />
            </p>
            <p className="next" onClick={this.handleNextBtn}>
              <i className="fas fa-chevron-right" />
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default MainGift;
