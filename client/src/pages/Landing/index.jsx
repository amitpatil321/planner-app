import React from 'react';
import { withRouter } from "react-router";

import Component from '../../scenes/landing';

const LandingPage = (props) => {
  return (
    <Component {...props} />
  )
}

export default withRouter(LandingPage);