import React from 'react';
import CategoryList from './CategoryList/CategoryList';
import './Category.scss';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryListData: [],
    };
  }

  componentDidMount() {
    fetch('Data/CategoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ categoryListData: data.categoryData });
      });
  }

  render() {
    return (
      <div className="category">
        <CategoryList eachCategoryList={this.state.categoryListData} />
      </div>
    );
  }
}

export default Category;
