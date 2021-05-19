import { Component } from 'react';
import PageLayout from '../Layout/PageLayout';
import IdInput from './Input/IdInput';
import PasswordInput from './Input/PasswordInput';
import NameInput from './Input/NameInput';
import BirthInput from './Input/BirthInput';
import GenderInput from './Input/GenderInput';
import PhoneInput from './Input/PhoneInput';
import Button from './Button/Button';
import validator from '../../utils/InputValidator';
import './SignUpForm.scss';
import './Input/Input.scss';

export default class SignUpForm extends Component {
  render() {
    const { text, type, signUpState, goToLogin, handleInput } = this.props;
    const { email, password, name, verifying_number } = signUpState;
    return (
      <PageLayout>
        <form className="signUpForm" onSubmit={goToLogin}>
          <IdInput
            handleInput={handleInput}
            warn={email && !validator.email(email)}
          />
          <PasswordInput
            handleInput={handleInput}
            signUpPwState={signUpState.password}
            signUpRePwState={signUpState.re_password}
            warn={password && !validator.password(password)}
          />
          <NameInput
            handleInput={handleInput}
            warn={name && !validator.name(name)}
          />
          <BirthInput handleInput={handleInput} />
          <GenderInput handleInput={handleInput} />
          <PhoneInput
            handleInput={handleInput}
            warn={verifying_number && !(verifying_number === '3564')}
          />
          <Button text={text} type={type} />
        </form>
      </PageLayout>
    );
  }
}
