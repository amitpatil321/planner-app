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

const LargeCard = ({asset, label, list=[]}) => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <Title>
            <TitleTxt>
              {label}
            </TitleTxt>
          </Title>
          <SubTitle>
            <IconWrapper>
              <ListIcon/>
            </IconWrapper>
            <NumberTxt>{list.length}</NumberTxt>
            </SubTitle>
        </TextContainer>
        <ImageContainer asset={asset}/>
      </Container>
    </Wrapper>
  )
}

export default LargeCard;