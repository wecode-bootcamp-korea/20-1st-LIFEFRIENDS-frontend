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
      productData: {},
      copiedproductData: {},
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
  }

  changeAverage = () => {
    const { avgValue } = this.state;
    const node = this.myRef.current.childNodes;
    const num = Number(String(avgValue).substr(0, 1));
    const point = Number(String(avgValue).substr(2, 1));
    console.log(num);
    console.log(point, 10 - point);

    for (let i = 0; i < num; i++) {
      node[i].style.color = '#f84f50';
    }

    for (let i = 0; i < 6 - num; i++) {
      console.log(num);
      // node[num].style.color = 'blue';
      // node[num].style.background = 'blue';
      // node[num].style.backgroundClip = 'text';
      // node[num].style.color = 'transparent';

      node[
        num
      ].style.background = `linear-gradient(to right, #f84f50 70%, #888888 30%)`;
      node[num].style.backgroundClip = 'text';
      node[num].style.color = 'transparent';

      // node[num].className = 'fas fa-star pointstar';
    }
  };

  render() {
    const { key, copiedproductData } = this.state;
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
                <AddReview changeAverage={this.changeAverage} />
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
