import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Category from './components/Category/Category';
import Nav from './components/Nav/Nav';
import productdetail from './pages/ProductDetail/ProductDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productdetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
