import React from 'react';
import './GoTop.scss';

class GoTop extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
      thePosition: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <button className="goToTop" onClick={this.scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;
