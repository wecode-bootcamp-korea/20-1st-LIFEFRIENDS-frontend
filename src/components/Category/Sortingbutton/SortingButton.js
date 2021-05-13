import React from 'react';

class SortingButton extends React.Component {
  render() {
    const { sortingField, sortFunction } = this.props;
    return (
      <li>
        {console.log(sortingField)}
        {/* <button onClick={() => sortFunction(Object.keys(sortingField)[0])}> */}
        {/* {Object.keys(sortingField)[0]} */}
        {/* </button> */}
      </li>
    );
  }
}

export default SortingButton;
