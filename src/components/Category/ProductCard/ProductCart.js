import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductCart extends React.Component {
  render() {
    const { id, imgUrl, name, cost, reviewCount, rating } = this.props.data;
    return (
      <li
        className="productOnCategory"
        key={id}
        onClick={() => this.props.history.push(`/productdetail/${id}`)}
      >
        <img alt="product01" src={imgUrl} />
        <div className="hoverButtonBundle">
          <img
            className="hoverButton"
            alt="heartButton"
            src="/images/heart.png"
          />
          <img
            className="hoverButton"
            alt="heartButton"
            src="/images/plus.png"
          />
        </div>
        <div className="betweenImgAndText">
          <strong>
            <p>{name}</p>
          </strong>
          <strong>
            <p>{cost}원</p>
          </strong>
        </div>
        <div className="reviewAndScore">
          <span className="greyfont">리뷰</span>
          <span className="bluefont">{reviewCount}</span>
          <span> </span>
          {/*가운데 점넣기 ::before은 뭔지? */}
          <span className="greyfont">평점</span>
          <span className="bluefont">{rating}/5</span>
        </div>
      </li>
    );
  }
}

export default withRouter(ProductCart);
