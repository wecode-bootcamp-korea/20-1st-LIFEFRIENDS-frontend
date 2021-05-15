import React from 'react';

class SortingButton extends React.Component {
  render() {
    const { key, title, field, sortFunction, sortingRule } = this.props;
    return (
      <li key={key}>
        <button
          className="sortButton"
          onClick={() => sortFunction(field, sortingRule)}
        >
          {title}
        </button>
      </li>
    );
  }
}

export default SortingButton;
