import React from 'react';

import LargeCard from '../../components/card/large';

import {
  Wrapper,
  CarouselWrapper,
  ListWrapper,
  CarouselContainer
} from './style'

const Groups = () => {
  return (
    <Wrapper>
      <CarouselWrapper>
        <CarouselContainer>
          <LargeCard />
        </CarouselContainer>
      </CarouselWrapper>
      <ListWrapper>

      </ListWrapper>
    </Wrapper>
  )
}

export default Groups;