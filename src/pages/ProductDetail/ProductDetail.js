import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductPreview from './ProductPreview/ProductPreview';
import AddReview from './AddReview/AddReview';
import AddProduct from './AddProduct/AddProduct';
import { ReviewPreview } from './ReviewPreview/ReviewPreview';
import './ProductDetail.scss';
import './ReviewPreview/ReviewPreview.scss';
import { GET_PRODUCT_API, GET_REVIEW_API } from '../../config';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      productData: 0,
      copiedproductData: 0,
      reviewData: 0,
      reviewsData: 0,
      ratio: 0,
    };
  }

  componentDidMount() {
    fetch(`${GET_PRODUCT_API}?id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          key: data.productdetail.product_id,
          productData: data,
          copiedproductData: data,
        })
      );
    // fetch(`http://10.58.7.181:8000/reviews/${this.props.match.params.id}`)
    fetch(`${GET_REVIEW_API}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          reviewData: data,
          reviewsData: data.review_info,
          ratio: data.review_summary.rate_count,
        })
      );
  }

  render() {
    const { key, copiedproductData, reviewData, reviewsData, ratio } =
      this.state;
    const { images } = copiedproductData && copiedproductData.productdetail;
    const { review_info } = reviewData && reviewData;
    const PreviewData = { images };
    const ReviewData = { review_info };
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
                <ProductPreview
                  PreviewData={PreviewData}
                  ReviewData={ReviewData}
                />
                <AddProduct key={key} copiedproductData={copiedproductData} />
              </div>
            </section>
            <section>
              <div className="content">
                <ReviewPreview
                  key={key}
                  productData={copiedproductData}
                  reviewData={reviewsData}
                />
                <AddReview reviewData={reviewsData} ratio={ratio} />
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
