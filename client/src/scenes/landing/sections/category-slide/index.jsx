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
  const filteredCategoryKeys = Object.keys(allCategories)
  .filter(key => genericCategories.findIndex(c => c.id === key) === -1 );
  filteredCategoryKeys.unshift('all');
  const breakPoint = Math.floor((filteredCategoryKeys.length / 2)) + (filteredCategoryKeys.length % 2);

  return (
    <>
    <Wrapper>
      {
        filteredCategoryKeys
        .slice(0, breakPoint)
        .map((key, idx) => (
          <Container
            key={key}
          >
            <CategoryCard
              {...allCategories[key]}
              clickHandle={toggleCategory}
              isSelected={selectedCategoryId.toString() === key}
              extraPadding
            />
            <CategoryCard
              {...allCategories[filteredCategoryKeys[breakPoint + idx]]}
              clickHandle={toggleCategory}
              isSelected={selectedCategoryId.toString() === filteredCategoryKeys[breakPoint + idx]}
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