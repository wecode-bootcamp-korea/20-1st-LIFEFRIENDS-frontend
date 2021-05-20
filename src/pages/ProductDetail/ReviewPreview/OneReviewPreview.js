import React from 'react';

class OneReviewPreview extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      mapValue: [5, 4, 3, 2, 1],
    };
  }

  changeAverage = () => {
    const { avgValue } = this.props;
    const node = this.myRef.count && this.myRef.current.childNodes;
    const num = Number(String(avgValue).substr(0, 1));
    const point = Number(String(avgValue).substr(2, 1));
    for (let i = 0; i < num; i++) {
      node[i].style.color = '#F84F50';
    }
    for (let i = 0; i < 6 - num; i++) {
      node[
        num
      ].style.background = `linear-gradient(to right, #F84F50 ${num}0%, #EBE9E9 ${
        10 - point
      }0%)`;
      node[num].style.WebkitBackgroundClip = 'text';
      node[num].style.color = 'transparent';
    }
  };

  render() {
    this.changeAverage();
    const { mapValue } = this.state;
    const { user_name, created_at, product_size, text, review_image, rating } =
      this.props.reviewData;
    console.log(this.props);
    return (
      <li>
        <div className="textAndImageGroup">
          <div className="textPart">
            <div className="stars">
              <div ref={this.myRef}>
                {mapValue.map(el => {
                  return <i key={el} className="fas fa-star" />;
                })}
              </div>
              <span>&nbsp;{rating}</span>
            </div>
            <div className="idDateSize">
              <span>{user_name} </span>
              <span>&nbsp;{created_at.slice(0, 10)} </span>
              <span>&nbsp;사이즈:&nbsp;{product_size}</span>
            </div>
            <div className="reviewText">
              {' '}
              <p>{text}</p>
            </div>
          </div>
          <div className="imagepart">
            <img alt="test" src={review_image} />
          </div>
        </div>
      </li>
    );
  }
}

export default OneReviewPreview;
