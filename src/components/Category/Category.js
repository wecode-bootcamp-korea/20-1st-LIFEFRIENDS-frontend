import React from 'react';
import ProductCart from './ProductCard/ProductCart';
import SortingButton from './Sortingbutton/SortingButton';
import PageButton from './PageButton/PageButton';
import './Category.scss';

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
      currentSortingField: '',
      productDataOrigin: 0,
      productData: 0,
      itemsOnEachPage: 8,
      numberOfPages: [],
      currentPage: 1,
    };
  }

  // api 연결성공
  componentDidMount = () => {
    const { producData, itemsOnEachPage } = this.state;
    fetch(
      `http://10.58.7.181:8000/products/categories${this.props.location.search}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productDataOrigin: data.MESSAGE,
          productData: data.MESSAGE,
          numberOfPages: Array.from(
            { length: Math.ceil(data.MESSAGE.length / itemsOnEachPage) },
            (v, i) => i //원리 이해 필요
          ),
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { producData, itemsOnEachPage } = this.state;
    if (prevProps.location.search !== this.props.location.search)
      fetch(
        `http://10.58.7.181:8000/products/categories${this.props.location.search}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            productData: data.MESSAGE,
            numberOfPages: Array.from(
              { length: Math.ceil(data.MESSAGE.length / itemsOnEachPage) },
              (v, i) => i //원리 이해 필요
            ),
          });
        });
  };

  changeSortingField = (sortingField, sortRule) => {
    const { productDataOrigin, currentSortingField } = this.state;
    this.setState({
      productData:
        productDataOrigin &&
        productDataOrigin.sort(
          sortRule === true
            ? (a, b) => b[sortingField] - a[sortingField]
            : (a, b) => a[sortingField] - b[sortingField]
        ),
      currentSortingField: sortingField,
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
      currentSortingField,
    } = this.state;
    const { categoryStatus, location } = this.props;
    const { changeSortingField, pageChange } = this;

    return (
      <article className="category">
        <div className="categorybox">
          <span className="categoryName">
            {location.search.slice(location.search.indexOf('=') + 1)}
          </span>
          <span className="categoryLocation">
            홈 > {location.search.slice(location.search.indexOf('=') + 1)}(총{' '}
            {productData.length}개) > 전체
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
                  currentSortingField={currentSortingField}
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
