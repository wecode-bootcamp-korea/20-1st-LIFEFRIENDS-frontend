import React from 'react';
import { withRouter } from 'react-router-dom';
import './GetUserHeader.scss';

class GetUserHeader extends React.Component {
  render() {
    return (
      <header className="getUserHeader">
        <img alt="logo" src="../../../Data/images/naver_logo.png" />
        {/* <h1 className="getUserLogo">NEVER</h1> */}
      </header>
    );
  }
}

export default withRouter(GetUserHeader);
