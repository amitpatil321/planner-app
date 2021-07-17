import React from 'react';
import queryString from 'query-string';

import useFormReducer from './reducer/useFormReducer';
import { getCategoryInfo} from '../../helper'

import BottomSheet from '../../components/bottomsheet';
import SearchCategory from '../../components/serachcategory';
import ListContainer from './list';
import DetailWishForm from '../../components/detail-wish';

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
  const [moreWishForm, updateMoreWishForm] = React.useState({
    currentIdx: -1,
    isFormOpened: false,
    isEditMode: false,
  });

  const onCategorySelect = (genre) => {
    dispatch({
      type: 'edit-genre',
      payload: genre.type
    })
    toggleSearch(false);
  }

  const openMoreWishForm = (idx = -1) => {
    updateMoreWishForm({
      currentIdx: idx,
      isFormOpened: true,
      isEditMode: idx < 0 ? true : false
    });
  }

  const closeMoreWishForm = () => {
    updateMoreWishForm({
      currentIdx: -1,
      isFormOpened: false,
      isEditMode: false
    });
  }

  const saveMoreWish = (data) => {
    dispatch({
      type: 'add-list',
      payload: data
    });
    closeMoreWishForm()
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
            isEditMode={true}
            formData={formData}
            openMoreWishForm={openMoreWishForm}
          /> : null
        }
      </FWrapper>
      {showSearch ?
        (
          <BottomSheet
            title="Search Genres"
            showOverlay
            onClose={() => toggleSearch(false)}
          >
            <SearchCategory
              onSelect={onCategorySelect}
            />
          </BottomSheet>
        ) : null
      }
      {moreWishForm.isFormOpened ?
        (
          <BottomSheet
            title="Add Your Wish Details"
            showOverlay
            onClose={closeMoreWishForm}
          >
            <DetailWishForm
              data={(formData.list||[])[moreWishForm.currentIdx]}
              onSave={saveMoreWish}
              closeForm={closeMoreWishForm}
              isEditMode={moreWishForm.isEditMode}
            />
          </BottomSheet>
        ) : null
      }
    </>
  )
}

export default WishForm;