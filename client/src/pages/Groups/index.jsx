import React from 'react';

import LargeCard from '../../components/card/large';

import {
  Wrapper,
  CarouselWrapper,
  ListWrapper,
  CarouselContainer
} from './style'

import BottomSheet from '../../components/bottomsheet'

const Groups = () => {
  return (
    <Wrapper>
      <CarouselWrapper>
        <CarouselContainer>
          <LargeCard />
        </CarouselContainer>
      </CarouselWrapper>
      <ListWrapper>
        <BottomSheet />
      </ListWrapper>
    </Wrapper>
  )
}

export default Groups;