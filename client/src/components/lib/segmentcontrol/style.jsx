import styled, {keyframes} from 'styled-components'

const sliderAnimation = ({prevPos, nextPos}) => keyframes`
    0% {
        transform : translateX(${prevPos}px)
    }
    100% {
        transform : translateX(${nextPos}px)
    }
`;

export const Wrapper = styled.div`
  width: ${props => props.dWidth + '%'};
  border-radius: 12px;
  margin: 24px 0px 32px 0px;
  font-size: 12px;
  position: relative;
  background: #f5f7fb;
`

export const Container = styled.div`
  border-radius: 12px;
  padding: 0px 4px;
  position: relative;
  width: 100%;
  display: flex;
  z-index: 9999;
`

export const Option = styled.div`
  border-radius: 12px;
  padding: 16px 16px;
  color: #535B62;
  font-weight: 500;
  width: ${props => props.dWidth + '%'};
  text-align: center;
  cursor: pointer;
  font-size: 14px;
`

export const ActiveOption = styled(Option)`
  box-shadow: rgb(0 0 0 / 12%) 0px 3px 10px 0px;
  background: #ffff;
  padding: unset;
  padding: 12px 0px;
  width: 33.33%;
  text-align: center;
  color: #ffff;
  animation : ${
  props => sliderAnimation(props.animationState)} .5s ease-in 0s forwards;
  opacity: ${props => props.animationState.opacity};
  cursor: pointer;
`

export const Slider = styled(Container)`
  position: absolute;
  z-index: 9999;
  height: 100%;
  justify-content: unset;
  padding: 3px 4px;
`