import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

export class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: 10,
      expanded: false,
    };
  }

  showMore() {
    this.state.itemsToShow === 10
      ? this.setState({ itemsToShow: this.props.length, expanded: true })
      : this.setState({ itemsToShow: 10, expanded: false });
  }

  render() {
    const { eachCategoryList } = this.props;

    return (
      <div className="categoryList">
        {eachCategoryList.slice(0, this.state.itemsToShow).map(menuObj => {
          return (
            <div key={menuObj.menuId} className="categoryMenu">
              {menuObj.categoryList.length > 0 ? (
                <>
                  <Link to="/menu" className="categoryText">
                    {menuObj.menuName}
                  </Link>
                  <i className="fa fa-caret-down"></i>
                </>
              ) : (
                <Link to="/menu" className="categoryText">
                  {menuObj.menuName}
                </Link>
              )}
              {menuObj.categoryList.length > 0 && (
                <div className="subMenuList">
                  {menuObj.categoryList.map(subMenuObj => (
                    <Link
                      key={subMenuObj.categoryId}
                      to="/menu"
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
        <button className="showMoreButton" onClick={e => this.showMore()}>
          {this.state.expanded ? <span> 닫기 </span> : <span>더 보기</span>}
        </button>
      </div>
    );
  }
}

export default CategoryList;
