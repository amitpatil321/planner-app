import React from 'react';

import { defaultPlanConfig } from '../../../../configs/plan';

import CategoryCard from './components/category-card';

import {
  Wrapper
} from './style';

const CategorySlide = ({
  plans,
  selectedCategory,
  toggleCategory = () => {},
}) => {
  const { defaultCategory } = defaultPlanConfig;
  return (
    <Wrapper>
      {
        Object.keys(plans).map((key) => (
          <CategoryCard
            {...plans[key]}
            key={key}
          />
        ))
      }
      <CategoryCard
        { ...defaultCategory }
        isNewCategory
      />
    </Wrapper>
  )
}

export default CategorySlide;