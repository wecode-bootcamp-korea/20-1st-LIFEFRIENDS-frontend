import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Category from './components/Category/Category';
// import Nav from './components/Nav/Nav';
import ProductDatail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/productdetail/:id" component={ProductDatail} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
