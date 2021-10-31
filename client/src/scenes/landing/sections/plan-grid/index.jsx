import React from 'react';

import OverviewCard from './components/overview';

import {
  Wrapper,
  Container,
} from './style';

const PlanGrid = ({ plans, selectedCategory }) => {
  return (
    <Wrapper>
      <Container>
        {
          (plans[selectedCategory.type] || {list: []})
          .list.map((plan) => (
            <React.Fragment key={plan.id}>
              <OverviewCard
                {...plan}
              />
            </React.Fragment>
          ))
        }
      </Container>
    </Wrapper>
  )
}

export default PlanGrid;