import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

export class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: '',
      expanded: false,
      disable: false,
    };
  }

  showMore = () => {
    this.state.itemsToShow === 10
      ? this.setState({ itemsToShow: this.props.length, expanded: true })
      : this.setState({ itemsToShow: 10, expanded: false });
  };

  render() {
    const { eachCategoryList } = this.props;

    return (
      <div className="totalCategoryList">
        <div className="categoryList">
          {eachCategoryList.slice(0, 10).map(menuObj => {
            return (
              <div key={menuObj.menuId} className="categoryMenu">
                {menuObj.categoryList.length > 0 ? (
                  <>
                    <Link
                      to={`/product?menu=${menuObj.menuName}`}
                      className="categoryText"
                    >
                      {menuObj.menuName}
                    </Link>
                    <i className="fa fa-caret-down"></i>
                  </>
                ) : (
                  <Link
                    to={`/product?menu=${menuObj.menuName}`}
                    className="categoryText"
                  >
                    {menuObj.menuName}
                  </Link>
                )}
                {menuObj.categoryList.length > 0 && (
                  <div className="subMenuList">
                    {menuObj.categoryList.map(subMenuObj => (
                      <Link
                        key={subMenuObj.categoryId}
                        to={`/product?menu=${menuObj.menuName}&category=${subMenuObj.categoryName}`}
                        className="subMenu"
                      >
                        {subMenuObj.categoryName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <button
            className="showMoreButton"
            // disabled={this.state.expanded ? true : false}
            onClick={e => this.showMore()}
          >
            <span className={this.state.expanded ? 'closed' : 'open'}>
              {this.state.expanded ? (
                <span>
                   닫기<i className="fas fa-angle-up"></i>
                </span>
              ) : (
                <span>
                  더 보기<i class="fas fa-angle-down"></i>
                </span>
              )}
            </span>
            {/* <button
              className="showMoreButton1"
              disabled={this.state.expanded ? false : true}
              onClick={e => this.showMore()}
            >
              <span className={this.state.expanded ? 'open' : 'closed'}>
                {this.state.expanded ? (
                  <span> 닫기 </span>
                ) : (
                  <span>더 보기</span>
                )}
              </span>
            </button> */}
          </button>
        </div>
        <div className="categoryListNextLine">
          {eachCategoryList.slice(11, this.state.itemsToShow).map(menuObj => {
            return (
              <div key={menuObj.menuId} className="categoryMenuNextLine">
                {menuObj.categoryList.length > 0 ? (
                  <>
                    <Link
                      to={`/product?menu=${menuObj.menuName}`}
                      className="categoryTextNextLine"
                    >
                      {menuObj.menuName}
                    </Link>
                    <i className="fa fa-caret-down"></i>
                  </>
                ) : (
                  <Link
                    to={`/product?menu=${menuObj.menuName}`}
                    className="categoryTextNextLine"
                  >
                    {menuObj.menuName}
                  </Link>
                )}
                {menuObj.categoryList.length > 0 && (
                  <div className="subMenuListNextLine">
                    {menuObj.categoryList.map(subMenuObj => (
                      <Link
                        key={subMenuObj.categoryId}
                        to={`/product?menu=${menuObj.menuName}&category=${subMenuObj.categoryName}`}
                        className="subMenuNextLine"
                      >
                        {subMenuObj.categoryName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryList;
