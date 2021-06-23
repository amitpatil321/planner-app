import React from 'react';

import { styleTokens } from '../../../../styles/variable';
import { getCategoryInfo } from '../../../../helper';

import ListContainer from '../ListContainer';

import {
  IconWrapper,
  FavoriteIcon,
  FavoriteMarkedIcon,
} from '../../../../styles/icon';

import{
  Wrapper,
  Header,
  Row,
  FirstSlot,
  SecondSlot,
  AuthorDetails,
  ImageContainer,
  CategoryBox
} from './style';


const WishDetailsView = ({ wishlist }) => {
  const categoryDetails = getCategoryInfo(wishlist.genre);
  return(
    <Wrapper>
      <Header>
        {wishlist.title}
      </Header>
      <FirstSlot>
        <Row>
          <AuthorDetails>
            - created by <span>{wishlist.authorId}</span>
          </AuthorDetails>
        </Row>
      </FirstSlot>
      <SecondSlot>
        <Row>
          <CategoryBox>
            <ImageContainer asset={categoryDetails.asset}/>
            <span>{categoryDetails.label}</span>
          </CategoryBox>
          <IconWrapper iconSize={20}>
            {wishlist.isFavorite ?
              <FavoriteMarkedIcon
                style={{color: styleTokens.favoriteIconColor}}
              /> :
              <FavoriteIcon />
            }
          </IconWrapper>
        </Row>
      </SecondSlot>
      <ListContainer wishlistData={wishlist} />
    </Wrapper>
  )
}

export default WishDetailsView;