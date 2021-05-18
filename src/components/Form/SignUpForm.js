import { Component } from 'react';
import PageLayout from '../Layout/PageLayout';
import IdInput from './Input/IdInput';
import PasswordInput from './Input/PasswordInput';
import NameInput from './Input/NameInput';
import BirthInput from './Input/BirthInput';
import GenderInput from './Input/GenderInput';
import PhoneInput from './Input/PhoneInput';
import Button from './Button/Button';
import './SignUpForm.scss';
import './Input/Input.scss';
import validator from '../../utils/InputValidator';

export default class SignUpForm extends Component {
  render() {
    const { text, type, signUpState, goToLogin, handleInput } = this.props;
    const { email } = signUpState;
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
            pwValid={validator.pw(signUpState.password)}
          />
          <NameInput
            handleInput={handleInput}
            nameValid={validator.name(signUpState.name)}
          />
          <BirthInput handleInput={handleInput} />
          <GenderInput handleInput={handleInput} />
          <PhoneInput
            handleInput={handleInput}
            signUpVerifyingState={signUpState.verifying_number}
          />
          <Button text={text} type={type} />
        </form>
      </PageLayout>
    );
  }
}

// const idRegx = /^[0-9a-z\-\_]{5,20}$/;
// const pwRegx =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
// const nameRegx = /^[가-힣a-zA-Z]+$/;

// const validator = {
//   id: input => idRegx.test(input),
//   pw: input => pwRegx.test(input),
//   name: input => nameRegx.test(input),
// };
