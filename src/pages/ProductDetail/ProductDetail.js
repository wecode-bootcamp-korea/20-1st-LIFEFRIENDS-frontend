import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductPreview from './ProductPreview/ProductPreview';
import AddReview from './AddReview/AddReview';
import AddProduct from './AddProduct/AddProduct';
import { ReviewPreview } from './ReviewPreview/ReviewPreview';
import './ProductDetail.scss';
import './ReviewPreview/ReviewPreview.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      productData: 0,
      copiedproductData: 0,
      reviewData: 0,
      ratio: 0,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.190:8000/products?id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          key: data.productdetail.product_id,
          productData: data,
          copiedproductData: data,
        })
      );
    fetch(`http://10.58.7.181:8000/reviews/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          reviewData: data.review_info,
          ratio: data.review_summary.rate_count,
        })
      );
  }

  render() {
    const { key, copiedproductData, reviewData, ratio } = this.state;
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
                <ProductPreview />
                <AddProduct />
              </div>
            </section>
            <section>
              <div className="content">
                <ReviewPreview
                  key={key}
                  copiedproductData={copiedproductData}
                />
                <AddReview reviewData={reviewData} ratio={ratio} />
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
