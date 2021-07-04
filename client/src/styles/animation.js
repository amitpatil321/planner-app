import styled, { keyframes, css } from 'styled-components'
import { styleTokens } from './variable';

/* KEYFRAMES DECLARATIONS */
const riseUp = keyframes`
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const riseDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(150%);
  }
`;
const clockwise = keyframes`
  0% {
    transform : rotate(0deg);
  }
  100% {
    transform : rotate(45deg);
  }
`;
const antiClockwise = keyframes`
  0% {
    transform : rotate(45deg);
  }
  80% {
    transform : rotate(45deg);
  }
  100% {
    transform : rotate(0deg);
  }
`;

const footerExpansion = keyframes`
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
  };
`;
const footerContraction = keyframes`
  0% {
    transform : translateY(-120%);
    width : 180px;
    border-color: transparent;
  }
  20% {
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


/* ANIMATION FUNCTIONS DECLARATIONS */
export const footerRisingAnimation = (isActive) => {
  if(isActive === true) {
    return css`
    animation: ${riseUp} 0.3s ease-in-out 0.5s forwards
  `;
  } else if (isActive === false) {
    return css`
    animation: ${riseDown} 0.3s ease-in-out 0s forwards
  `;
  } else {
    return ``;
  }
};

export const footerActionRotation = (isActive) => {
  if(isActive === true) {
    return css`animation: ${clockwise} 0.3s ease-in-out 0.1s forwards`;
  } else if (isActive === false) {
    return css`animation: ${antiClockwise} 0.6s ease-in-out 0s forwards`;
  } else {
    return ``;
  }
}


export const footerFloatingAnimation = (isActive) => {
  if(isActive === true) {
    return css`animation: ${footerExpansion} 0.6s ease-in-out 0s forwards`;
  } else if (isActive === false) {
    return css`animation: ${footerContraction} 0.6s ease-in-out 0s forwards`;
  } else {
    return ``;
  }
}