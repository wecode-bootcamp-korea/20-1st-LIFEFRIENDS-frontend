import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/productdetail/:id" component={ProductDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
