import { Component } from 'react';
import './LoginOption.scss';

export default class LoginOption extends Component {
  render() {
    console.log(this.props);
    const { handleClick, active } = this.props;
    return (
      <div className="loginOption">
        <div className="loginStatusBox">
          <button className="keepLogin" onClick={handleClick}>
            {/* <i className="fas fa-check-circle loginStatusAfter"></i> */}
            {active ? (
              <i className="fas fa-check-circle loginStatusAfter"></i>
            ) : (
              <i className="far fa-check-circle loginStatusBefore"></i>
            )}
            로그인 상태 유지
          </button>
          <button className="ipSecurity" onClick={handleClick}>
            IP 보안
            <span className="ipOnOff ipOn">ON</span>
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
    );
  }
}
