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
} from '../../styles/icon';

import{
  Wrapper,
  Header,
  FirstFold,
  SecondFold,
  AuthorDetails,
  Row,
  ListSection,
  TitleText,
  ListContainer,
  ImageContainer,
  Group,

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
                <FirstFold>
                  <Row>
                    <AuthorDetails>
                      - created by <span>{wishlist.authorId}</span>
                    </AuthorDetails>
                  </Row>
                </FirstFold>
                <SecondFold>
                  <Row>
                    <Group>
                      <ImageContainer asset={categoryDetails.asset}/>
                      <CategoryBox>
                        {categoryDetails.label}
                      </CategoryBox>
                    </Group>
                    <IconWrapper iconSize={20}>
                      {wishlist.isFavorite ?  <FavoriteMarkedIcon /> : <FavoriteIcon />}
                    </IconWrapper>
                  </Row>
                </SecondFold>
                <ListSection>
                  <Row>
                    <TitleText>
                      Your Wishes
                    </TitleText>
                    <ListCount isCompleted={wishlist.isCompleted}>
                      <IconWrapper
                        iconColor={wishlist.isCompleted ?
                        styleTokens.whiteTextColor : styleTokens.lightIconColor
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