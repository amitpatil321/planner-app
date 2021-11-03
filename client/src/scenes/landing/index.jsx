import React from 'react';
import queryString from 'query-string';
import { withRouter } from "react-router";
import { useSelector } from 'react-redux'

import SearchPanel from './sections/search-panel';
import CategorySlide from './sections/category-slide';
import PlanList from './sections/plan-list';

import { defaultPlanConfig } from '../../configs/plan';

import {
  Heading,
  SubHeading,
  Wrapper,
  Container,
  Row,
} from './style';

const Landing = ({ username = 'Rahul', history, location }) => {
  const plans = useSelector(state => state.plans.grouped);
  const { category } = queryString.parse(location.search);
  const { allCategory } = defaultPlanConfig;

  const [selectedCategory, toggleCategory] = React.useState(() => {
    if(category) {
      return category;
    }
    return allCategory
  });

  return (
    <Wrapper>
      <Heading>
        Hi {username}, 👋🏻 <br />
        Start tracking your Plans
      </Heading>
      <Container>
        <Row>
          <SearchPanel />
        </Row>
        <Row>
          <SubHeading>
            Categories
          </SubHeading>
        </Row>
        <CategorySlide
          plans={plans}
          selectedCategory={selectedCategory}
          toggleCategory={toggleCategory}
        />
        <PlanList
          plans={plans}
          selectedCategory={selectedCategory}
        />
      </Container>
    </Wrapper>
  )
}

export default withRouter(Landing);