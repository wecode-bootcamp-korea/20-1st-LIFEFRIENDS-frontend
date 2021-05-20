import React, { Component } from 'react';
import './ProductPreview.scss';

class ProductPreview extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 0,
    };
  }

  goToPreview = e => {
    const { imgIndex } = this.state;
    const {
      PreviewData: { images },
    } = this.props;
    const { className } = e.target;
    const buttonName = className;
    this.setState({
      imgIndex:
        buttonName === 'previousButton'
          ? imgIndex === images.length - 1
            ? 0
            : imgIndex - 1
          : imgIndex === 0
          ? images.length - 1
          : imgIndex - 1,
    });
  };

  goToNext = e => {
    const { imgIndex } = this.state;
    const {
      PreviewData: { images },
    } = this.props;
    const { className } = e.target;
    const buttonName = className;
    this.setState({
      imgIndex:
        buttonName === 'nextButton'
          ? imgIndex === 0
            ? imgIndex + 1
            : 0
          : imgIndex === images.length - 1
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
    const {
      PreviewData: { images },
    } = this.props;
    const {
      ReviewData: { review_info },
    } = this.props;

    const { imgIndex } = this.state;
    let totalGrade = 0;
    review_info && review_info.forEach(review => (totalGrade += review.rating));

    return (
      <div className="productPreview">
        <div className="previewBigImg">
          <img
            alt="상품 미리보기"
            src={images && images[imgIndex]}
            className="previewBigPic"
          ></img>
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
          {images &&
            images.map((imgUrl, index) => {
              return (
                <li key={index} className="previewMiniImg">
                  <img
                    alt="상품 미리보기"
                    src={imgUrl}
                    className="previewMiniPic"
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
          <span className="totalReviewNumber">
            {review_info && review_info.length}
          </span>
          <span className="titleOfTotalReviewScore">
            사용자 총 평점
            <span className="TotalReviewScore">
              {review_info && review_info.length !== 0
                ? Number(totalGrade / review_info.length).toFixed(1)
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
