import { keyframes, css } from 'styled-components'

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

export const rotationKeyFrames = (isActive) => {
  if(isActive === true) {
    return keyframes`
      0% {
        transform : rotate(0deg);
      }
      100% {
        transform : rotate(45deg);
      }
    `;
  } else if (isActive === false) {
    return keyframes`
      0% {
        transform : rotate(45deg);
      }
      100% {
        transform : rotate(0deg);
      }
    `;
  } else {
    return keyframes``;
  }
}

/*--------------------------------------------------------*/

/* ANIMATION FUNCTIONS DECLARATIONS */
export const risingAnimation = (isActive, config) => {
  config = config || {
    speed: .3,
    timeFun: 'ease-in-out',
    delay: 0.5
  };
  if(isActive === true) {
    return css`animation: ${riseUp} .3s ease-in-out 0.5s forwards`;
  } else if (isActive === false) {
    return css`animation: ${riseDown} .3s ease-in-out 0s forwards`;
  } else {
    return ``;
  }
};

