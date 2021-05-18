import { Component } from 'react';

export default class PhoneInput extends Component {
  render() {
    const { handleInput, signUpVerifyingState } = this.props;

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" htmlFor="phoneInput">
          휴대전화
        </label>
        <div className="phoneInputBox">
          <input
            className="Input phoneInput"
            type="text"
            maxLength="13"
            onChange={handleInput}
            name="phone_number"
          />
          <button
            type="button"
            className="commonButton getVerifyNum"
            id="veryfyingButton"
            onClick={() => alert('인증번호는 3564입니다.')}
          >
            인증번호 받기
          </button>
        </div>
        <input
          className="Input"
          type="text"
          onChange={handleInput}
          name="verifying_number"
        />
        <div className="errorBox">
          {!(signUpVerifyingState === '3564') && (
            <p className="InputError errorPw">인증번호가 일치하지 않습니다.</p>
          )}
        </div>
      </div>
    );
  }
}
