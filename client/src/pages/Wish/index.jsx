import React from 'react';
import { withRouter } from "react-router";

import Component from '../../scenes/wish';

const Wish = (props) => {
  return (
    <Component {...props} />
  )
};

export default withRouter(Wish);
