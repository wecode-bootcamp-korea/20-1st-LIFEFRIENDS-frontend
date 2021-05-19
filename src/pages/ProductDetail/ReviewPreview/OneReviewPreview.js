import React from 'react';

class OneReviewPreview extends React.Component {
  render() {
    return (
      <li>
        <div className="textAndImageGroup">
          <div className="textPart">
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <span> 5</span>
            </div>
            <div className="idDateSize">
              <span>id </span>
              <span>date </span>
              <span>사이즈:(코딩필요)</span>
            </div>
            <div className="reviewText">
              {' '}
              <p>
                2줄 짜리 글씨
                왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비왈라비비비비
              </p>
            </div>
          </div>
          <div className="imagepart">
            <img alt="test" src="/images/dog.png" />
          </div>
        </div>
      </li>
    );
  }
}

export default OneReviewPreview;
