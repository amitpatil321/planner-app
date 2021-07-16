import React from 'react';

import {
  Wrapper
} from './style'

const Button = ({
  onClick = () => {},
  children
}) => {
  return(
    <Wrapper
      onClick={onClick}
    >
      {children}
    </Wrapper>
  )
}

export default Button;