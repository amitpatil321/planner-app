import React from 'react';

import EmojiContainer from '../../../../../../components/lib/emoji-container';
import ColorContainer from '../../../../../../components/lib/color-container';

import {
  Wrapper,
  Container,
  Title,
} from './style'

const CategoryCard = ({
  label,
  id,
  color,
  emoji,
  isSelected = false,
  extraPadding = false,
  clickHandle = () => {}
}) => {
  return (
    <Wrapper
      onClick={(e) => clickHandle(id)}
      isSelected={isSelected}
      extraPadding={extraPadding}
    >
      <Container>
        {
          emoji ? (
            <EmojiContainer>
              {emoji}
            </EmojiContainer>
          ) : (
            <ColorContainer pColor={color}/>
          )
        }
        <Title>
          {label}
        </Title>
      </Container>
    </Wrapper>
  )
}

export default CategoryCard;