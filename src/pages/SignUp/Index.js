import { Component } from 'react';
import SignUpForm from '../../components/Form/SignUpForm';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      birth_date: '',
      gender: '',
      phone_number: '',
    };
  }
  render() {
    return (
      <SignUpForm
        type="SignUp"
        text="회원가입"
        signUpState={{ ...this.state }}
      />
    );
  }
}
