import { Component } from 'react';
import './Input.scss';

export default class BirthInput extends Component {
  render() {
    let date = new Date();
    const {} = this.props;
    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" hatmlFor="nameInput">
          생년월일
        </label>
        {/* <input
          className="Input"
          type="text"
          name="input"
          placeholder="YYYY-MM-DD"
          required
          pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
          title="Enter a date in this format YYYY/MM/DD"
        /> */}
        <input className="Input dateInput" type="date" />
      </div>
    );
  }
}
