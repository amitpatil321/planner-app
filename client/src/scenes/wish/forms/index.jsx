import React from 'react';

import BottomSheet from '../../../components/bottomsheet';
import SearchCategory from '../../../components/serachcategory';

import {
  IconWrapper,
  SearchIcon
} from '../../../styles/icon';
import { styleTokens } from '../../../styles/variable';

import{
  FWrapper,
  FHeader,
  FHeaderPlaceholder,
  FRow,
  FFirstSlot,
  FSecondSlot,
  FAuthorDetails,
  FCategoryBox
} from './style';

const WishForm = (props) => {
  const [showSearch, toggleSearch] = React.useState(false);
  const onCategorySelect = (category) => {
    console.log(category);
    toggleSearch(false)
  }
  return(
    <>
      <FWrapper>
        <FRow>
          <FHeaderPlaceholder>
            Add wish title
          </FHeaderPlaceholder>
          <FHeader contentEditable={true} name="title" />
        </FRow>
        <FFirstSlot>
          <FRow>
            <FAuthorDetails>
              - created by <span>You</span>
            </FAuthorDetails>
          </FRow>
        </FFirstSlot>
        <FSecondSlot>
          <FRow>
            <FCategoryBox
              onClick={() => toggleSearch(true)}
            >
              <IconWrapper iconColor={styleTokens.tagColor}>
                <SearchIcon />
              </IconWrapper>
              <span>Select Category</span>
            </FCategoryBox>
          </FRow>
        </FSecondSlot>
        {/* <ListContainer /> */}
      </FWrapper>
      {showSearch ?
        (
          <BottomSheet
            showOverlay
          >
            <SearchCategory
              onSelect={onCategorySelect}
            />
          </BottomSheet>
        ) : null
      }
    </>
  )
}

export default WishForm;