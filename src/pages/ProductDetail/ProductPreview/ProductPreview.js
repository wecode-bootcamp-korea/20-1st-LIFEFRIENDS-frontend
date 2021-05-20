import React, { Component } from 'react';
import './ProductPreview.scss';

class ProductPreview extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 0,
      productData: {},
    };
  }

  componentDidMount() {
    fetch('')
      .then(res => res.json())
      .then(res => {
        this.setState({ productData: res });
      });
  }

  goToPreview = e => {
    const { imgIndex, productData } = this.state;
    const { imgUrls } = productData;
    const { className } = e.target;
    const buttonName = className;
    this.setState({
      imgIndex:
        buttonName === 'previousButton'
          ? imgIndex === imgUrls.length - 1
            ? 0
            : imgIndex - 1
          : imgIndex === 0
          ? imgUrls.length - 1
          : imgIndex - 1,
    });
  };

  goToNext = e => {
    const { imgIndex, productData } = this.state;
    const { imgUrls } = productData;
    const { className } = e.target;
    const buttonName = className;
    this.setState({
      imgIndex:
        buttonName === 'nextButton'
          ? imgIndex === 0
            ? imgIndex + 1
            : 0
          : imgIndex === imgUrls.length - 1
          ? 0
          : imgIndex + 1,
    });
  };

  changePicMouseOver = (e, index) => {
    this.setState({
      imgIndex: index,
    });
  };

  render() {
    const { productData } = this.state;
    const { imgUrls, reviews } = productData;

    const { imgIndex } = this.state;
    let totalGrade = 0;
    reviews && reviews.forEach(review => (totalGrade += review.grade));

    return (
      <div className="productPreview">
        <div className="previewBigImg">
          <img src={imgUrls && imgUrls[imgIndex]} alt="상품 미리보기"></img>
          <button
            className="previousButton"
            onClick={e => {
              this.goToPreview(e);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="nextButton"
            onClick={e => {
              this.goToNext(e);
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <ul className="previewMiniImgList">
          {imgUrls &&
            imgUrls.map((imgUrl, index) => {
              return (
                <li key={index} className="previewMiniImg">
                  <img
                    src={imgUrl}
                    alt="상품 미리보기"
                    onMouseOver={e => {
                      this.changePicMouseOver(e, index);
                    }}
                  />
                </li>
              );
            })}
        </ul>
        <div className="reviewsInfo">
          <span className="titleOfTotalReviewNumber">리뷰수</span>
          <span className="totalReviewNumber">{reviews && reviews.length}</span>
          <span className="titleOfTotalReviewScore">
            사용자 총 평점
            <span className="TotalReviewScore">
              {reviews && reviews.length !== 0
                ? Number(totalGrade / reviews.length).toFixed(1)
                : 0}
            </span>
            /<span className="maxReviewScore">5</span>
          </span>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
