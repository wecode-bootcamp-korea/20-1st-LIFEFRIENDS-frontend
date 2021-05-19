import React from 'react';
import { withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
// import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <>
        <h1>Westagram</h1>
        <Category />
      </>
    );
  }
}

export default withRouter(Login);
