import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { styleTokens } from '../../../styles/variable';

import Button from '../../../components/lib/buttons/generic';
import WishCard from '../../../components/lib/card/wish';
import DescriptionCard from '../../../components/lib/card/description';

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

const InfoForm = ({
  formData,
  updateFormData = () => {},
  openDetailWishForm = () => {},
  onDescriptionChange = () => {},
  isEditMode=false
}) => {
  const {
    createdDate,
    list = [],
    description,
    hasBucket,
  } = formData;
  const { isFormValidationInitiated } = useSelector(state => state.formsReducer);

  const getTitleText = () => hasBucket? "Add your plans" : "Add description for your wish";

  const getFListCount = () => (
    <>
    {
      list.length ?
      (
        <FListCount isCompleted={false}>
          <IconWrapper
            iconColor={styleTokens.lightDarkColor}
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
          {getTitleText()}
        </FTitleText>
        {getFListCount()}
      </FRow>
      <FSlot>
        <FRow>
          <IconWrapper
            iconColor={ styleTokens.lightDarkColor}
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
        {
          hasBucket ? (
            <>
              {list.map((data, idx)=>(
                <div
                  key={idx}
                  onClick={() =>
                    !isFormValidationInitiated ?
                    openDetailWishForm(idx) : () => {}
                  }
                >
                  <WishCard
                    isStatusVisible={false}
                    {...data}
                  />
                </div>
              ))}
              { !isFormValidationInitiated &&
                <Button
                  onClick={() => openDetailWishForm()}
                >
                  Add More Wish
                </Button>
              }
            </>
          ): <DescriptionCard
              description={description}
              isEditMode={isEditMode}
              onDescriptionChange={onDescriptionChange}
            />
        }
      </FWishWrapper>
    </FListSection>
  )
}

export default InfoForm;
