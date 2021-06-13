import React from 'react'

import {
  Wrapper,
  Container,
} from './style'

const BottomSheet = (props) => {
  return (
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  )
}

export default BottomSheet;