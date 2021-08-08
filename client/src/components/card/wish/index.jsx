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

const WishCard = ({
  title,
  isCompleted,
  description,
  isStatusVisible = true,
  }) => {
  return (
    <Wrapper>
      {isStatusVisible &&
        <IconWrapper
          iconColor={
            isCompleted ?
            styleTokens.greenActiveColor :
            styleTokens.defaultIconColor
          }
        >
          {isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
        </IconWrapper>
      }
      <Container
        isFullWidth={!isStatusVisible}
      >
        <TitleText
          isFullWidth={!isStatusVisible}
        >
          {title}
        </TitleText>
        {
          description && title ? <Divider /> : null
        }
        {
          description ?
          (
            <DescriptionSection
              isFullWidth={!isStatusVisible}
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

export default WishCard