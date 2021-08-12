import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JobBoard from './components/jobBoard';
import Login from './components/signin';
import SignUp from './components/signup';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board">Job Board</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/board">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <JobBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;