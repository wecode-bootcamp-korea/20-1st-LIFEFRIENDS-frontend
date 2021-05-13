import React, { Component } from 'react';
import '../MainMediumCard/MainMediumCard.scss';

class MainMediumCard extends Component {
  render() {
    const { giftData } = this.props;
    return (
      <div className="mainMediumCard ">
        {giftData &&
          giftData.map(el => {
            return (
              <div key={el.id}>
                <img alt={el.imgAlt} src={el.imgUrl} />
                <p>{el.price}원</p>
                <p>{el.desc}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default MainMediumCard;
