import styled, { keyframes } from 'styled-components';
import { styleTokens } from '../../../styles/variable';

const floatingAnimation = (isActive) => {
  if(isActive === true) {
    return keyframes`
      0% {
        transform : translateY(-36%);
      }
      100% {
        transform : translateY(-120%);
      }
    `;
  } else if (isActive === false) {
    return keyframes`
      0% {
        transform : translateY(-120%);
      }
      100% {
        transform : translateY(-36%);
      }
    `;
  } else {
    return keyframes``;
  }
}

export const Wrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${styleTokens.tagBackgroundColor};
  position: relative;
`

export const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  top: 0;
  transform: translateY(-36%);
  border: 4px solid ${styleTokens.backgroundColor};
  z-index: 999;
  animation : ${
  props => floatingAnimation(props.isActive)} .3s ease-in-out 0s forwards;
`

