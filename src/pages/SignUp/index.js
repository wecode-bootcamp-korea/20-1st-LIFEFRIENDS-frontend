import { Component } from 'react';
import PageLayout from '../../components/Layout/PageLayout';

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
        {/* <SignUpForm
          type="SignUp"
          text="회원가입"
          data={signUpData}
          {...this.state}
        /> */}
      </PageLayout>
    );
  }
}
