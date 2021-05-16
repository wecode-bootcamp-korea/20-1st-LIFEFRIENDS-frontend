import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddReview.scss';

class AddReview extends Component {
  render() {
    return (
      <div className="addReview">
        <h2>상품 리뷰</h2>
        <p>
          상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성 시 포인트가
          적립됩니다.
        </p>
        <section className="board">
          <div className="average">
            <strong>사용자 총 평점</strong>
            <div>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p>
              <span>4.7</span> / 5
            </p>
          </div>
          <div className="totalReview">
            <strong>전체 리뷰 수</strong>
            <p>
              <i class="far fa-comment-dots" />
            </p>
            <p>80</p>
          </div>
          <div className="ratio">
            <strong>평점 비율</strong>
            <ul>
              <li className="ratioBar 1">
                <div className="ratioValue" />
                <p>5점</p>
              </li>
              <li className="ratioBar 2">
                <div className="ratioValue" />
                <p>4점</p>
              </li>
              <li className="ratioBar 3">
                <div className="ratioValue" />
                <p>3점</p>
              </li>
              <li className="ratioBar 4">
                <div className="ratioValue" />
                <p>2점</p>
              </li>
              <li className="ratioBar 5">
                <div className="ratioValue" />
                <p>1점</p>
              </li>
            </ul>
          </div>
        </section>
        <div className="rating">
          <strong>상품은 만족하셨나요?</strong>
          <div>
            <Link to="/">
              <i className="fas fa-star" data-value="1" />
            </Link>
            <Link to="/">
              <i className="fas fa-star" data-value="2" />
            </Link>
            <Link to="/">
              <i className="fas fa-star" data-value="3" />
            </Link>
            <Link to="/">
              <i className="fas fa-star" data-value="4" />
            </Link>
            <Link to="/">
              <i className="fas fa-star" data-value="5" />
            </Link>
          </div>
          <p>선택하세요</p>
        </div>
        <article className="addReviewArticle">
          <strong>
            만족도 5점을 주셨네요
            <br />
            어떤 점이 좋았나요?
          </strong>
          <div className="reviewContent">
            <label htmlFor="reviewInput">최소 10자 이상 입력해주세요</label>
            <textarea cols="30"></textarea>
            <p>0 / 5,000</p>
          </div>
          <div>
            <Link to="/">
              {/* <i className="fas fa-camera-retro" /> */}
              <i className="fas fa-camera" />
              사진 첨부 하기
            </Link>
            <p>상품과 무관한 사진을 첨부한 리뷰는 통보없이 삭제됩니다.</p>
          </div>
        </article>
        <div className="btn">
          <button>취소</button>
          <button>등록</button>
        </div>
      </div>
    );
  }
}

export default AddReview;
