import React from 'react';

import { getProgressDetails } from '../../../../../../services';
import ProgressIndicator from '../../../../../../components/lib/progress-indicator';

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
  description,
  list, id,
  clickHandle = () => {}}) => {
  const {completeCount, totalCount} = getProgressDetails(list);

  return (
    <Wrapper
      onClick={(e) => clickHandle(id)}
    >
      <Container>
        <Header>
          <Title>
            {title}
          </Title>
        </Header>
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
          <div>
            <SubTitle>
              Subtasks
              <span> {completeCount}/{totalCount} </span>
            </SubTitle>
            <ProgressIndicator
              color={categoryInfo.color}
              sliderWidth={(completeCount/totalCount)*100}
            />
          </div>
      </Container>
    </Wrapper>
  )
}

export default OverviewCard;