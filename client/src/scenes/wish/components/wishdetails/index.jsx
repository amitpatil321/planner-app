import React from 'react';

import { styleTokens } from '../../../../styles/variable';
import { getCategoryInfo } from '../../../../helper';

import ListContainer from '../listcontainer';

import {
  IconWrapper,
  FavoriteIcon,
  FavoriteMarkedIcon,
  TagIcon
} from '../../../../styles/icon';

import{
  Wrapper,
  Header,
  Row,
  FirstSlot,
  SecondSlot,
  AuthorDetails,
  CategoryBox
} from './style';


const WishDetailsView = ({ wish }) => {
  const categoryDetails = getCategoryInfo(wish.genre);
  return(
    <Wrapper>
      <Header>
        {wish.title}
      </Header>
      <FirstSlot>
        <Row>
          <AuthorDetails>
            - created by <span>{wish.authorId}</span>
          </AuthorDetails>
        </Row>
      </FirstSlot>
      <SecondSlot>
        <Row>
          <CategoryBox>
            <IconWrapper iconColor={styleTokens.tagColor}>
              <TagIcon />
            </IconWrapper>
            <span>{categoryDetails.label}</span>
          </CategoryBox>
          <IconWrapper iconSize={20}>
            {wish.isFavorite ?
              <FavoriteMarkedIcon
                style={{color: styleTokens.favoriteIconColor}}
              /> :
              <FavoriteIcon />
            }
          </IconWrapper>
        </Row>
      </SecondSlot>
      <ListContainer wishDetails={wish} />
    </Wrapper>
  )
}

export default WishDetailsView;