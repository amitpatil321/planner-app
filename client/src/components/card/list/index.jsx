import React from 'react'

import { getCategoryInfo, getDetailedListCount } from '../../../helper';

import {
  FavoriteIcon,
  FavoriteMarkedIcon,
  CheckListIcon,
  IconWrapper
} from '../../../styles/icon'
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  Container,
  Header,
  CompletionDetails,
  SubText,
  CategoryBox,
  Row
} from './style'

const ListCard = ({
  onClick= () => {},
  data
}) => {
  return (
    <Wrapper
      onClick={() => onClick(data)}
    >
      <Container>
        <Header>
          {data.name}
          <IconWrapper>
            {data.isFavorite ?
            <FavoriteMarkedIcon /> : <FavoriteIcon />}
          </IconWrapper>
        </Header>
        <Row>
          <CompletionDetails isCompleted={data.isCompleted}>
            <IconWrapper
              iconColor={data.isCompleted ? styleTokens.activeColor : styleTokens.lightIconColor}
              iconSize={14}
              pr={4}
            >
              <CheckListIcon />
            </IconWrapper>
            <SubText>
              {getDetailedListCount(data.list)}
            </SubText>
          </CompletionDetails>
          <CategoryBox>
            {getCategoryInfo(data.genre).label}
          </CategoryBox>
          </Row>
      </Container>
    </Wrapper>
  )
}

export default ListCard;