import React, { Component } from 'react';
import AddReview from './AddReview/AddReview';
import './ProductDetail.scss';
import { ReviewPreview } from './ReviewPreview/ReviewPreview';
import './ReviewPreview/ReviewPreview.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      productData: 0,
      copiedproductData: 0,
      reviewData: 0,
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
        })
      );
  }

  //fetch 함수 적용후에 조건부 렌더링 걸기
  render() {
    const { key, copiedproductData, reviewData } = this.state;
    // console.log(copiedproductData);
    console.log(reviewData);
    return (
      <main className="productDetail">
        <article>
          <section className="product">
            <header>
              홈 > 캐릭터 > <span>BT21</span> (총 198개) | 다른상품보기
            </header>
            <div className="productInfoBox">
              <div className="productPreview">준현님</div>
              <div className="addProduct">가람님</div>
            </div>
          </section>
          <section>
            <div className="content">
              <ReviewPreview
                key={key}
                productData={copiedproductData}
                reviewData={reviewData}
              />
              <AddReview />
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default ProductDetail;
