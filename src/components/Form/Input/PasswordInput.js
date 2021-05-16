import { Component } from 'react';
import './Input.scss';

export default class PasswordInput extends Component {
  render() {
    const {} = this.props;
    return (
      <>
        <div className="InputBox signUpInputBox">
          <label className="inputLabel" hatmlFor="nameInput">
            비밀번호
          </label>
          <input
            className="Input"
            type="password"
            placeholder="type in pasword here"
            required
          />
          <p className="InputError errorPw">
            8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
          </p>
        </div>
        <div className="InputBox signUpInputBox">
          <label className="inputLabel" hatmlFor="nameInput">
            비밀번호 재확인
          </label>
          <input className="Input" type="password" required />
          <p className="InputError errorPw">비밀번호가 일치하지 않습니다.</p>
        </div>
      </>
    );
  }
}
