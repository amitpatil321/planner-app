import React from 'react'

import {
  Container,
  Wrapper,
  Option,
  ActiveOption,
  Slider,
} from './style';

const outerPadding = 24;
const innerPadding = 4;

const SegmentControl = ({options}) => {
  const wrapperWidth = 110 * options.length;
  const optionWidth = 100 / options.length;
  const [ sliderState, moveSlider] = React.useState({
    prevPos: 0,
    nextPos: 0,
  });

  const handleClick = (e, option, key) => {
    const { left } = e.target.getBoundingClientRect();
    const xMove = left - outerPadding - innerPadding;
    const newState = {
      prevPos: sliderState.nextPos,
      nextPos: xMove,
    };
    moveSlider(prevState => ({
    ...prevState,
    ...newState
    }));
  }

  return (
    <Wrapper dWidth={wrapperWidth}>
      <Slider>
        <ActiveOption animationState={sliderState} />
      </Slider>
      <Container>
        {options.map((option, idx)=>(
          <Option
            dWidth={optionWidth}
            key={idx}
            onClick={e => handleClick(e,option,idx)}
          >
            {option.label}
          </Option>
        ))}
      </Container>
    </Wrapper>
  )
}

export default SegmentControl;