import React from 'react';
import { withRouter } from 'react-router-dom';
import './GetUserFooter.scss';

class GetUserFooter extends React.Component {
  render() {
    return (
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
    );
  }
}

export default withRouter(GetUserFooter);
