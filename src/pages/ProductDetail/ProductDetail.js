import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import AddReview from './AddReview/AddReview';
import AddProduct from './AddProduct/AddProduct';
import { ReviewPreview } from './ReviewPreview/ReviewPreview';
import './ProductDetail.scss';
import './ReviewPreview/ReviewPreview.scss';

class ProductDetail extends Component {
  render() {
    return (
      <>
        <Nav />
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
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
