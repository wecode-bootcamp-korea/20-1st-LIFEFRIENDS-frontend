import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import './Nav.scss';

export class Navigator extends React.Component {
  render() {
    return (
      <div className="navAndHeader">
        <div className="lifeStoreNav">
          <header className="navHeader">
            <div className="navHeaderLeft">
              <a className="toMoveNaverPage" href="/#">
                LIEFER
              </a>
              <a className="toMoveNaverShopping" href="/#">
                라이퍼쇼핑
              </a>
            </div>
            <div className="navHeaderRight">
              <Link className="toLoginPage" to="/menu">
                <button className="loginButton">로그인</button>
              </Link>
              <a className="viewTotal" href="/#">
                <i className="fas fa-th"></i>
              </a>
            </div>
          </header>
          <nav className="navBody">
            <div className="logoAndSearch">
              <Link className="logoLifeStore" to="/menu">
                <button className="logoLifeStore">L I F E S T O R E</button>
              </Link>
              <div className="searchBox">
                <input
                  className="search"
                  type="text"
                  placeholder="검색어를 입력해보세요"
                />
                <button className="searchButton">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </nav>
          <Category />
        </div>
      </div>
    );
  }
}

export default Navigator;
