import React from 'react';

import JobBoard from './components/jobBoard';
import AppBar from '@material-ui/core/AppBar';
import { Drawer, Toolbar } from '@material-ui/core';


const App = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant='dense'>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <div>
          
        </div>
      </Drawer>
      <div style={{marginBottom: '50px'}}></div>
      <JobBoard />
    </div >
  )
}

export default App;