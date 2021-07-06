import styled from 'styled-components'
import {
  footerRisingAnimation,
  footerActionRotation
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
  cursor:pointer;
`

export const AnimationWrapper = styled.span`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  ${props => footerActionRotation(props.isActive)};
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
  transform: translateY(100%);
  cursor:pointer;
  ${props => footerRisingAnimation(props.isActive)};
  > span {
    padding-left: ${props => props.config.pl}px;
  }
`