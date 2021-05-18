import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/Nav" component={Nav} />
          {/* <Route exact path="/Main" component={Main} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
