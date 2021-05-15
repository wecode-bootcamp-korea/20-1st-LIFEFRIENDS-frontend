import { Component } from 'react';
import LoginForm from '../../components/Form/LoginForm';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      statusActive: false,
      ipActive: false,
    };
  }

  goToMain = e => {
    e.preventDefault();
    const API = 'http://172.16.20.241:8000/users/login';
    const { id, pw } = this.state;
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => {
        switch (res.status) {
          case 400:
            alert('아이디 또는 비밀번호를 입력해주세요');
            break;

          case 401:
            alert('아이디 또는 비밀번호를 확인해주세요');
            break;

          case 200:
            alert('sucess login');
            res.json();
            break;
        }
      })
      .then(res => {
        if (res) {
          // save localstroage
          localStorage.setItem('MESSAGE', res['ACCESS_TOKEN']);
          // push to main
          this.props.history.push('./Main');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //Need to put keep login status function using token but how to?
  handleStatus = () => {
    const { statusActive } = this.state;
    this.setState({
      statusActive: !statusActive,
    });
  };

  handleIp = () => {
    const { ipActive } = this.state;
    this.setState({
      ipActive: !ipActive,
    });
  };

  render() {
    return (
      <LoginForm
        type="Login"
        text="로그인"
        loginData={loginData}
        loginState={{ ...this.state }}
        goToMain={this.goToMain}
        handleInput={this.handleInput}
        handleStatus={this.handleStatus}
        handleIp={this.handleIp}
      />
    );
  }
}

const loginData = [
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
