import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';

const App = () => {
  return (
    <Router>
    <div className ="container">
      <h1>Adding Routes!</h1>
    </div >
    <Route path="/" component={Signin}></Route>
    <Route path="/signup" component={Signup}></Route>
    </Router>
  )
}

export default App;