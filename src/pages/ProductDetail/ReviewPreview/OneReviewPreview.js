import React from 'react';

class OneReviewPreview extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      mapValue: [5, 4, 3, 2, 1],
    };
  }

  componentDidMount() {
    this.changeAvg();
  }

  changeAvg = () => {
    const { rating } = this.props.reviewData;
    const node = this.myRef.current.childNodes;
    const num = Number(String(rating));
    if (isNaN(rating)) return;

    if (num === 5) {
      for (let i = 0; i < num; i++) {
        node[i].style.color = '#f84f50';
      }
    } else {
      for (let i = 0; i < num; i++) {
        node[i].style.color = '#f84f50';
      }
    }
  };

  render() {
    const { mapValue } = this.state;
    const { user_name, created_at, product_size, text, review_image, rating } =
      this.props.reviewData;
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
