import React from 'react';

import OverviewCard from './components/overview';

import {
  Wrapper,
  Container,
} from './style';

const PlanList = ({ plans, selectedCategoryId }) => {
  console.log(plans);
  return (
    <Wrapper>
      <Container>
        {
          (plans || { list: [] })
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

export default PlanList;