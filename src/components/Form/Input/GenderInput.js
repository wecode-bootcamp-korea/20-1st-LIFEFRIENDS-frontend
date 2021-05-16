import { Component } from 'react';
import './Input.scss';

export default class GenderInput extends Component {
  render() {
    const {} = this.props;
    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          성별
        </label>
        <select name="gender" className="selectGender Input">
          <option value="">성별</option>
          <option value="male">남자</option>
          <option value="felmale">여자</option>
          <option value="empty">선택안함</option>
        </select>
      </div>
    );
  }
}
