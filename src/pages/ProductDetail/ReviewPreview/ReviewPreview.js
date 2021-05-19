import React from 'react';
import OneReviewPreview from './OneReviewPreview';

export class ReviewPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 0,
    };
  }

  render() {
    return (
      <>
        <div className="ReviewPreview">
          <div className="showReviewTitle">
            <span className="showReviewTitleLeft">포토/동영상(n-코딩파트)</span>
            <div className="showReviewTitleRight">
              <span>더보기 </span>
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>
          </div>
          <div className="show4Reviews">
            <ul>
              <OneReviewPreview />
              <OneReviewPreview />
              <OneReviewPreview />
              <OneReviewPreview />
            </ul>
          </div>
        </div>
        <div className="productPreview">
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
              <span>리뷰 (개수:코딩필요)</span>
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
          </div>
        </div>
      </>
    );
  }
}
