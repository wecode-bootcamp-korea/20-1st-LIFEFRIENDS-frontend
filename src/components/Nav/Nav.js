import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';
import './Nav.scss';

export class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryListData: [],
      searchValue: '',
      searchList: [],
    };
  }

  componentDidMount() {
    fetch('Data/CategoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ categoryListData: data.categoryData });
      });
  }

  handleSearchValue = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  goToSearchResult = e => {
    e.preventDefault();
    this.props.history.push(`/product?menu='${this.state.searchValue}'`);
  };

  render() {
    const filteredList = this.state.categoryListData.filter(category => {
      return (
        category.menuName
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase()) && category
      );
    });
    return (
      <div className="navAndHeader">
        <div className="lifeStoreNav">
          <header className="navHeader">
            <div className="navHeaderLeft">
              <a className="toMoveNaverPage" href="/#">
                LIEFER
              </a>
              <a className="toMoveNaverShopping" href="/#">
                라이퍼쇼핑
              </a>
            </div>
            <div className="navHeaderRight">
              <Link className="toLoginPage" to="/menu">
                <button className="loginButton">로그인</button>
              </Link>
              <a className="viewTotal" href="/#">
                <i className="fas fa-th"></i>
              </a>
            </div>
          </header>
          <nav className="navBody">
            <div className="logoAndSearch">
              <Link className="logoLifeStore" to="/menu">
                <button className="logoLifeStore">L I F E S T O R E</button>
              </Link>
              <div className="searchBox">
                <form onSubmit={this.goToSearchResult}>
                  <input
                    className="search"
                    type="text"
                    placeholder="검색어를 입력해보세요"
                    onChange={this.handleSearchValue}
                  />
                  <button className="searchButton">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                <ul
                  className={`searchListContainer ${
                    this.state.searchValue && filteredList.length && 'open'
                  }`}
                >
                  {filteredList.length > 0 &&
                    filteredList.map(category => {
                      return (
                        <li key={category.menuId}>
                          <div>
                            <Link
                              to={`/product?menu=${category.menuName}`}
                              className="categoryName"
                            >
                              {category.menuName}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </nav>
          <CategoryList eachCategoryList={this.state.categoryListData} />
        </div>
      </div>
    );
  }
}

export default withRouter(Navigator);
