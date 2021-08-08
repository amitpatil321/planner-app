import React from 'react'
import { toast } from 'react-toastify';

import { validateWishData } from '../../validators/listWish';
import { placeCaretAtEnd } from '../../utils';

import Button from '../buttons/generic';

import {
  Wrapper,
  TitleSection,
  TitlePlaceholder,
  TitleInput,
  DescriptionSection,
  DescriptionPlaceholder,
  DescriptionInput,
  DummyExtraSpace
} from './style'

const DetailWishDetails = ({
  data={
    title:"",
    description: ""
  },
  onSave = () => {},
  closeForm = () => {},
  isEditMode=false
}) => {
  const [formData, updateData] = React.useState(data);
  const [isFormEditable, toggleIsEditable] = React.useState(isEditMode);

  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  React.useLayoutEffect(() => {
    if(titleRef.current && descriptionRef.current){
      titleRef.current.innerText = formData.title;
      descriptionRef.current.innerText = formData.description;
      if(isFormEditable){
        placeCaretAtEnd(titleRef.current);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleDataChange = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.textContent;
    updateData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSave = (e) => {
    const resp = validateWishData(formData);
    if(resp.isValid) {
      onSave(formData);
      closeForm();
    } else {
      toast.error(resp.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return(
    <Wrapper>
      <TitleSection>
        {
          (isFormEditable &&
          (!formData.title || formData.title === '')) ?
          (
            <TitlePlaceholder>
              Add Title
            </TitlePlaceholder>
          ) : null
        }
        <TitleInput
          contentEditable={isFormEditable}
          isEditMode={isFormEditable}
          name="title"
          html={formData.title}
          onInput={handleDataChange}
          ref={titleRef}
        />
      </TitleSection>
      <DescriptionSection>
        {
          (isFormEditable &&
          (!formData.description || formData.description === '')) ?
          (
            <DescriptionPlaceholder>
              Add Your Description...(optional)
            </DescriptionPlaceholder>
          ) : null
        }
        <DescriptionInput
          contentEditable={isFormEditable}
          isEditMode={isFormEditable}
          name="description"
          html={formData.description}
          onInput={handleDataChange}
          ref={descriptionRef}
        />
      </DescriptionSection>
      {isFormEditable ?
        (
          <Button onClick={handleSave}>
            Save
          </Button>
        ) : null
      }
      <DummyExtraSpace />
    </Wrapper>
  )
}

export default DetailWishDetails;