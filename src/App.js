import React from 'react';
import DisplayUsers from './displayUsers';
import DisplayUserInfo from './displayUserInfo';
import Search from './Search';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route path={'/:id'} component={DisplayUserInfo}/>
            <Route path={'/'} component={DisplayUsers} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
