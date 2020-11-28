import React from 'react';
import { connect } from 'react-redux';
import { showLoginModal } from '../redux/actions';

import { Button } from 'react-bootstrap';
import './header.less';

const Header = ({showLoginModal}) => {

  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div>
          <Button variant="light" onClick={() => showLoginModal()}>로그인</Button>
        </div>
      </div>
    </>
  )
}

export default connect(null,{showLoginModal} )(Header);