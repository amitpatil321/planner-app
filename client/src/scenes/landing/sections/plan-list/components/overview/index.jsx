import React from 'react';
import { useSelector } from 'react-redux';
import { GoCalendar } from 'react-icons/go'

import { getProgressDetails } from '../../../../../../services';
import ProgressIndicator from '../../../../../../components/lib/progress-indicator';
import EmojiContainer from '../../../../../../components/lib/emoji-container';
import ColorIndicator from '../../../../../../components/lib/color-container';
import ProfileImage from '../../../../../../components/lib/profile-image';
import { styleTokens } from '../../../../../../styles/variable';

import {
  Wrapper,
  Container,
  Header,
  Title,
  SubTitle,
  CategoryBox,
  DescriptionSection,
  CategoryLabel,
  AuthorTimeInfo,
  ProgressInfo,
  DateTimeContainer
} from './style'

const OverviewCard = ({
  title, categoryId, description,
  list, id, createdDate,
  clickHandle = () => {}
}) => {
  const {completeCount, totalCount} = getProgressDetails(list);
  const allCategories = useSelector(state => state.categories);
  const planCategoryDetails = allCategories[categoryId];

  return (
    <Wrapper
      onClick={(e) => clickHandle(id)}
    >
      <Container>
        <Header>
          <CategoryBox>
            {
              planCategoryDetails.emoji ? (
                <EmojiContainer>
                  { planCategoryDetails.emoji }
                </EmojiContainer>
              ) : (
                <ColorIndicator color={planCategoryDetails.color}/>
              )
            }
            <CategoryLabel>
              {planCategoryDetails.label}
            </CategoryLabel>
          </CategoryBox>
        </Header>
        <Title>
          {title}
        </Title>
        <DescriptionSection>
          {description}
        </DescriptionSection>
        <AuthorTimeInfo>
          <ProfileImage />
          <DateTimeContainer>
            <GoCalendar />
            &nbsp;&nbsp;
            <SubTitle>
              {createdDate}
            </SubTitle>
          </DateTimeContainer>
        </AuthorTimeInfo>
        <ProgressInfo>
          <SubTitle>
            Progress
          </SubTitle>
          <span> {completeCount}/{totalCount} </span>
        </ProgressInfo>
        <ProgressIndicator
          color={styleTokens.greenColor}
          sliderWidth={(completeCount/totalCount)*100}
      />
      </Container>
    </Wrapper>
  )
}

export default OverviewCard;