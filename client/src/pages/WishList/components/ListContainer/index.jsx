import React from 'react'

import { styleTokens } from '../../../../styles/variable';
import { getDetailedListCount } from '../../../../helper';

import Button from '../../../../components/button';
import WishCard from '../../../../components/card/wish';

import {
  IconWrapper,
  CheckListIcon,
  DateIcon
} from '../../../../styles/icon';

import{
  WishWrapper,
  ThirdSlot,
  Row,
  ListSection,
  TitleText,
  DateTimeText,
  ListCount,
  SubText,
} from './style';

const ListContainer = (wishlistData) => {
  const {
    isCompleted,
    createdDate,
    hasBucket,
    list = []
  } = wishlistData;
  return (
    <ListSection>
      <Row>
        <TitleText>
          Your Wishes
        </TitleText>
        {hasBucket ?
        (
          <ListCount isCompleted={isCompleted}>
            <IconWrapper
              iconColor={isCompleted ?
                styleTokens.lightActiveColor : styleTokens.lightIconColor
              }
              iconSize={16}
            >
              <CheckListIcon />
            </IconWrapper>
            <SubText>
              {getDetailedListCount(list)}
            </SubText>
          </ListCount>
        ) : null
        }
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
            {createdDate}
          </DateTimeText>
        </Row>
      </ThirdSlot>
      <WishWrapper>
        <>
          {list.map((data, idx)=>(
            <WishCard {...data} key={idx}/>
          ))}
        </>
        < Button/>
      </WishWrapper>
    </ListSection>


  )
}

export default ListContainer;
