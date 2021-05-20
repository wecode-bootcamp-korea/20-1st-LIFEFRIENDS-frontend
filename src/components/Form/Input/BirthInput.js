import { Component } from 'react';

export default class BirthInput extends Component {
  render() {
    const { handleInput } = this.props;

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" htmlFor="birthInput">
          생년월일
        </label>
        <input
          className="Input dateInput"
          type="date"
          name="birth_date"
          onChange={handleInput}
        />
      </div>
    );
  }
}
