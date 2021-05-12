import React from 'react';
import { withRouter } from 'react-router-dom';
import GetUserHeader from './GetUserHeader';
import GetUserFooter from './GetUserFooter';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      active: false,
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

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  render() {
    const { id, pw, active } = this.state;

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
        <GetUserHeader />
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
                {!id && (
                  <p className="loginInputError errorId">
                    아이디를 입력해주세요.
                  </p>
                )}
              </div>
              <div className="loginInputBox">
                <input
                  className="inputPw loginInput"
                  type="password"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={this.handleInput}
                />
                {!pw && (
                  <p className="loginInputError errorPw">
                    비밀번호를 입력해주세요.
                  </p>
                )}
              </div>
              <button
                className={`loginButton ${loginValid && 'loginButtonAfter'}`}
                disabled={!loginValid}
              >
                로그인
              </button>
            </form>
            <div className="loginOption">
              <button className="keepLogin" onClick={this.handleClick}>
                {active ? (
                  <i className="fas fa-check-circle loginStatusAfter"></i>
                ) : (
                  <i className="far fa-check-circle loginStatusBefore"></i>
                )}
                로그인 상태 유지
              </button>
              <button className="ipSecurity" onClick={this.handleClick}>
                IP 보안{' '}
                {active ? (
                  <span className="ipOnOff ipOn">ON</span>
                ) : (
                  <span className="ipOnOff ipOff">OFF</span>
                )}
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
        <GetUserFooter />
      </div>
    );
  }
}

export default withRouter(Login);
