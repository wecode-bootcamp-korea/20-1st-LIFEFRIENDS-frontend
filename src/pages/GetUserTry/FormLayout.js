import { Component } from 'react';

export default class FormLayout extends Component {
  render() {
    return (
      <main className="Form">
        <div className="loginContentsWrap">
          <form
            className="loginForm"
            // action="https://naver.com"
            // onSubmit={this.goToMain}
          >
            {this.props.children}
          </form>
        </div>
      </main>
    );
  }
}
