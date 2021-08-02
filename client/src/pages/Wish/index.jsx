import React from 'react';
import { withRouter } from "react-router";

import Component from '../../scenes/wish';
import FormComponent from '../../scenes/wish-forms';

const Wish = (props) => {
  const { location } = props;
  const isFormNeeded =
  location.pathname.includes('/add') ||
  location.pathname.includes('/edit');

  return (
    <>
      {isFormNeeded ?
        <FormComponent {...props} /> :
        <Component {...props} />
      }
    </>
  )
};

export default withRouter(Wish);
