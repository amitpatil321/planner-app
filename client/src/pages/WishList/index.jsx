import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';
import { styleTokens } from '../../styles/variable';

import { getCategoryInfo, getWishlistById, getDetailedListCount } from '../../helper';
import { isEmptyObject } from '../../utils';

import WishCard from '../../components/card/wish'
import {
  IconWrapper,
  CheckListIcon,
  FavoriteIcon,
  FavoriteMarkedIcon,
  DateIcon
} from '../../styles/icon';

import{
  Wrapper,
  Header,
  FirstSlot,
  SecondSlot,
  ThirdSlot,
  AuthorDetails,
  Row,
  ListSection,
  TitleText,
  ListContainer,
  ImageContainer,

  DateTimeText,
  ListCount,
  SubText,
  CategoryBox
} from './style';

const Wishlist = (props) => {
  const [wishlist, updateWishlist] = React.useState(null);
  const { history, location: { search } } = props;
  const { id } = queryString.parse(search);
  const categoryDetails = getCategoryInfo((wishlist || {}).genre);

  React.useEffect(()=>{
    const newWishlist = getWishlistById(id);
    updateWishlist(newWishlist);
  }, [id]);

  return (
    <>
      {wishlist === null ? (
        <>Loading Data</>
      ): (
        <>
          {
            !isEmptyObject(wishlist) ?
            (
              <Wrapper>
                <Header>
                  {wishlist.name}
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
                        <FavoriteMarkedIcon style={{color: styleTokens.favoriteIconColor}}/> :
                        <FavoriteIcon />
                      }
                    </IconWrapper>
                  </Row>
                </SecondSlot>
                <ListSection>
                  <Row>
                    <TitleText>
                      Your Wishes
                    </TitleText>
                    <ListCount isCompleted={wishlist.isCompleted}>
                      <IconWrapper
                        iconColor={wishlist.isCompleted ?
                          styleTokens.lightActiveColor : styleTokens.lightIconColor
                        }
                        iconSize={16}
                      >
                        <CheckListIcon />
                      </IconWrapper>
                      <SubText>
                        {getDetailedListCount(wishlist.list)}
                      </SubText>
                    </ListCount>
                  </Row>
                  <ThirdSlot>
                    <Row>
                      <IconWrapper
                        iconColor={ styleTokens.lightIconColor}
                        iconSize={14}
                      >
                        <DateIcon />
                      </IconWrapper>
                      <DateTimeText>
                        {wishlist.createdDate}
                      </DateTimeText>
                    </Row>
                  </ThirdSlot>
                  <ListContainer>
                    {wishlist.list.map((data, idx)=>(
                      <WishCard key={idx}/>
                    ))}
                  </ListContainer>
                </ListSection>
              </Wrapper>
            ) : (<>No Data Found</>)
          }
        </>
      )
      }
    </>
  )
};

export default withRouter(Wishlist);

/**
 *
 * <DateTimeText>
                    created on <span>{wishlist.createdDate}</span>
                  </DateTimeText>
<ListCount isCompleted={wishlist.isCompleted}>
  <IconWrapper
    iconColor={wishlist.isCompleted ? '#ffff' : '#535B62'}
    pr={8}
    iconSize={18}
  >
    <CheckListIcon />
  </IconWrapper>
  <SubText>
    {getDetailedListCount(wishlist.list)}
  </SubText>
</ListCount>
 */