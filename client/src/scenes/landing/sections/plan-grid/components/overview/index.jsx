import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  Title,
  SubTitle,
  EmojiContainer,
  ColorIndicator,
  CategoryBox
} from './style'

const OverviewCard = ({
  title, categoryInfo,
  list, id, authorId,
  clickHandle = () => {}}) => {
  return (
    <Wrapper
      onClick={(e) => clickHandle(id)}
    >
      <Container>
        <Header>
          <SubTitle>
            { authorId }
          </SubTitle>
          <Title>
            {title}
          </Title>
          <CategoryBox>
            {
              categoryInfo.emoji ? (
                <EmojiContainer>
                  { categoryInfo.emoji }
                </EmojiContainer>
              ) : (
                <ColorIndicator color={categoryInfo.color}/>
              )
            }
            <SubTitle>
              {categoryInfo.label}
            </SubTitle>
          </CategoryBox>
        </Header>
      </Container>
    </Wrapper>
  )
}

export default OverviewCard;