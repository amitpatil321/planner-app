import React from 'react'

import { getCategoryInfo } from '../../helper';

import {
  FavoriteIcon,
  FavoriteMarkedIcon,
  CheckListIcon,
  IconWrapper
} from '../../styles/icon'

import {
  Wrapper,
  Container,
  Header,
  CompletionDetails,
  SubText,
  CategoryBox,
  Row
} from './style'

const ListCard = (props) => {
  const getDetailedListCount = (list) => {
    let complete = 0, incomplete = 0;
    list.forEach((data)=>{
      if(data.isCompleted) {
        complete++
      } else {
        incomplete ++
      }
    })
    return (<>{complete}/{incomplete}</>)
  }
  return (
    <Wrapper>
      <Container>
        <Header>
          {props.name}
          <IconWrapper>
            {props.isFavorite ?  <FavoriteMarkedIcon /> : <FavoriteIcon />}
          </IconWrapper>
        </Header>
        <Row>
          <CompletionDetails isCompleted={props.isCompleted}>
            <IconWrapper
              iconColor={props.isCompleted ? '#ffff' : '#535B62'}
            >
              <CheckListIcon />
            </IconWrapper>
            <SubText>
              {getDetailedListCount(props.list)}
            </SubText>
          </CompletionDetails>
          <CategoryBox>
            {getCategoryInfo(props.genre)}
          </CategoryBox>
          </Row>
      </Container>
    </Wrapper>
  )
}

export default ListCard;