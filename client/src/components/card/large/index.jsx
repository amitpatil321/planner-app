import React from 'react'

import {
  Wrapper,
  Container,
  ImageContainer,
  TextContainer,
  Title,
  SubTitle,
  NumberTxt
} from './style'

const LargeCard = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer />
        <TextContainer>
          <Title>Fashion & Product</Title>
          <SubTitle>Wishlists <NumberTxt>10</NumberTxt></SubTitle>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}

export default LargeCard;