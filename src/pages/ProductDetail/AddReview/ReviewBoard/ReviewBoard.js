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
  changeAverage = () => {
    const { avgValue } = this.state;
    const node = this.myRef.current.childNodes;
    const num = Number(String(avgValue).substr(0, 1));
    const point = Number(String(avgValue).substr(2, 1));
    console.log(num);
    console.log(point, 10 - point);

    for (let i = 0; i < num; i++) {
      node[i].style.color = '#f84f50';
    }

    for (let i = 0; i < 6 - num; i++) {
      console.log(num);
      // node[num].style.color = 'blue';
      // node[num].style.background = 'blue';
      // node[num].style.backgroundClip = 'text';
      // node[num].style.color = 'transparent';

      node[
        num
      ].style.background = `linear-gradient(to right, #f84f50 70%, #888888 30%)`;
      node[num].style.backgroundClip = 'text';
      node[num].style.color = 'transparent';

      // node[num].className = 'fas fa-star pointstar';
    }
  };
  componentDidMount() {
    this.changeAverage();
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
