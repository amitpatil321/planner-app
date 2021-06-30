import React from 'react';

import {
  Wrapper
} from './style'

const Button = (props) => {
  return(
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Button;