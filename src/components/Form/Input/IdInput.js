import { Component } from 'react';

export default class IdInput extends Component {
  render() {
    const { handleInput, warn } = this.props;
    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" htmlFor="idInput">
          아이디
        </label>
        <input
          className="Input"
          type="text"
          onChange={handleInput}
          name="email"
        />
        <div className="errorBox">
          {warn && (
            <p className="InputError errorPw">
              5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
            </p>
          )}
        </div>
      </div>
    );
  }
}
