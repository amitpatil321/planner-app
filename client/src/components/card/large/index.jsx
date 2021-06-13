import React from 'react'

import {
  ListIcon,
  IconWrapper
} from '../../../styles/icon';

import {
  Wrapper,
  Container,
  ImageContainer,
  TextContainer,
  Title,
  SubTitle,
  NumberTxt,
  TitleTxt
} from './style'

const LargeCard = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer />
        <TextContainer>
          <Title>
            <TitleTxt>
              Fashion & Product
            </TitleTxt>
          </Title>
          <SubTitle>
            <IconWrapper>
              <ListIcon/>
            </IconWrapper>
            <NumberTxt>10</NumberTxt>
            </SubTitle>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}

export default LargeCard;