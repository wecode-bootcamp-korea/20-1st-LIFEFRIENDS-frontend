import React from 'react';
import OneReviewPreview from './OneReviewPreview';

export class ReviewPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewPage: 0,
    };
  }

  pageUp = () => {
    this.setState({
      reviewPage: this.state.reviewPage + 4,
    });
  };

  pageDown = () => {
    this.setState({
      reviewPage: this.state.reviewPage - 4,
    });
  };

  render() {
    const { productData, reviewData } = this.props;
    const { reviewPage } = this.state;
    const { pageDown, pageUp } = this;
    return (
      <>
        <div className="ReviewPreview">
          <div className="showReviewTitle">
            <span className="showReviewTitleLeft">
              포토/동영상&nbsp;({reviewData && reviewData.length})
            </span>
            <div className="showReviewTitleRight">
              <span>더보기 </span>
              <button onClick={() => pageDown()}>{'<'}</button>
              <button onClick={() => pageUp()}>{'>'}</button>
            </div>
          </div>
          <div className="show4Reviews">
            <ul>
              {reviewData &&
                reviewData.slice(reviewPage, reviewPage + 4).map(data => {
                  return <OneReviewPreview reviewData={data} />;
                })}
            </ul>
          </div>
        </div>
        <div className="productPreviewScroll">
          <ul>
            <li
              className="scrollButton"
              onClick={() =>
                document
                  .querySelector('.scrollButton')
                  .scrollIntoView({ block: 'start' })
              }
            >
              <span>상세정보</span>
            </li>
            <li
              className="scrollButton"
              onClick={() =>
                document
                  .querySelector('.addReview')
                  .scrollIntoView({ block: 'start' })
              }
            >
              <span>리뷰 ({reviewData && reviewData.length})</span>
            </li>
            <li className="scrollButton">
              <span>Q&A</span>
            </li>
            <li className="scrollButton">
              <span>반품/상세정보</span>
            </li>
          </ul>
        </div>
        <div className="detailProductInfo">
          <div className="generalPurchaseInfos">
            <img
              alt="generalPurchaseInfo01"
              src="/images/generalPurchaseInfo01.png"
            />
            <img
              alt="generalPurchaseInfo02"
              src="/images/generalPurchaseInfo02.png"
            />
            <img
              alt="test"
              src={productData && productData.productdetail.description}
            />
          </div>
        </div>
      </>
    );
  }
}
