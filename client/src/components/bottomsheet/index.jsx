import React from 'react'

import {
  Wrapper,
  Container,
  Header
} from './style'

const BottomSheet = ({title, children }) => {
  return (
    <Wrapper>
      <Header>
        {title}
      </Header>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default BottomSheet;