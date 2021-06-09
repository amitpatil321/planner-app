import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  Text,
  SubText,
  ImageContainer
} from './style'

const SmallCard = ({title, asset, list}) => {
  return (
    <Wrapper>
      <ImageContainer asset={asset}/>
      <Container>
        <Header>
          <Text>
            {title}
          </Text>
          <SubText>
            {list.length}
          </SubText>
        </Header>
      </Container>
    </Wrapper>
  )
}

export default SmallCard;