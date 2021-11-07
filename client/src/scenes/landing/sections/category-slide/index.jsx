import React from 'react';

import { genericCategories } from '../../../../configs/category';
import CategoryCard from './components/card';

import {
  Wrapper,
  Container,
  EmptyBox
} from './style';

const CategorySlide = ({
  allCategories,
  selectedCategoryId,
  toggleCategory = () => {},
}) => {
  const filteredCategory = Object.keys(allCategories)
  .filter(key => genericCategories.findIndex(c => c.id === key) === -1 );
  filteredCategory.unshift('all');
  const breakPoint = (filteredCategory.length / 2) + (filteredCategory.length % 2);


  console.log(allCategories)
  // .filter(key => genericCategories.findIndex(c => c.id === key) === 1 ));

  return (
    <>
    <Wrapper>
      {
        filteredCategory
        .slice(0, breakPoint)
        .map((key, idx) => (
          <Container
            key={key}
          >
            <CategoryCard
              {...allCategories[key]}
              clickHandle={toggleCategory}
              isSelected={selectedCategoryId === key}
              extraPadding
            />
            <CategoryCard
              {...allCategories[filteredCategory[breakPoint + idx]]}
              clickHandle={toggleCategory}
              isSelected={selectedCategoryId === filteredCategory[breakPoint + idx]}
            />
          </Container>
        ))
      }
      <EmptyBox />
    </Wrapper>
    </>
  )
}

export default CategorySlide;