import { keyframes, css } from 'styled-components'
import { styleTokens } from './variable';

/* KEYFRAMES DECLARATIONS */
const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
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
export const footerItemAnimation = (isActive) => {
  if(isActive === true) {
    return css`
    animation: ${scaleUp} 0.3s ease-in-out 0.5s forwards
  `;
  } else if (isActive === false) {
    return css`
    animation: ${scaleDown} 0.3s ease-in-out 0s forwards
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