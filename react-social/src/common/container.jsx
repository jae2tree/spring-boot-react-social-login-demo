import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Container = () => {

  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1>home1</h1>
          </Route>
          <Route path="/test1">
            <h1>test1</h1>
          </Route>
          <Route path="/test2">
            <h1>test2</h1>
          </Route>
          <Route path="/test3">
            <h1>test3</h1>
          </Route>
      </Switch>
      </div>
    </>
  )
}

export default Container;