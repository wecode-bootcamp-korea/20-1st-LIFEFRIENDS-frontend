import { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <ul className="footerList">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>책임의 한계와 법적고지</li>
          <li>회원정보</li>
          <li>고객센터</li>
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
