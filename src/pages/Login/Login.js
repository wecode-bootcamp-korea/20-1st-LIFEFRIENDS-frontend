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

  goToMain = e => {
    e.preventDefault();
    //회원가입
    const API = 'http://10.58.7.181:8000/users/login';
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          // save localstroage
          localStorage.setItem('MESSAGE', res['ACCESS_TOKEN']);
          // push to main
          this.props.history.push('https://naver.com');
        } else {
          alert('');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pw } = this.state;

    const pwRegx =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const idValid = id.length >= 5 && id.length <= 20;
    const pwValid = pwRegx.test(pw);
    const loginValid = idValid && pwValid;

    // console.log('pwValid >>> ', pwValid);
    // console.log(pw);
    // console.log('loginValid >>> ', loginValid);

    return (
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
              onSubmit={this.goToMain}
            >
              <div className="loginInputBox">
                <input
                  className="inputId loginInput"
                  type="text"
                  placeholder="아이디"
                  name="id"
                  onChange={this.handleInput}
                />
                <p className="loginInputError errorId">
                  아이디를 입력해주세요.
                </p>
              </div>
              <div className="loginInputBox">
                <input
                  className="inputPw loginInput"
                  type="password"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={this.handleInput}
                />
                <p className="loginInputError errorPw">
                  비밀번호를 입력해주세요.
                </p>
              </div>
              <button
                className={`loginButton ${loginValid && 'loginButtonAfter'}`}
                disabled={!loginValid}
              >
                로그인
              </button>
            </form>
            <div className="loginOption">
              <button className="keepLogin">
                <i className="far fa-check-circle loginStatusBefore"></i>
                <i className="fas fa-check-circle loginStatusAfter"></i>
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
