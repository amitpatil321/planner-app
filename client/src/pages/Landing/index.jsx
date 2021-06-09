import React from 'react';

import SegmentControl from '../../components/segmentcontrol';
import SmallCard from '../../components/card/small';
import { getGroupedWishlist } from '../../helper/landingPage';
import { landingConfig } from '../../configs/segmentcontrol';

import {
  Heading,
  Wrapper,
  Container,
  Row,
  CardContainer
} from './style';

import wishlists from '../../__mocks__/data.json';

const Landing = ({ username = 'Rahul' }) => {
  const { categorized, status, others } = getGroupedWishlist(wishlists);

  return (
    <Wrapper>
      <Heading>
        Wishlist of <br /> {username}
      </Heading>
      <Container>
        <Row>
          <SegmentControl options={landingConfig}/>
        </Row>
        <Row>
          <CardContainer>
            {
              categorized.map((data, idx) => (
                <SmallCard {...data} key={idx}/>
              ))
            }
          </CardContainer>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Landing;