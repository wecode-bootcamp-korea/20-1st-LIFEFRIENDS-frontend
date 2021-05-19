import React, { Component } from 'react';
import AddReview from './AddReview/AddReview';
import AddProduct from './AddProduct/AddProduct';
import './ProductDetail.scss';
import { ReviewPreview } from './ReviewPreview/ReviewPreview';
import './ReviewPreview/ReviewPreview.scss';

class ProductDetail extends Component {
  render() {
    return (
      <main className="productDetail">
        <article>
          <section className="product">
            <header>
              홈 > 캐릭터 > <span>BT21</span> (총 198개) | 다른상품보기
            </header>
            <div className="productInfoBox">
              <div className="productPreview">준현님</div>
              <AddProduct />
            </div>
          </section>
          <section>
            <div className="content">
              <ReviewPreview />
              <AddReview />
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default ProductDetail;
