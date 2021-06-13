import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 220px;
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

export const Header = styled.h1`
  font-size: 24px;
  color: #535B62;
  margin-bottom: 24px;
`