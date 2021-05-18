import { Component } from 'react';
import './Input.scss';

export default class LoginInput extends Component {
  render() {
    const { handleInput, name, type, text, error, loginState } = this.props;
    return (
      <div className="InputBox">
        <input
          className="Input"
          name={name}
          type={type}
          placeholder={text}
          onChange={handleInput}
        />
        {!loginState[name] && <p className="InputError errorPw">{error}</p>}
      </div>
    );
  }
}
