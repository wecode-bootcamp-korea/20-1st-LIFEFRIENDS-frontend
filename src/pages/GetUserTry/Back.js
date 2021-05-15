import { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Form';
import './Back.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="Back">
        <Header />
        {children}
        {/* <Form type="signUp" text="" data={signUpData} /> */}
        <Footer />
      </div>
    );
  }
}

export default class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <Form type="signIn" text="" data={signInData} />
      </Layout>
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

const signInData = [
  {
    type: 'text',
    text: '아이디',
    name: 'id',
    error: '아이디를 확인해주세요.',
  },
  {
    type: 'password',
    text: '비밀번호',
    name: 'pw',
    error: '비밀번호를 확인해주세요.',
  },
];
