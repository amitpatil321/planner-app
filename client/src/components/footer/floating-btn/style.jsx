import styled from 'styled-components';
import { styleTokens } from '../../../styles/variable';
import { footerFloatingAnimation } from '../../../styles/animation';
import { actionBtnConfig } from '../../../configs/footer';

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
  border: 0px solid ${styleTokens.backgroundWhiteColor};
  z-index: 999;
  box-shadow:
  rgba(75, 144, 223, 0.3) 0px 4px 20px 0px,
  rgba(75, 144, 223, 0.32) 0px 2px 16px 0px;
`

export const AnimatableContainer = styled(Container)`
  ${props => footerFloatingAnimation(props.isActive)};
`

export const RoundButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${actionBtnConfig.btnColor};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor:pointer;
  color: ${styleTokens.whiteColor};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`