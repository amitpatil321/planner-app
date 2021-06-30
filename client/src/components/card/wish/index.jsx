import React from 'react'

import { IconWrapper, CheckedIcon, UncheckedIcon } from '../../../styles/icon'
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  Container,
  Divider,
  DescriptionSection,
  TitleText
} from './style';

const Wishlist = ({title, isCompleted, description}) => {
  return (
    <Wrapper>
      <IconWrapper
        iconColor={
          isCompleted ?
          styleTokens.greenActiveColor :
          styleTokens.defaultIconColor
        }
      >
        {isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
      </IconWrapper>
      <Container>
        <TitleText>{title}</TitleText>
        {
          description && title ? <Divider /> : null
        }
        {
          description ?
          (
            <DescriptionSection
              reducePadding={!title}
            >
              {description}
            </DescriptionSection>
          ) : null
        }
      </Container>
    </Wrapper>
  )
}

export default Wishlist