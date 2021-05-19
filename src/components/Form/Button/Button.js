import { Component } from 'react';
import './Button.scss';

export default class Input extends Component {
  render() {
    const { text, type, loginValid } = this.props;
    return (
      <>
        {type === 'Login' && (
          <button className="commonButton" disabled={!loginValid}>
            {text}
          </button>
        )}
        {type === 'SignUp' && <button className="commonButton">{text}</button>}
      </>
    );
  }
}
