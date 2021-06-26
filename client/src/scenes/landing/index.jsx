import React from 'react';
import queryString from 'query-string';
import { withRouter } from "react-router";
import { useSelector } from 'react-redux'

import SegmentControl from '../../components/segmentcontrol';
import SmallCard from '../../components/card/small';
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

const Landing = ({ username = 'Rahul', history, location }) => {
  const wishlist = useSelector(state => state.wishlist);
  const { segment } = queryString.parse(location.search);

  const [selectedSegment, toggleSegment] = React.useState(() => {
    if(segment) {
      return segment;
    }
    return defaultSegmentType
  });
  const selectedGroup = wishlist[selectedSegment] || [];

  const updateSegment = (option) => {
    toggleSegment(option.type);
    history.replace(`/landing?segment=${option.type}`)
  }

  const redirectToGroupRoute = (type) => {
    const redirectPath = `/group?groupedBy=${selectedSegment}&type=${type}`
    history.push(redirectPath);
  }

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
            activeSegment={selectedSegment}
          />
        </Row>
        <Row>
          <CardContainer>
            {
              selectedGroup.map((data, idx) => (
                <SmallCard
                  {...data}
                  key={idx}
                  clickHandle={redirectToGroupRoute}
                />
              ))
            }
          </CardContainer>
        </Row>
      </Container>

    </Wrapper>
  )
}

export default withRouter(Landing);