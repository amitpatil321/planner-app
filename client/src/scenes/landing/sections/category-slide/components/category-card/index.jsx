import React from 'react';
import { HiOutlineDotsCircleHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi';
import { IoCloseCircleOutline } from 'react-icons/io5';

import ControlPanel from '../controlpanel';

import {
  Wrapper,
  Container,
  Header,
  Title,
  SubTitle,
  EmojiContainer,
  ColorIndicator,
  TitleContainer,
  OverFlowMenuIcon,
  PaddingBox,
  TitlePlaceholder
} from './style'

const CategoryCard = ({
  label = '',
  list,
  type = '',
  color = "#ffffff",
  emoji,
  isNewCategory = false,
  clickHandle = () => {}
}) => {
  const [isEditMode, toggleEdit] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleEdit((prevState) => !prevState);
  };

  return (
    <Wrapper
      onClick={(e) => clickHandle(type)}
    >
      <Container>
        <Header>
          {
            emoji ? (
              <EmojiContainer>
                {emoji}
              </EmojiContainer>
            ) : (
              <ColorIndicator color={color}/>
            )
          }
          <TitleContainer>
            {
              (!label || label === '') && (
                <TitlePlaceholder>
                  New category
                </TitlePlaceholder>
              )
            }
            <Title
              isEditMode={isEditMode}
            >
              {label}
            </Title>
          </TitleContainer>
          <PaddingBox />
        </Header>
        {
          list && (
            <SubTitle>
              {list.length} Tasks
            </SubTitle>
          )
        }
        </Container>
        <OverFlowMenuIcon
          onClick={handleClick}
        >
          {
            (isNewCategory  && !isEditMode) ? (
              <HiOutlineViewGridAdd />
            ) : (
              <>
                {
                  isEditMode ?
                  <IoCloseCircleOutline /> :
                  <HiOutlineDotsCircleHorizontal />
                }
              </>
            )
          }
        </OverFlowMenuIcon>
      {
        isEditMode && (
          <ControlPanel
            isNewCategory={isNewCategory}
          />
        )
      }
    </Wrapper>
  )
}

export default CategoryCard;