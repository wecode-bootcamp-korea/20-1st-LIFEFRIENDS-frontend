import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  // goToMain = e => {
  //   e.preventDefault();
  // };

  // handleInput = e => {
  //   const { name, loginInputValue } = e.target;
  //   this.setState({
  //     [name]: loginInputValue,
  //   });
  // };
  render() {
    return (
      // const conditionPw = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,16}$/
      // const { id, pw } = this.state;
      // const idIsValid = id.length >= 5 && id.length <= 20;
      // const pwIsValid = pw
      <div className="login">
        <header className="getUserHeader">
          <img alt="logo" src="../../../Data/images/naver_logo.png" />
          {/* <h1 className="getUserLogo">NEVER</h1> */}
        </header>
        <main className="loginContents">
          <div className="loginContentsWrap">
            <form
              className="loginForm"
              action="https://naver.com"
              // onSubmit={this.goToMain}
            >
              <div className="loginInputBox">
                <input
                  className="inputId loginInput"
                  type="text"
                  placeholder="아이디"
                  name="id"
                  onChange={this.handleInput}
                  // {!isValid && return()}
                />
                <p className="loginInputError errorId">
                  아이디를 입력해주세요.
                </p>
              </div>
              <div className="loginInputBox">
                <input
                  className="inputPw loginInput"
                  type="text"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={this.handleInput}
                />
                <p className="loginInputError errorPw">
                  비밀번호를 입력해주세요.
                </p>
              </div>
              <button className="loginButton">로그인</button>
            </form>
            <div className="loginOption">
              <button className="keepLogin">
                <i class="far fa-check-circle loginStatusBefore"></i>
                <i class="fas fa-check-circle loginStatusAfter"></i>
                로그인 상태 유지
              </button>
              <button className="ipSecurity">
                IP 보안 <span className="loginOnOff">OFF</span>
              </button>
            </div>
            <div className="findInfoList">
              <a href="#" className="findInfo forgotId">
                아이디 찾기
              </a>
              <a href="#" className="findInfo forgotPw">
                비밀번호 찾기
              </a>
              <a href="#" className="findInfo signUp">
                회원가입
              </a>
            </div>
          </div>
        </main>
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

export default withRouter(Login);
