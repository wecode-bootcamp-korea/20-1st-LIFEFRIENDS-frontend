import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddReview.scss';

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewText: '',
      reviewImgUrl: null,
      reviewData: [],
      ratingValue: 0,
    };
  }

  componentDidMount() {
    fetch('')
      .then(response => response.json())
      .then(reviewdata => {
        this.setState({
          reviewData: reviewdata,
        });
      });
  }

  mouseOverHandler = e => {
    const dataValue = e.target.dataset.value;
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < dataValue; i++) {
      targetList[i].style.color = 'red';
    }
  };

  mouseLeaveHandler = e => {
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < targetList.length; i++) {
      targetList[i].style = '';
    }
  };

  getRating = e => {
    const dataValue = e.target.dataset.value;
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < targetList.length; i++) {
      // console.log(targetList[i].className.includes('redstar'));
      if (targetList[i].className.includes('redstar')) {
        targetList[i].className = 'fas fa-star';
      } else {
        for (let i = 0; i < dataValue; i++) {
          targetList[i].className = 'fas fa-star redstar';
        }
      }
    }

    this.setState({
      ratingValue: dataValue,
    });
    console.log(e.target);
  };

  handleReviewText = e => {
    this.setState({
      reviewText: e.target.value,
    });
  };

  handleReviewImg = e => {
    this.setState({
      reviewImgUrl: e.target.value,
    });
  };

  handlePost = e => {
    const { reviewText, reviewImgUrl, ratingValue } = this.state;
    e.preventDefault();
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        reviewText: reviewText,
        reviewImgUrl: reviewImgUrl,
        reviewValue: ratingValue,
      }),
    })
      .then(response => response.json())
      .then(() => {
        alert('리뷰가 등록되었습니다.😄');
      });
  };

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
            <strong className="subtitle">사용자 총 평점</strong>
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
            <strong className="subtitle">전체 리뷰 수</strong>
            <p>
              <i class="far fa-comment-dots" />
            </p>
            <p>80</p>
          </div>
          <div className="ratio">
            <strong className="subtitle">평점 비율</strong>
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
          <strong className="title">상품은 만족하셨나요?</strong>
          <div>
            <i
              className="fas fa-star"
              data-value="1"
              onMouseOver={this.mouseOverHandler}
              onMouseLeave={this.mouseLeaveHandler}
              onClick={this.getRating}
            />

            <i
              className="fas fa-star"
              data-value="2"
              onMouseOver={this.mouseOverHandler}
              onMouseLeave={this.mouseLeaveHandler}
              onClick={this.getRating}
            />
            <i
              className="fas fa-star"
              data-value="3"
              onMouseOver={this.mouseOverHandler}
              onMouseLeave={this.mouseLeaveHandler}
              onClick={this.getRating}
            />
            <i
              className="fas fa-star"
              data-value="4"
              onMouseOver={this.mouseOverHandler}
              onMouseLeave={this.mouseLeaveHandler}
              onClick={this.getRating}
            />
            <i
              className="fas fa-star"
              data-value="5"
              onMouseOver={this.mouseOverHandler}
              onMouseLeave={this.mouseLeaveHandler}
              onClick={this.getRating}
            />
          </div>
          <p>선택하세요</p>
        </div>
        <article className="addReviewArticle">
          <strong className="title">
            만족도 5점을 주셨네요
            <br />
            어떤 점이 좋았나요?
          </strong>
          <div className="reviewContent">
            <textarea
              cols="30"
              placeholder="최소 10자 이상 입력해주세요"
              onChange={this.handleReviewText}
            ></textarea>
            <p>0 / 5,000</p>
          </div>
          <div>
            <div className="addImgBtn">
              {/* <i className="fas fa-camera" />
              사진 첨부 하기 */}
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={this.handleReviewImg}
              />
            </div>
            <p>상품과 무관한 사진을 첨부한 리뷰는 통보없이 삭제됩니다.</p>
          </div>
        </article>
        <div className="btn">
          <button onClick={this.handlePost}>등록</button>
        </div>
      </div>
    );
  }
}

export default AddReview;
