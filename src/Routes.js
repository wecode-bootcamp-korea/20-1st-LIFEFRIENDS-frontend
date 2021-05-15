import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
// import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
