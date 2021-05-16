import { Component } from 'react';
import './Input.scss';

export default class NameInput extends Component {
  render() {
    const {} = this.props;
    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          이름
        </label>
        <input className="Input" type="text" required />
        <p className="InputError errorPw">필수 정보입니다.</p>
      </div>
    );
  }
}
