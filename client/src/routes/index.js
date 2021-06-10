import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Groups from '../pages/Groups';
import Landing from '../pages/Landing';
// import Wishlist from '../pages/Wishlist';
import Header from '../components/Header';

const Routes = () => {
  return (
    <>
      <Header>
      </Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/groups" component={Groups} />
          {/* <Route exact path="/:id" component={Wishlist} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;