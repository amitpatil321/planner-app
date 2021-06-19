import React from 'react'
import { styleTokens } from '../../../styles/variable';

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
            <IconWrapper
              iconColor={styleTokens.lightIconColor}
            >
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