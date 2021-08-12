import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JobBoard from './components/jobBoard';
import Login from './components/signin';
import SignUp from './components/signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/board">
          <JobBoard />
        </Route>
      </Switch>
    </Router >
  )
}

export default App;