import React from 'react';
import './header.less';
import { Button } from 'react-bootstrap';

const Header = () => {

  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div>
          <Button variant="light">로그인</Button>
        </div>
      </div>
    </>
  )
}

export default Header;