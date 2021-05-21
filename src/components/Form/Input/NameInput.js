import { Component } from 'react';

export default class NameInput extends Component {
  render() {
    const { handleInput, warn } = this.props;

    return (
      <div className="InputBox signUpInputBox">
        <label className="inputLabel" htmlFor="nameInput">
          이름
        </label>
        <input
          className="Input"
          type="text"
          onChange={handleInput}
          name="name"
        />
        <div className="errorBox">
          {warn && (
            <p className="InputError errorPw">올바른 이름 값을 입력해주세요.</p>
          )}
        </div>
      </div>
    );
  }
}
