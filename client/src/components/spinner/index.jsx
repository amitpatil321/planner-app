import React from 'react';

import { Container } from './style';
import { styleTokens } from '../../styles/variable';

const Spinner = (props) => {
  const {
    width = 24,
    height = 24,
    color = styleTokens.whiteTextColor
  } = props;

  return (
    <Container
      pWidth={width}
      pHeight={height}
      pColor={color}
    />
  )
}

export default Spinner;