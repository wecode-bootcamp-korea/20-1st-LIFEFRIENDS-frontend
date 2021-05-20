import React, { Component } from 'react';
import AddProduct from './AddProduct/AddProduct';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      productData: {},
      copiedproductData: 0,
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
    fetch(`http://10.58.2.190:8000/reviews/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          reviewData: data,
        })
      );
  }
  render() {
    const { key, copiedproductData } = this.state;
    return (
      <main className="productDetail">
        <article>
          <section className="product">
            <header>
              홈 {'>'} 캐릭터 {'>'} <span>BT21</span> (총 198개) | 다른상품보기
            </header>
            <div className="productInfoBox">
              <div className="productPreview">준현님</div>
              <AddProduct key={key} copiedproductData={copiedproductData} />
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
