import React from 'react';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';

import useFormReducer from './reducer/useFormReducer';
import { getCategoryInfo} from '../../helper'
import { placeCaretAtEnd } from '../../utils';

import BottomSheet from '../../components/bottomsheet';
import SearchCategory from '../../components/serachcategory';
import InfoForm from './info-form';
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
  const { isFormValidationInitiated } = useSelector(state => state.formsReducer);
  const reduxDispatch = useDispatch();
  const { location: { search } } = props;
  const { type } = queryString.parse(search);
  const {formData, dispatch} = useFormReducer(type);

  const [showSearch, toggleSearch] = React.useState(false);
  const [detailWishForm, updateDetailWishForm] = React.useState({
    currentIdx: -1,
    isFormOpened: false,
    isEditMode: false,
  });
  const headerRef = React.useRef();

  const onCategorySelect = (genre) => {
    dispatch({
      type: 'edit-genre',
      payload: genre.type
    })
    toggleSearch(false);
  }

  const openDetailWishForm = (idx = -1) => {
    updateDetailWishForm({
      currentIdx: idx,
      isFormOpened: true,
      isEditMode: idx < 0 ? true : false
    });
  }

  const closeDetailWishForm = () => {
    updateDetailWishForm({
      currentIdx: -1,
      isFormOpened: false,
      isEditMode: false
    });
  }

  const saveDetailWish = (data) => {
    const isNewData =
      detailWishForm.currentIdx < 0 ? true : false;
    if(isNewData){
      dispatch({
        type: 'add-list',
        payload: data
      });
    } else {
      let { list } = formData;
      const { currentIdx } = detailWishForm;
      list[currentIdx] = data;
      dispatch({
        type: 'edit-list',
        payload: list
      });
    }
    closeDetailWishForm()
  }

  const handleInputChange = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.textContent;
    if(name === 'title') {
      dispatch({
        type: 'edit-title',
        payload: value
      })
    }
    if(name === 'description') {
      dispatch({
        type: 'edit-description',
        payload: value
      })
    }
  }

  React.useLayoutEffect(() => {
    if(headerRef.current){
      headerRef.current.innerText = formData.title;
      placeCaretAtEnd(headerRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  React.useEffect(() => {
    if(isFormValidationInitiated) {
      console.log('formData', formData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isFormValidationInitiated]);

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
            contentEditable={!isFormValidationInitiated }
            name="title"
            html={formData.title}
            onInput={handleInputChange}
            ref={headerRef}
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
        <InfoForm
          isEditMode={!isFormValidationInitiated}
          formData={formData}
          openDetailWishForm={openDetailWishForm}
          updateFormData={dispatch}
          onDescriptionChange={handleInputChange}
        />
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
      {detailWishForm.isFormOpened ?
        (
          <BottomSheet
            title="Add Your Wish Details"
            showOverlay
            onClose={closeDetailWishForm}
          >
            <DetailWishForm
              data={(formData.list||[])[detailWishForm.currentIdx]}
              onSave={saveDetailWish}
              closeForm={closeDetailWishForm}
              isEditMode={detailWishForm.isEditMode && !isFormValidationInitiated}
            />
          </BottomSheet>
        ) : null
      }
    </>
  )
}

export default WishForm;