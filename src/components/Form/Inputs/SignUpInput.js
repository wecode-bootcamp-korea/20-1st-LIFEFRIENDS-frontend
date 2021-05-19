import { Component } from 'react';
import './Input.scss';

export default class SignUpInput extends Component {
  render() {
    return (
      <div className="Input">
        <input className="Input" name={name} type={type} placeholder={text} />
        <p className="loginInputError errorPw">error</p>
      </div>
    );
  }
}
