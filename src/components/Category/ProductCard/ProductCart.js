import React from 'react';

class ProductCart extends React.Component {
  render() {
    const { id, imgUrl, name, cost, reviewCount, rating } = this.props.data;
    return (
      <li className="productOnCategory" key={id}>
        <a href="http:://naver.com">
          <img alt="product01" src={imgUrl} />
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
        </a>
      </li>
    );
  }
}

export default ProductCart;
