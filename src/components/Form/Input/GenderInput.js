import { Component } from 'react';

export default class GenderInput extends Component {
  render() {
    const { handleInput } = this.props;

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" htmlFor="genderInput">
          성별
        </label>
        <select
          name="gender"
          className="selectGender Input"
          onChange={handleInput}
        >
          <option value="">성별</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
          <option value="선택 안함">선택 안함</option>
        </select>
      </div>
    );
  }
}
