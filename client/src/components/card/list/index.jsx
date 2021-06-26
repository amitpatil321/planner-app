import React from 'react'

import { getCategoryInfo, getDetailedListCount } from '../../../helper';

import {
  FavoriteIcon,
  FavoriteMarkedIcon,
  CheckListIcon,
  DescriptionIcon,
  IconWrapper,
  TagIcon
} from '../../../styles/icon'
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  Container,
  Header,
  HeaderText,
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
          <HeaderText>{data.title}</HeaderText>
          <IconWrapper>
            {data.isFavorite ?
            <FavoriteMarkedIcon style={{color: styleTokens.favoriteIconColor}}/> : <FavoriteIcon />}
          </IconWrapper>
        </Header>
        <Row>
          <CompletionDetails isCompleted={data.isCompleted}>
            <IconWrapper
              iconColor={data.isCompleted ? styleTokens.lightActiveColor : styleTokens.lightIconColor}
              iconSize={14}
              pr={data.hasBucket ? 4 : 0}
            >
              {data.hasBucket ? <CheckListIcon /> : <DescriptionIcon />}
            </IconWrapper>
            {data.hasBucket ?
            (<SubText>
              {getDetailedListCount(data.list)}
            </SubText>) : null}
          </CompletionDetails>
          <CategoryBox>
            <IconWrapper
              iconColor={styleTokens.tagColor}
              iconSize={14}
            >
              <TagIcon />
            </IconWrapper>
            {getCategoryInfo(data.genre).label}
          </CategoryBox>
          </Row>
      </Container>
    </Wrapper>
  )
}

export default ListCard;