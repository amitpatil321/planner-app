import React from 'react';

import OverviewCard from './components/overview';

import {
  Wrapper,
  Container,
  EmptyCard
} from './style';

const PlanList = ({ plans }) => {
  return (
    <>
      <Wrapper>
        <Container>
          {
            (plans || [] ).length ? (
              <>
                {
                  (plans || [] )
                  .map((plan) => (
                    <React.Fragment key={plan.id}>
                      <OverviewCard
                        {...plan}
                      />
                    </React.Fragment>
                  ))
                }
              </>
            ) : <EmptyCard>
                  Hmm..!! looks like <br />
                  You don't have any plans
                </EmptyCard>
          }
        </Container>
      </Wrapper>
    </>
  )
}

export default PlanList;