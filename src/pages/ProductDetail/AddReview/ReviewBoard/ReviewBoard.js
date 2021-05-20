import React, { Component } from 'react';
import './ReviewBoard.scss';

class ReviewBoard extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      mapValue: [5, 4, 3, 2, 1],
    };
  }

  componentDidMount() {
    this.props.changeAverage();
  }

  render() {
    const { mapValue } = this.state;
    const { avgValue } = this.props;

    return (
      <section className="board">
        <div className="average">
          <strong className="subtitle">사용자 총 평점</strong>
          <div ref={this.myRef}>
            {mapValue.map(el => {
              return <i key={el} className="fas fa-star" />;
            })}
          </div>
          <p>
            <span>{avgValue}</span> / 5
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
            {mapValue.map(el => {
              return (
                <li key={el} className={`ratioBar ${el}`}>
                  <div className="ratioValue" />
                  <p>{el}점</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ReviewBoard;
