import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <main className="productDetail">
        <article>
          <section className="product">
            <header>
              홈 > 캐릭터 > <span>BT21</span> (총 198개) | 다른상품보기
            </header>
            <div>
              <div className="productPreview">준현님</div>
              <div className="addProduct">가람님</div>
            </div>
          </section>
          <section>
            <div className="content">
              <div className="reviewPreview">세용님</div>
              세용님
              <div className="addReview">유림</div>
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default ProductDetail;
