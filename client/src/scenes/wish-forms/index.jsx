import React from 'react';
import queryString from 'query-string';

import useFormReducer from './reducer/useFormReducer';
import { getCategoryInfo} from '../../helper'

import BottomSheet from '../../components/bottomsheet';
import SearchCategory from '../../components/serachcategory';
import ListContainer from './list';
import MoreWishForm from '../../components/more-wish-form';

import {
  IconWrapper,
  SearchIcon,
  EditIcon,
} from '../../styles/icon';
import { styleTokens } from '../../styles/variable';

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
  const { location: { search } } = props;
  const { type } = queryString.parse(search);
  const {formData, dispatch} = useFormReducer(type);

  const [showSearch, toggleSearch] = React.useState(false);
  const [isMoreWishFormOpened, toggleMoreWishForm] = React.useState(false);

  const onCategorySelect = (genre) => {
    dispatch({
      type: 'edit-genre',
      payload: genre.type
    })
    toggleSearch(false);
  }

  const closeGenreSearch = () => {
    toggleSearch(false);
  }

  const openMoreWishForm = () => {
    toggleMoreWishForm(true)
  }

  const closeMoreWishForm = () => {
    toggleMoreWishForm(false)
  }

  const saveMoreWish = (data) => {
    console.log(data)
    toggleMoreWishForm(false)
  }

  const handleDataChange = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.textContent;
    switch (name) {
    case 'title':
      dispatch({
        type: 'edit-title',
        payload: value
      })
      return;
    default:
      return;
  }
  }

  return(
    <>
      <FWrapper>
        <FRow>
          {!formData.title || formData.title === '' ?
          (
            <FHeaderPlaceholder>
              Add wish title
            </FHeaderPlaceholder>
          ) : null
          }
          <FHeader
            contentEditable={true}
            name="title"
            html={formData.title}
            onInput={handleDataChange}
          />
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
                {
                  !formData.genre || formData.genre === '' ?
                  <SearchIcon /> : <EditIcon />
                }
              </IconWrapper>
              <span>
                {!formData.genre || formData.genre === '' ?
                  'Select Category' : getCategoryInfo(formData.genre).label
                }
                </span>
            </FCategoryBox>
          </FRow>
        </FSecondSlot>
        {
          type === 'list' ?
          <ListContainer
            formData={formData}
            openMoreWishForm={openMoreWishForm}
          /> : null
        }
      </FWrapper>
      {showSearch ?
        (
          <BottomSheet
            showOverlay
            onClose={closeGenreSearch}
          >
            <SearchCategory
              onSelect={onCategorySelect}
            />
          </BottomSheet>
        ) : null
      }
      {isMoreWishFormOpened ?
        (
          <BottomSheet
            showOverlay
            onClose={closeMoreWishForm}
          >
            <MoreWishForm
              onSave={saveMoreWish}
            />
          </BottomSheet>
        ) : null
      }
    </>
  )
}

export default WishForm;