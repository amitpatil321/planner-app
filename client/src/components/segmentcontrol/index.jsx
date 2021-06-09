import React from 'react'

import {
  Container,
  Wrapper,
  Option,
  ActiveOption,
  Slider,
} from './style';


const SegmentControl = ({options}) => {
  const handleClick = (e, option, key) => {
    const { right, width } = e.target.getBoundingClientRect();
    const xMove = right - ( width / 2);
    console.log(e.target.getBoundingClientRect());
  }
  return (
    <Wrapper>
      <Slider>
        <ActiveOption />
      </Slider>
      <Container>
        {options.map((option, idx)=>(
          <Option
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