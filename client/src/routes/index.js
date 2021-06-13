import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoutes from './protected'
import Header from '../components/Header';

const Routes = () => {
  return (
    <>
      <Header>
      </Header>
      <Router>
        <Switch>
          <Route path="/" component={ProtectedRoutes} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;