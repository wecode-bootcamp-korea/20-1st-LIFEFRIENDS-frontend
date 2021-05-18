import React from 'react';

class SortingButton extends React.Component {
  render() {
    const {
      key,
      title,
      field,
      sortFunction,
      sortingRule,
      currentSortingField,
    } = this.props;
    return (
      <li key={key}>
        <button
          className={
            currentSortingField === field ? 'sortButtonOn' : 'sortButtonOff'
          }
          onClick={() => sortFunction(field, sortingRule)}
        >
          {title}
        </button>
      </li>
    );
  }
}

export default SortingButton;
