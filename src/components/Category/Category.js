import React from 'react';
import ProductCart from './ProductCard/ProductCart';
import SortingButton from './Sortingbutton/SortingButton';
import PageButton from './PageButton/PageButton';
import './Category.scss';
import '../../styles/Reset.scss';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      sortingField: [
        {
          id: 1,
          title: '인기도순',
          dataField: 'clicks',
          manyToLittle: true,
        },
        {
          id: 2,
          title: '누적판매순',
          dataField: 'sold',
          manyToLittle: true,
        },
        {
          id: 3,
          title: '낮은가격순',
          dataField: 'cost',
          manyToLittle: false,
        },
        {
          id: 4,
          title: '최신등록순',
          dataField: 'created_at',
          manyToLittle: true,
        },
        {
          id: 5,
          title: '평점높은순',
          dataField: 'rating',
          manyToLittle: true,
        },
      ],
      sortingFieldTitle: '',
      productData: 0, //왜 빈 배열로 하면 &&함수 작동안함?
      itemsOnEachPage: 8,
      numberOfPages: [],
      currentPage: 1,
    };
  }

  // api 연결성공
  // componentDidMount = () => {
  //   const { producData, itemsOnEachPage } = this.state;
  //   fetch('http://10.58.7.181:8000/categories/토이?sort=POPULAR', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productData: data.MESSAGE,
  //         numberOfPages: Array.from(
  //           { length: Math.ceil(data.MESSAGE.length / itemsOnEachPage) },
  //           (v, i) => i //원리 이해 필요
  //         ),
  //       });
  //     });
  // };

  //MockData 연결용
  componentDidMount = () => {
    const { productData, itemsOnEachPage } = this.state;
    fetch('http://localhost:3000/data/categoryData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
          numberOfPages: Array.from(
            { length: Math.ceil(data.length / itemsOnEachPage) },
            (v, i) => i //원리 이해 필요
          ),
        });
      });
  };

  changeSortingField = (sortingField, sortRule) => {
    const { productData, itemsOnEachPage } = this.state;
    this.setState({
      productData: productData.sort(
        sortRule === true
          ? (a, b) => b[sortingField] - a[sortingField]
          : (a, b) => a[sortingField] - b[sortingField]
      ),
    });
  };

  pageChange = page => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const {
      productData,
      sortingField,
      numberOfPages,
      currentPage,
      itemsOnEachPage,
    } = this.state;
    const { changeSortingField, pageChange } = this;
    // console.log(numberOfPages);

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
            {sortingField.map(data => {
              return (
                <SortingButton
                  key={data.id}
                  title={data.title}
                  field={data.dataField}
                  sortFunction={changeSortingField}
                  sortingRule={data.manyToLittle}
                />
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="productList">
            {productData &&
              productData
                .slice(
                  (currentPage - 1) * itemsOnEachPage,
                  currentPage * itemsOnEachPage
                )
                .map(data => {
                  return <ProductCart key={data.id} data={data} />;
                })}
          </ul>
        </div>
        <div className="menuItem">
          {numberOfPages.map(num => {
            return (
              <PageButton
                key={num}
                page={num + 1}
                pageChangeFunc={pageChange}
                currentPage={currentPage}
              />
            );
          })}
        </div>
      </article>
    );
  }
}

export default Category;
