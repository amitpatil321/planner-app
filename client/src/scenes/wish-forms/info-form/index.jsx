import React from 'react'

import { styleTokens } from '../../../styles/variable';

import Button from '../../../components/buttons/generic';
import WishCard from '../../../components/card/wish';
import DescriptionCard from '../../../components/card/description';

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

  const getTitleText = () => hasBucket? "Add your wishes" : "Add description for your wish";

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
          {getTitleText()}
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
        {
          hasBucket ? (
            <>
              {list.map((data, idx)=>(
                <div
                  key={idx}
                  onClick={() => openDetailWishForm(idx)}
                >
                  <WishCard
                    {...data}
                  />
                </div>
              ))}
              <Button
                onClick={() => openDetailWishForm()}
              >
                Add More Wish
              </Button>
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
