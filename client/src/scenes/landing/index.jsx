import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux'

import SearchPanel from './sections/search-panel';
import CategorySlide from './sections/category-slide';
import PlanList from './sections/plan-list';

import { genericCategories } from '../../configs/category';

import {
  Heading,
  SubHeading,
  Wrapper,
  Container,
  Row,
} from './style';

const Landing = ({ username = 'Rahul' }) => {
  const groupedPlans = useSelector(state => state.plans);
  const allCategories = useSelector(state => state.categories);

  const [selectedCategoryId, toggleSelectedCategoryId] = React.useState(genericCategories[0].id);

  return (
    <Wrapper>
      <Heading>
        Hi, {username} 👋🏻 <br />
        <span> Start tracking your Plans </span>
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
          allCategories={allCategories}
          selectedCategoryId={selectedCategoryId}
          toggleCategory={toggleSelectedCategoryId}
        />
        {/* <PlanList
          plans={groupedPlans[selectedCategoryId]}
        /> */}
      </Container>
    </Wrapper>
  )
}

export default withRouter(Landing);