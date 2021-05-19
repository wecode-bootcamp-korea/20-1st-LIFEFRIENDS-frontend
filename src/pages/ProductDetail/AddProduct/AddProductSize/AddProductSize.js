import React, { Component } from 'react';
import './AddProductSize.scss';

class AddProductSize extends Component {
  render() {
    return (
      <>
        <div className="selectSizeBox">
          <select className="selectSize">
            <option value="size">size</option>
            <option value="singleproduct">single product</option>
          </select>
        </div>
        <div className="selectQuantityBox">
          <p className="sizeTitle">size</p>
          <div className="selectQuantity">
            <div className="countQuantity">
              <div className="quantityBox minus">
                <i class="fas fa-minus"></i>
              </div>
              <div className="quantityBox quantityNumber">1</div>
              <div className="quantityBox plus">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div className="countedPrice">
              <p>44,000원</p>
              <button className="closeQuantity">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProductSize;
