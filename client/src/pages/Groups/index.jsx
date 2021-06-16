import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';
import { useSelector } from 'react-redux'

import LargeCard from '../../components/card/large';
import BottomSheet from '../../components/bottomsheet';
import ListCard from '../../components/listcard';

import {
  Wrapper,
  CarouselWrapper,
  ListWrapper,
  CarouselContainer,
  EmptyCard
} from './style'

const Groups = (props) => {
  const wishlist = useSelector(state => state.wishlist)
  const { history, location: { search } } = props;
  const { groupedBy , type } = queryString.parse(search);

  const selectedWishlist = (wishlist[groupedBy] || []).find((data) => data.type === type);

  const handleSwipe = () => {
    history.replace(`/group?groupedBy=${groupedBy}&type=text`);
  }

  return (
    <Wrapper>
      <CarouselWrapper>
        <CarouselContainer>
          <LargeCard {...selectedWishlist}/>
        </CarouselContainer>
      </CarouselWrapper>
      <ListWrapper>
        <BottomSheet title="Wishlists">
          {selectedWishlist.list.map((item, index) => (
            <ListCard {...item} key={index} />
          ))}
          <EmptyCard />
        </BottomSheet>
      </ListWrapper>
    </Wrapper>
  )
}

export default withRouter(Groups);