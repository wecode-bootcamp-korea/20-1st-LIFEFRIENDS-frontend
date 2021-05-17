import { Component } from 'react';
import './Input.scss';

export default class BirthInput extends Component {
  render() {
    let date = new Date();
    const { handleInput, signUpState } = this.props;

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          생년월일
        </label>
        <input
          className="Input dateInput"
          type="date"
          name="birth"
          onChange={handleInput}
        />
      </div>
    );
  }
}
