import React from 'react'

import {
  Wrapper,
  Container,
  DescriptionSection,
} from './style';

const DescriptionCard = ({ description }) => {
  return (
    <Wrapper>
      <Container>
        {
          description ?
          (
            <DescriptionSection>
              {description}
            </DescriptionSection>
          ) : null
        }
      </Container>
    </Wrapper>
  )
}

export default DescriptionCard