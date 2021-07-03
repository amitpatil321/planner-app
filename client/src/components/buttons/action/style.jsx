import styled from 'styled-components'
import {
  risingAnimation,
  rotationKeyFrames
} from '../../../styles/animation';

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
  top: 50%;
  transform: translate(-50%, -50%);
`

export const AnimationWrapper = styled.span`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  animation: ${
  props => rotationKeyFrames(props.isActive)} .3s ease-in-out 0s forwards;
`

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.config.backgroundColor};
  padding: 0 4px;
  overflow-y: hidden;
`

export const MenuItem = styled.div`
  width: ${props => props.config.btnSize + 'px'};
  height: ${props => props.config.btnSize + 'px'};
  border-radius: 50%;
  background: ${props => props.config.btnColor};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transform: translateY(150%);
  ${props => risingAnimation(props.isActive)};
  > span {
    padding-left: ${props => props.config.pl}px;
  }
`