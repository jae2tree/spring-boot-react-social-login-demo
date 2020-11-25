import React from 'react';
import Header from '../common/header';
import Aside from '../common/aside';
import Container from '../common/container';
import './app.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Aside />
        <Container />
      </div>
    </>
  )
}

export default App;