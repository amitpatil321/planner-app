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

function getInitialState(segmentRef,options, activeSegment ) {
  const elm = segmentRef.current;
  if(elm) {
    const activeIdx = options.findIndex((option, idx) => {
      let index;
      if(option.type === activeSegment) {
        index = idx;
      }
      return index;
    });
    const { left } = elm.children[activeIdx].getBoundingClientRect();
    const xMove = left - outerPadding - innerPadding;
    return {
      prevPos: xMove,
      nextPos: xMove,
    };
  }
  return {
    prevPos: 0,
    nextPos: 0,
  }
}

const SegmentControl = ({onChange = () => {}, options, activeSegment}) => {
  const wrapperWidth = 110 * options.length;
  const optionWidth = 100 / options.length;
  const [ sliderState, moveSlider] = React.useState({
    prevPos: 0,
    nextPos: 0,
    opacity: 0,
  });
  const segmentRef = React.useRef(null);

  React.useEffect(() => {
    const elm = segmentRef.current;
    if(elm)  {
      let activeIdx;
      options.forEach((option, idx) => {
        if(option.type === activeSegment) {
          activeIdx = idx;
        }
      });
      const { left } = elm.children[activeIdx].getBoundingClientRect();
      const xMove = left - outerPadding - innerPadding;
      const newState = {
        prevPos: xMove,
        nextPos: xMove,
        opacity: 1,
      };
      moveSlider(prevState => ({
        ...prevState,
        ...newState
        }));
    }
  },[]);

  const handleClick = (e, option, key) => {
    const { left } = e.target.getBoundingClientRect();
    const xMove = left - outerPadding - innerPadding;
    const newState = {
      prevPos: sliderState.nextPos,
      nextPos: xMove,
      opacity: 1,
    };
    moveSlider(prevState => ({
    ...prevState,
    ...newState
    }),onChange(option));
  }

  return (
    <Wrapper dWidth={wrapperWidth}>
      <Slider>
        <ActiveOption animationState={sliderState} />
      </Slider>
      <Container ref={segmentRef}>
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