import React from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import { genericCategories } from '../../configs/category';
import { getFilteredPlans } from '../../services';

import SearchPanel from './sections/search-panel';
import CategorySlide from './sections/category-slide';
import PlanList from './sections/plan-list';
import RouteTab from './sections/plan-list/components/route-tabs';

import {
  Heading,
  SubHeading,
  Wrapper,
  Container,
  Row,
} from './style';

const Landing = ({ username = 'Rahul' }) => {
  const plans = useSelector(state => state.plans);
  const allCategories = useSelector(state => state.categories);
  const tabOptions = genericCategories.slice(2);

  const [
    selectedCategoryId,
    toggleCategoryId
  ] = React.useState(genericCategories[0].id);
  const [
    selectedTabId,
    updateSelectedTab
  ] = React.useState(tabOptions[0].id);
  const [searchQuery, setSearchQuery] = React.useState('');

  const filterPlans = getFilteredPlans(
    plans,
    selectedCategoryId,
    selectedTabId,
    searchQuery
  );

  return (
    <Wrapper>
      <Heading>
        Hi, {username} 👋🏻 <br />
        <span> Start tracking your Plans </span>
      </Heading>
      <Container>
        <Row>
          <SearchPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Row>
        <Row>
          <SubHeading>
            Categories
          </SubHeading>
        </Row>
        <CategorySlide
          allCategories={allCategories}
          selectedCategoryId={selectedCategoryId}
          toggleCategory={toggleCategoryId}
        />
        <Row>
          <SubHeading>
            My Tasks
          </SubHeading>
        </Row>
        <RouteTab
          tabs={tabOptions}
          selectedTabId={selectedTabId}
          handleClick = {(tabId) => {
            updateSelectedTab(tabId)
          }}
          optionCount={(filterPlans||[]).length}
        />
        <PlanList
          plans={filterPlans}
        />
      </Container>
    </Wrapper>
  )
}

export default withRouter(Landing);