import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
