import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  /* padding: 0 24px; */
  position: relative;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
`
export const CarouselContainer = styled(CarouselWrapper)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`

export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  height: calc(100vh - 140px - 84px - 64px);
`