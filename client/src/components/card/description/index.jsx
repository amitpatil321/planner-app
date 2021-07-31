import React from 'react'

import {
  Wrapper,
  Container,
  DescriptionSection,
  DescriptionInput,
  DescriptionPlaceHolder
} from './style';

const DescriptionCard = ({
  description,
  isEditMode,
  onDescriptionChange = () => {}
  }) => {
  const descriptionRef = React.useRef();

  React.useLayoutEffect(() => {
    if(descriptionRef.current && isEditMode){
      descriptionRef.current.innerText = description;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Wrapper>
        {
          description === "" && isEditMode &&
            <DescriptionPlaceHolder>
              Enter your wish description
            </DescriptionPlaceHolder>
        }
        {
          isEditMode ?
          (
            <Container>
              <DescriptionInput
                contentEditable={true}
                name="description"
                html={description}
                onInput={onDescriptionChange}
                ref={descriptionRef}
              />
            </Container>
          ) : (
            <>
            {
              description &&
                (
                  <Container>
                    <DescriptionSection>
                      {description}
                    </DescriptionSection>
                  </Container>
                )
            }
            </>
          )
        }
    </Wrapper>
  )
}

export default DescriptionCard