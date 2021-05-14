import React from 'react';
import './GoTop.scss';

class GoTop extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.setState({ isVisible: true });
      } else {
        this.setState({ isVisible: false });
      }
    });
  }

  scrolltoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  render() {
    console.log(this.state.isVisible);
    return (
      <>
        {this.state.isVisible && (
          <button className="goToTop" onClick={this.scrolltoTop}>
            <i className="fas fa-chevron-up"></i>
          </button>
        )}
      </>
    );
  }
}
export default GoTop;
