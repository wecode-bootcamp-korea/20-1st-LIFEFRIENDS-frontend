import { Component } from 'react';
import './Input.scss';

export default class IdInput extends Component {
  render() {
    const {} = this.props;
    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          아이디
        </label>
        <input className="Input" type="text" required />
        <p className="InputError errorPw">
          5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        </p>
      </div>
    );
  }
}
