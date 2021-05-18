import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './LoginAndLogout.scss';

export class LoginAndLogout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  changeLogout = () => {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
    // this.props.histoty.push('/');
  };

  render() {
    return (
      <div className="LoginAndLogout">
        {localStorage.access_token ? (
          <div className="loggedIn">
            <button className="logoutButton" onClick={this.changeLogout}>
              <Link to="/menu">
                {localStorage.getItem('name')}님{' '}
                <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <div className="loggedInBox">
                <p className="loggedInUserName">
                  {localStorage.getItem('name')}님
                </p>
                <p className="loggedInUserEmail">
                  {localStorage.getItem('email')}님
                </p>
              </div>
            </button>
            <button className="goToPickStore">
              <Link to={'/picked'}>찜한스토어</Link>
            </button>
            <button className="goToMypage">
              <Link to={'/myPage'}>마이페이지</Link>
            </button>
            <button className="goToCart">
              <Link to={'/cart'}>장바구니</Link>
            </button>
          </div>
        ) : (
          <div className="goToLogin">
            <Link to="/login">
              <button className="loginButton">로그인</button>
            </Link>
          </div>
        )}
        <a className="viewTotal" href="/#">
          <i className="fas fa-th"></i>
        </a>
      </div>
    );
  }
}

export default withRouter(LoginAndLogout);
