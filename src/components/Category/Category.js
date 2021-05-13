import React from 'react';
import ProductCart from './ProductCard/ProductCart';
import SortingButton from './Sortingbutton/SortingButton';
import './Category.scss';
import '../../styles/Reset.scss';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      sortingField: {
        인기도순: 'views',
        누적판매순: 'sold',
        낮은가격순: 'cost',
        최신등록순: 'created_at',
        평점높은순: 'rating',
      },
      sortingFieldTitle: '',
      productData: 0, //왜 빈 배열로 하면 &&함수 작동안함?
    };
  }

  //api 연결성공
  // componentDidMount = () => {
  //   const { productData } = this.state;
  //   fetch('http://10.58.7.181:8000/categories/토이', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productData: data.MESSAGE,
  //       });
  //     });
  // };

  componentDidMount = () => {
    const { productData } = this.state;
    fetch('http://localhost:3000/data/categoryData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  };

  changeSortingField = sortingField => {
    const { productData } = this.state;
    this.setState({
      productData: productData.sort(
        (a, b) => b[sortingField] - a[sortingField]
      ),
    });
  };

  render() {
    const { productData, sortingField, sortingFieldTitle } = this.state;
    const { changeSortingField } = this;
    console.log(sortingField);

    return (
      <article className="category">
        <div className="categorybox">
          <span className="categoryName">토이</span>
          <span className="categoryLocation">
            홈 > 토이(총 {productData.length}개) > 전체
          </span>
        </div>
        <div className="filter">
          <ul className="sortButtonArea">
            <SortingButton
              sortingField={sortingField}
              sortFunction={changeSortingField}
            />
            <SortingButton
              sortingFieldTitle="누적판매순"
              sortFunction={changeSortingField}
            />
            <SortingButton
              sortingFieldTitle="낮은가격순"
              sortFunction={changeSortingField}
            />
            <SortingButton
              sortingFieldTitle="최신등록순"
              sortFunction={changeSortingField}
            />
            <SortingButton
              sortingFieldTitle="리뷰많은순"
              sortFunction={changeSortingField}
            />
            <SortingButton
              sortingFieldTitle="평점높은순"
              sortFunction={changeSortingField}
            />
          </ul>
        </div>
        <div>
          <ul className="productList">
            {productData &&
              productData.map(data => {
                return <ProductCart key={data.id} data={data} />;
              })}
          </ul>
        </div>
        <div className="menuItem">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
      </article>
    );
  }
}

export default Category;
