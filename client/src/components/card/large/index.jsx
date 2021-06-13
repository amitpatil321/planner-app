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

const LargeCard = ({asset, title, type, list}) => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer asset={asset}/>
        <TextContainer>
          <Title>
            <TitleTxt>
              {title}
            </TitleTxt>
          </Title>
          <SubTitle>
            <IconWrapper>
              <ListIcon/>
            </IconWrapper>
            {/* <NumberTxt>{list.length}</NumberTxt> */}
            </SubTitle>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}

export default LargeCard;