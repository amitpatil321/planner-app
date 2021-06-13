import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';
import { useSelector } from 'react-redux'

import LargeCard from '../../components/card/large';

import {
  Wrapper,
  CarouselWrapper,
  ListWrapper,
  CarouselContainer
} from './style'

import BottomSheet from '../../components/bottomsheet'

const Groups = (props) => {
  const wishlist = useSelector(state => state.wishlist)
  const { history, location: { search } } = props;
  const { groupedBy , type } = queryString.parse(search);

  const selectedWishlist = (wishlist[groupedBy] || []).find((data) => data.type === type);

  const handleClick = () => {
    history.replace(`/group?groupedBy=${groupedBy}&type=text`);
  }

  return (
    <Wrapper>
      <CarouselWrapper>
        <CarouselContainer onClick={handleClick}>
          <LargeCard {...selectedWishlist}/>
        </CarouselContainer>
      </CarouselWrapper>
      <ListWrapper>
        <BottomSheet />
      </ListWrapper>
    </Wrapper>
  )
}

export default withRouter(Groups);