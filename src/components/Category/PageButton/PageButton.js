import React from 'react';

class PageButton extends React.Component {
  render() {
    const { key, page, pageChangeFunc, currentPage } = this.props;

    return (
      <button
        key={key}
        onClick={() => pageChangeFunc(page)}
        className={currentPage == page ? 'buttonClicked' : 'buttonUnClicked'}
      >
        {page}
      </button>
    );
  }
}

export default PageButton;
