/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';
import { useSelector } from 'react-redux';

import BottomSheet from '../../components/bottomsheet';
import ListCard from '../../components/card/list';
import SwipeView from '../../components/swipeview';

import {
  Wrapper,
  CarouselWrapper,
  ListWrapper,
  EmptyListCard
} from './style'

const swiperConfig = {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
}

const Groups = (props) => {
  const wishlist = useSelector(state => state.wishlist);
  const { history, location: { search } } = props;
  const { groupedBy , type } = queryString.parse(search);
  const [state, setState] = React.useState({groupedBy, type });
  const [activeIndex, setActiveIndex] = React.useState(0);

  const wishlistForSelectedGroup =
    (wishlist[state.groupedBy] || []).find((data) => data.type === state.type);

  const updateRouteParams = (type) => {
    history.replace(`/group?groupedBy=${state.groupedBy}&type=${type}`);
  };

  const updateType = (newIndex) => {
    const { type } = wishlist[state.groupedBy][newIndex];
    setState((prevState) => ({
      ...prevState,
      type: type,
    }));
    updateRouteParams(type);
  };

  const redirectToWishlist = (wishlist) => {
    const { id } = wishlist;
    const wishlistPath = `/wishlist/?id=${id}`
    history.push(wishlistPath);
  };

  React.useEffect(() => {
    let currentIndex =
      (wishlist[groupedBy] || []).findIndex((data) => data.type === type);
    currentIndex = currentIndex > -1 ? currentIndex : 0;
    setActiveIndex(currentIndex);
  }, []);

  return (
    <>
    {wishlist[groupedBy].length ?
      (
      <Wrapper>
        <CarouselWrapper>
          <SwipeView
            list={wishlist[groupedBy]}
            swiperConfig={swiperConfig}
            initialSlide={activeIndex}
            onSlideChange={updateType}
          />
        </CarouselWrapper>
        <ListWrapper>
          <BottomSheet title={`${wishlistForSelectedGroup.label}  Wishlists`}>
            {
              wishlistForSelectedGroup.list.length ?
              (
                <>
                  {wishlistForSelectedGroup.list.map((item, index) => (
                    <ListCard
                      onClick={redirectToWishlist}
                      data={item}
                      key={index} />
                  ))}
                </>
              ) : (<> Don't have any wishlist added </>)
            }
            <EmptyListCard />
          </BottomSheet>
        </ListWrapper>
      </Wrapper>
      ) :
      (<> You don't have any wishlist under {state.groupedBy} </>)
    }
    </>
  )
}

export default withRouter(Groups);