import styled, { keyframes } from 'styled-components'

const rotationAnimation = (isActive) => {
  if(isActive === true) {
    return keyframes`
      0% {
        transform : rotate(0deg);
      }
      100% {
        transform : rotate(-45deg);
      }
    `;
  } else if (isActive === false) {
    return keyframes`
      0% {
        transform : rotate(-45deg);
      }
      100% {
        transform : rotate(0deg);
      }
    `;
  } else {
    return keyframes``;
  }
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position : relative;
  transform-origin: center;
`

export const ButtonContainer = styled.button`
  width: ${props => props.config.btnSize + 'px'};
  height: ${props => props.config.btnSize + 'px'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.config.btnColor};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const AnimationWrapper = styled.span`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  animation: ${
  props => rotationAnimation(props.isActive)} .3s ease-in-out 0s forwards;

`

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.config.menuBackgroundColor};
`
