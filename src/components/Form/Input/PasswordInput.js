import { Component } from 'react';

export default class PasswordInput extends Component {
  render() {
    const { handleInput, signUpPwState, signUpRePwState, warn } = this.props;
    return (
      <>
        <div className="InputBox signUpInputBox">
          <label className="inputLabel" htmlFor="pwInput">
            비밀번호
          </label>
          <input
            className="Input"
            type="password"
            onChange={handleInput}
            name="password"
          />
          <div className="errorBox">
            {warn && (
              <p className="InputError errorPw">
                8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
              </p>
            )}
          </div>
        </div>
        <div className="InputBox signUpInputBox">
          <label className="inputLabel" htmlFor="re-PwInput">
            비밀번호 재확인
          </label>
          <input
            className="Input"
            type="password"
            name="re_password"
            onChange={handleInput}
          />
          <div className="errorBox">
            {!(signUpPwState === signUpRePwState) && (
              <p className="InputError errorPw">
                비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}
