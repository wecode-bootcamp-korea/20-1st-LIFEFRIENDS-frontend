import { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  render() {
    const { type, text, name, error, handleInput, value } = this.props;

    return (
      <div className="InputBox">
        <input
          className="Input"
          name={name}
          type={type}
          placeholder={text}
          onChange={handleInput}
        />
        {!value[name] && <p className="loginInputError errorPw">{error}</p>}
      </div>
    );
  }
}
