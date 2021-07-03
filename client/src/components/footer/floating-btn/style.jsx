import styled, { keyframes } from 'styled-components';
import { styleTokens } from '../../../styles/variable';

const floatingAnimation = (isActive) => {
  if(isActive === true) {
    return keyframes`
      0% {
        transform : translateY(-36%);
        width : 48px;
        border-color: ${styleTokens.backgroundColor};
      }
      50% {
        transform : translateY(-120%);
        width : 48px;
        border-color: ${styleTokens.backgroundColor};
      }
      51% {
        transform : translateY(-120%);
        width : 48px;
        border-color: transparent;
      }
      100% {
        transform : translateY(-120%);
        width : 180px;
        border-color: transparent;
      }
    `;
  } else if (isActive === false) {
    return keyframes`
      0% {
        transform : translateY(-120%);
        width : 180px;
        border-color: transparent;
      }
      50% {
        transform : translateY(-120%);
        width : 48px;
        border-color: transparent;
      }
      51% {
        transform : translateY(-120%);
        width : 48px;
        border-color: ${styleTokens.backgroundColor};
      }
      100% {
        transform : translateY(-36%);
        width : 48px;
        border-color: ${styleTokens.backgroundColor};
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
  border: 0px solid ${styleTokens.backgroundColor};
  z-index: 999;
  box-shadow: rgba(75, 144, 223, 0.3) 0px 4px 20px 0px,
  rgba(75, 144, 223, 0.32) 0px 2px 16px 0px;
  animation : ${
  props => floatingAnimation(props.isActive)} .6s ease-in-out 0s forwards;
`

