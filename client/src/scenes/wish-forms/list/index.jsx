import React from 'react'

import { styleTokens } from '../../../styles/variable';

import Button from '../../../components/buttons/generic';
import WishCard from '../../../components/card/wish';

import {
  IconWrapper,
  CheckListIcon,
  DateIcon,
} from '../../../styles/icon';

import{
  FWishWrapper,
  FSlot,
  FRow,
  FListSection,
  FTitleText,
  FDateTimeText,
  FListCount,
  FSubText,
} from './style';

const ListContainer = ({
  formData,
  openMoreWishForm
}) => {
  const {
    createdDate,
    list = [],
  } = formData;

  const getFListCount = () => (
    <>
    {
      list.length ?
      (
        <FListCount isCompleted={false}>
          <IconWrapper
            iconColor={styleTokens.lightIconColor}
            iconSize={16}
          >
            <CheckListIcon />
            </IconWrapper>
            <FSubText>
              {list.length}
            </FSubText>
        </FListCount>
      ) : null
    }
    </>
  )

  return (
    <FListSection>
      <FRow>
        <FTitleText>
          Add Your Wishes
        </FTitleText>
        {getFListCount()}
      </FRow>
      <FSlot>
        <FRow>
          <IconWrapper
            iconColor={ styleTokens.lightIconColor}
            iconSize={14}
          >
            <DateIcon />
          </IconWrapper>
          <FDateTimeText>
            {createdDate}
          </FDateTimeText>
        </FRow>
      </FSlot>
      <FWishWrapper>
        {list.map((data, idx)=>(
          <WishCard {...data} key={idx}/>
        ))}
        <Button
          onClick={openMoreWishForm}
        >
          Add More Wish
        </Button>
      </FWishWrapper>
    </FListSection>
  )
}

export default ListContainer;
