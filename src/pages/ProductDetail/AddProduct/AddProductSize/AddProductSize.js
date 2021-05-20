import React, { Component } from 'react';

class AddProductSize extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  countQuantity = e => {
    const { number } = this.state;
    if (number < 1) {
      this.setState({
        number: 1,
      });
    } else if (e.target.className.includes('minus')) {
      this.setState({
        number: number - 1,
      });
    } else if (e.target.className.includes('plus')) {
      this.setState({
        number: number + 1,
      });
    }
  };

  render() {
    const { size, cost } = this.props;
    const { number } = this.state;
    return (
      <>
        <div className="selectSizeBox">
          <select className="selectSize">
            {size.map(sizeName => (
              <option value={sizeName} key={sizeName}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="selectQuantityBox">
          <p className="sizeTitle">size</p>
          <div className="selectQuantity">
            <div className="countQuantity">
              <button
                className="quantityBox minus"
                onClick={this.countQuantity}
              >
                <i className="fas fa-minus"></i>
              </button>
              <div className="quantityBox quantityNumber">{number}</div>
              <button className="quantityBox plus" onClick={this.countQuantity}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="countedPrice">
              <p>{cost * number}</p>
              <button className="closeQuantity">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProductSize;
