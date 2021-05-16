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
    const { text, type } = this.props;

    return (
      <PageLayout>
        <form className="signUpForm" action="#">
          <IdInput />
          <PasswordInput />
          <NameInput />
          <BirthInput />
          <GenderInput />
          <PhoneInput />
          <Button text={text} type={type} />
        </form>
      </PageLayout>
    );
  }
}
