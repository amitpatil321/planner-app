import React from 'react';
import {
  ListIcon,
  IconWrapper
} from '../../../styles/icon';
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  Container,
  Header,
  Title,
  SubTitle,
  ImageContainer,
  NumberText
} from './style'

const SmallCard = ({label, asset, list, type, clickHandle = () => {}}) => {
  return (
    <Wrapper
      onClick={(e) => clickHandle(type)}
    >
      <ImageContainer asset={asset}/>
      <Container>
        <Header>
          <Title>
            {label}
          </Title>
          <SubTitle>
            <IconWrapper
              iconSize={14}
              iconColor={styleTokens.lightIconColor}
            >
              <ListIcon />
            </IconWrapper>
            <NumberText>
              {list.length}
            </NumberText>
          </SubTitle>
        </Header>
      </Container>
    </Wrapper>
  )
}

export default SmallCard;