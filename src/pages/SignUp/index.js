import { Component } from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import SignUpForm from '../../components/Form/LoginForm';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
      name: '',
    };
  }
  render() {
    return (
      <PageLayout>
        <SignUpForm
          type="SignUp"
          text="회원가입"
          data={signUpData}
          {...this.state}
        />
      </PageLayout>
    );
  }
}

const signUpData = [
  {
    type: 'name',
    text: '이름',
    error: '',
  },
  {
    type: 'email',
    text: '이메일',
    error: '',
  },
  {
    type: 'password',
    text: '비밀번호',
    error: '',
  },
];
