import React from 'react';

import {
  Wrapper,
  ProgressRange,
  ProgressSlider
} from './style'

const ProgressIndicator = ({color, sliderWidth}) => {
  return (
    <Wrapper>
      <ProgressRange
        pColor={color}
      />
      <ProgressSlider
        pWidth={sliderWidth}
        pColor={color}
      />
    </Wrapper>
  )
}

export default ProgressIndicator;