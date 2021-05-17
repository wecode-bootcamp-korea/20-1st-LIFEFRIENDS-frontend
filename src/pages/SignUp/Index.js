import { Component } from 'react';
import SignUpForm from '../../components/Form/SignUpForm';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      name: '',
      birth: '',
      gender: '',
      phone: '',
    };
  }

  goToLogin = e => {
    e.preventDefault();
    const LOGINAPI = '';
    const { id, pw, name, birth, gender, phone } = this.state;
    fetch(LOGINAPI, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        name: name,
        birth_date: birth,
        gender: gender,
        phone_number: phone,
      }),
    })
      .then(res => {
        switch (res.status) {
          case 400:
            alert('값을 입력해주세요.');
            break;

          case 401:
            alert('값을 확인해주세요.');
            break;

          case 200:
            alert('회원가입 성공');
            return res.json();
        }
      })
      .then(res => {
        if (res) {
          //save localstorage
          localStorage.setItem('MESSAGE', res['ACCESS_TOKEM']);
          //push to Login
          this.props.history.push('./Login');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <SignUpForm
        type="SignUp"
        text="회원가입"
        signUpState={{ ...this.state }}
        goToLogin={this.goToLogin}
        handleInput={this.handleInput}
      />
    );
  }
}
