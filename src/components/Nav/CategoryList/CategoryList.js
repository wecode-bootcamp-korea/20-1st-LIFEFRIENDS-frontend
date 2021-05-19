import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
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

  goToCategory = i => {
    const { eachCategoryList, categoryStatus } = this.props;
    this.props.history.push(
      `/categories?&menu=${eachCategoryList[i].menuName}`
    );
  };

  goToSubCategory = (i, j) => {
    const { eachCategoryList, categoryStatus } = this.props;
    this.props.history.push(
      `/categories?&${i < 6 ? 'theme' : 'category'}=${
        eachCategoryList[i].categoryList[j].categoryName
      }`
    );
  };

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
          {eachCategoryList &&
            eachCategoryList.slice(0, 10).map(menuObj => {
              return (
                <div key={menuObj.menuId} className="categoryMenu">
                  {menuObj.categoryList.length > 0 ? (
                    <>
                      <div
                        onClick={() => this.goToCategory(menuObj.menuId - 1)}
                      >
                        {menuObj.menuName}
                      </div>
                      <i className="fa fa-caret-down"></i>
                    </>
                  ) : (
                    <div onClick={() => this.goToCategory(menuObj.menuId - 1)}>
                      {menuObj.menuName}
                    </div>
                  )}
                  {menuObj.categoryList.length > 0 && (
                    <div className="subMenuList">
                      {menuObj.categoryList.map(subMenuObj => (
                        <div
                          key={subMenuObj.categoryId}
                          onClick={() =>
                            this.goToSubCategory(
                              menuObj.menuId - 1,
                              subMenuObj.categoryId - 1
                            )
                          }
                          className="subMenu"
                        >
                          {subMenuObj.categoryName}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          <button
            className="showMoreButton"
            disabled={this.state.expanded ? true : false}
            onClick={e => this.showMore()}
          >
            <span className={this.state.expanded ? 'closed' : 'open'}>
              {this.state.expanded ? <span> 닫기 </span> : <span>더 보기</span>}
            </span>
            <button
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
            </button>
          </button>
        </div>
        <div className="categoryListNextLine">
          {eachCategoryList &&
            eachCategoryList.slice(11, this.state.itemsToShow).map(menuObj => {
              return (
                <div key={menuObj.menuId} className="categoryMenuNextLine">
                  {menuObj.categoryList.length > 0 ? (
                    <>
                      <div
                        onClick={() => this.goToCategory(menuObj.menuId - 1)}
                      >
                        {menuObj.menuName}
                      </div>
                      <i className="fa fa-caret-down"></i>
                    </>
                  ) : (
                    <div onClick={() => this.goToCategory(menuObj.menuId - 1)}>
                      {menuObj.menuName}
                    </div>
                  )}
                  {menuObj.categoryList.length > 0 && (
                    <div className="subMenuListNextLine">
                      {menuObj.categoryList.map(subMenuObj => (
                        <div
                          key={subMenuObj.categoryId}
                          onClick={() =>
                            this.goToSubCategory(
                              menuObj.menuId - 1,
                              subMenuObj.categoryId - 1
                            )
                          }
                          className="subMenu"
                        >
                          {subMenuObj.categoryName}
                        </div>
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

export default withRouter(CategoryList);
