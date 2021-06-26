import React from 'react';
import { withRouter } from "react-router";

import Component from '../../scenes/wishlist';

const Wishlist = (props) => {
  return (
    <Component {...props} />
  )
};

export default withRouter(Wishlist);
