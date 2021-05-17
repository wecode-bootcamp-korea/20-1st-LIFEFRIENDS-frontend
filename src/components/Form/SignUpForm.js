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
import './Button/Button.scss';

export default class SignUpForm extends Component {
  render() {
    const { text, type, signUpState, goToLogin, handleInput } = this.props;

    return (
      <PageLayout>
        <form className="signUpForm" onSubmit={goToLogin}>
          <IdInput handleInput={handleInput} signUpState={signUpState.email} />
          <PasswordInput
            handleInput={handleInput}
            signUpState={signUpState.password}
          />
          <NameInput handleInput={handleInput} signUpState={signUpState.name} />
          <BirthInput
            handleInput={handleInput}
            signUpState={signUpState.birth_date}
          />
          <GenderInput
            handleInput={handleInput}
            signUpState={signUpState.gender}
          />
          <PhoneInput
            handleInput={handleInput}
            signUpState={signUpState.phone_number}
          />
          <Button text={text} type={type} />
        </form>
      </PageLayout>
    );
  }
}
