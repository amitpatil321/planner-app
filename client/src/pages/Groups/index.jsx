/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { withRouter } from "react-router";

import Component from '../../scenes/groups';

const GroupsPage = (props) => {
  return (<Component {...props} />)
}

export default withRouter(GroupsPage);