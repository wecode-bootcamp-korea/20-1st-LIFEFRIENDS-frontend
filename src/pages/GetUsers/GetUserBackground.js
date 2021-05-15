import React from 'react';
import { withRouter } from 'react-router-dom';
import './GetUserBackground.scss';

class GetUserHeader extends React.Component {
  render() {
    return (
      <div className="getUserBackground">
        <header className="getUserHeader">
          <img alt="logo" src="../../../Data/images/naver_logo.png" />
          {/* <h1 className="getUserLogo">NEVER</h1> */}
        </header>
        <footer className="getUserFooter">
          <ul className="footerList">
            <li className="">이용약관</li>
            <li className="">개인정보처리방침</li>
            <li className="">책임의 한계와 법적고지</li>
            <li className="">회원정보</li>
            <li className="">고객센터</li>
          </ul>
          <address>
            <a className="footerLogo">NAVER</a>
            <em className="copyRight">
              Copyright <span className="copyrightBold">© NAVER Corp.</span> All
              Rights Reserved.
            </em>
          </address>
        </footer>
      </div>
    );
  }
}

export default withRouter(GetUserHeader);
