import React from 'react';

import SegmentControl from '../../components/segmentcontrol';
import SmallCard from '../../components/card/small';
import { getGroupedWishlist } from '../../helper/landingPage';
import {
  landingSegmentConfig,
  defaultSegmentType
} from '../../configs/segmentcontrol';

import {
  Heading,
  Wrapper,
  Container,
  Row,
  CardContainer
} from './style';

import wishlists from '../../__mocks__/data.json';

const Landing = ({ username = 'Rahul' }) => {
  const [wishList, updateWishList] = React.useState({});
  const [selectedSegment, toggleSegment] = React.useState(defaultSegmentType);
  const selectedGroup = wishList[selectedSegment] || [];

  const updateSegment = (option) => {
    toggleSegment(option.type);
  }

  React.useEffect(() => {
  const groupedWishlist = getGroupedWishlist(wishlists);
  updateWishList(groupedWishlist)
  }, []);

  return (
    <Wrapper>
      <Heading>
        Wishlist of <br /> {username}
      </Heading>
      <Container>
        <Row>
          <SegmentControl
            onChange={updateSegment}
            options={landingSegmentConfig}
          />
        </Row>
        <Row>
          <CardContainer>
            {
              selectedGroup.map((data, idx) => (
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