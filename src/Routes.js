import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Category from './components/Category/Category';
import Nav from './components/Nav/Nav';
import ProductDatail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryStatus: '',
    };
  }

  changeCategoryStatus = category => {
    this.setState = {
      categoryStatus: category,
    };
  };

  render() {
    console.log(this.state.categoryStatus);
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/productDetail" component={ProductDatail} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
