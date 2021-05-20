import React from 'react';

class SortingButton extends React.Component {
  changeDirectory = () => {
    this.props.history.push(`/categories?&menu=`);
  };

  render() {
    const {
      key,
      title,
      field,
      sortFunction,
      sortingRule,
      currentSortingField,
      isFrontendOperating,
    } = this.props;
    return (
      <li key={key}>
        <button
          className={
            currentSortingField === field ? 'sortButtonOn' : 'sortButtonOff'
          }
          onClick={
            isFrontendOperating === true
              ? () => sortFunction(field, sortingRule)
              : () => this.changeDirectory()
          }
        >
          {title}
        </button>
      </li>
    );
  }
}

export default SortingButton;
