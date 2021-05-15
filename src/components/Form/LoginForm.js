import { Component } from 'react';
import LoginInput from './Inputs/LoginInput';
import Button from './Button/Button';
import PageLayout from '../Layout/PageLayout';
import './LoginForm.scss';

export default class LoginForm extends Component {
  render() {
    const {
      loginData,
      loginState,
      text,
      type,
      goToMain,
      handleInput,
      handleStatus,
      handleIp,
    } = this.props;

    const loginValid =
      validator.id(loginState.id) && validator.pw(loginState.pw);

    return (
      <PageLayout>
        <form className="loginForm" onSubmit={goToMain}>
          {loginData.map(input => (
            <LoginInput
              handleInput={handleInput}
              handleValid={validator[input.name]}
              loginState={loginState}
              key={input.name}
              value={loginState.id}
              name={input.name}
              type={input.type}
              text={input.text}
              error={input.error}
            />
          ))}
          <Button text={text} type={type} loginValid={loginValid} />
        </form>

        <div className="loginOption">
          <div className="statusBox">
            <button className="keepLogin" onClick={handleStatus}>
              {loginState.statusActive ? (
                <i className="fas fa-check-circle loginStatusAfter"></i>
              ) : (
                <i className="far fa-check-circle loginStatusBefore"></i>
              )}
            </button>
            로그인 상태 유지
          </div>
          <button className="ipSecurity" onClick={handleIp}>
            IP 보안
            {loginState.ipActive ? (
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
      </PageLayout>
    );
  }
}

const pwRegx =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const validator = {
  name: input => input.length <= 6,
  id: input => input.length >= 5 && input.length <= 20,
  pw: input => pwRegx.test(input),
};
