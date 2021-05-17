import { Component } from 'react';
import './Input.scss';

export default class PhoneInput extends Component {
  render() {
    const { handleInput, signUpState } = this.props;
    console.log(signUpState);

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          휴대전화
        </label>
        <div className="phoneInputBox">
          <input
            className="Input phoneInput"
            type="text"
            maxLength="13"
            onChange={handleInput}
            name="phone_number"
            required
          />
          <button className="commonButton getVerifyNum">인증번호 받기</button>
          {/* <p className="InputError errorPw">check yout input</p> */}
        </div>
        <input className="Input" type="text" required />
        <p className="InputError errorPw">인증번호가 일치하지 않습니다.</p>
      </div>
    );
  }
}
