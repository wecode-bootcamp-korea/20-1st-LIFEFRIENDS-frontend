import React from 'react';

class ProductCart extends React.Component {
  render() {
    const {
      productImage,
      productName,
      productPrice,
      productReview,
      productRating,
    } = this.props;
    return (
      // <React.Fragment key={key}>
      <li className="productOnCategory">
        <a href="http:://naver.com">
          <img alt="product01" src={productImage} />
          <div className="betweenImgAndText">
            <strong>
              <p>{productName}</p>
            </strong>
            <strong>
              <p>{productPrice}원</p>
            </strong>
          </div>
          <div className="reviewAndScore">
            <span className="greyfont">리뷰</span>
            <span className="bluefont">{productReview}</span>
            <span> </span>
            {/*가운데 점넣기 ::before은 뭔지? */}
            <span className="greyfont">평점</span>
            <span className="bluefont">{productRating}/5</span>
          </div>
        </a>
      </li>
      // </React.Fragment>
    );
  }
}

export default ProductCart;
