import styled from 'styled-components'
import { styleTokens } from '../../styles/variable';

const innerHeight = window.innerHeight;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${styleTokens.backgroundColor};
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  & .swiper-container {
    width: 100%;
    height: 100%;
  }
  & .swiper-slide {
    width: 50%;
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  height: calc(${innerHeight}px - 200px - 56px - 32px);
  position: relative;
`

export const EmptyListCard = styled.div`
  width: 100%;
  height: 112px;
`