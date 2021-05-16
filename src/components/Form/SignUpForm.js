import { Component } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import LoginInput from './Inputs/SignUpInput';
import Button from './Button/Button';
import './SignUpForm.scss';

export default class SignUpForm extends Component {
  render() {
    const {} = this.props;

    return (
      <PageLayout>
        <form className="signUpForm">
          <SignUpInput />
          <Button />
        </form>
      </PageLayout>
    );
  }
}
