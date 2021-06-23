import React from 'react'

import { IconWrapper, CheckedIcon, UncheckedIcon } from '../../../styles/icon'
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  Container,
  Divider,
  DescriptionSection
} from './style';

const Wishlist = ({content, isCompleted, description}) => {
  return (
    <Wrapper>
      <IconWrapper
        iconColor={
          isCompleted ?
          styleTokens.lightActiveColor :
          styleTokens.defaultIconColor
        }
      >
        {isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
      </IconWrapper>
      <Container>
        {content}
        {
          description && content ? <Divider /> : null
        }
        {
          description ?
          (
            <DescriptionSection
              reducePadding={!content}
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