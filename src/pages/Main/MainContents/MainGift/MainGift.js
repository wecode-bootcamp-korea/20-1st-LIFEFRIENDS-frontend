import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainGift/MainGift.scss';

class MainGift extends Component {
  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.state = {
      giftData: [],
      cnt: 2,
      modalOn: false,
    };
  }

  componentDidMount() {
    // fetch('http://10.58.7.181:8000/categories/선물추천')
    fetch('/data/mainGift.json')
      .then(response => response.json())
      .then(giftdata => {
        this.setState({
          giftData: giftdata,
        });
      });
  }

  getPageSize = () => {
    return this.sliderRef.current;
  };

  handlePrevBtn = e => {
    const { giftData, cnt } = this.state;
    const pageSize = Math.round(document.documentElement.clientWidth * 0.9);
    const stepSize = Math.round(pageSize * 0.7);
    const target = this.sliderRef.current.props.Data.length;

    e.target.parentNode.parentNode.childNodes[1].style.transform =
      'translateX(' + (giftData.length * -320) / cnt + 'px)';
    if (2 === cnt) {
      this.setState({
        cnt: cnt + giftData.length,
      });
    }
    console.log(
      'target ' + target,
      'pageSize ' + pageSize,
      'stepSize ' + stepSize
    );
  };

  handleNextBtn = e => {
    const { giftData, cnt } = this.state;
    e.target.parentNode.parentNode.childNodes[1].style.transform =
      'translateX(' + (giftData.length * 320) / cnt + 'px)';
    if (2 === cnt) {
      this.setState({
        cnt: cnt + giftData.length,
      });
    }
    console.log(
      'Next' + cnt,
      'translateX(' + (giftData.length * 320) / cnt + 'px)'
    );
  };

  render() {
    const { giftData } = this.state;
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
