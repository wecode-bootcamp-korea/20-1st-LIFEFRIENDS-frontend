import { Component } from 'react';
import FormLayout from './FormLayout';
import Input from './Components/Input';
import LoginOption from './LoginOption';
import './Form.scss';

export default class LoginContents extends Component {
  constructor() {
    super();
    this.state = {
      loginInput: { id: '', pw: '' },
      signUpInput: { email: '', pw: '', name: '' },
      active: false,
    };
  }

  goToMain = e => {
    const { email, password } = this.state;
    e.preventDefault();
    //회원가입
    const API = 'http://10.58.7.181:8000/users/login';
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        switch (res.status) {
          case 400:
            alert('아이디 또는 비밀번호를 입력해주세요');
            break;

          case 401:
            alert('비밀번호를 확인해주세요');
            // res.json();
            break;

          case 200:
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
      loginInput: { ...this.state.loginInput, [name]: value },
    });
  };

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  render() {
    const { text, data, type, name } = this.props;
    const { loginInput, active } = this.state;
    const loginValid =
      validator.id(loginInput.id) && validator.pw(loginInput.pw);
    console.log(loginValid);
    return (
      <FormLayout>
        <div>
          {data.map((input, idx) => (
            <Input
              {...this.state}
              key={idx}
              type={input.type}
              text={input.text}
              handleInput={this.handleInput}
              name={input.name}
              value={loginInput}
              handleValid={validator[input.name]}
              error={input.error}
            />
          ))}
        </div>
        {type === 'signIn' && (
          <button
            value={text}
            className={`loginButton ${loginValid && 'loginButtonActive'}`}
            disabled={!loginValid}
          >
            {text}
          </button>
        )}
        {type === 'signIn' && (
          <LoginOption handleClick={this.handleClick} active={active} />
        )}
      </FormLayout>
    );
  }
}

const pwRegx =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const validator = {
  name: input => input.length <= 6,
  id: input => input.length >= 5 && input.length <= 20,
  pw: input => pwRegx.test(input),
};
