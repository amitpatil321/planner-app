import styled, {css} from 'styled-components';
import { styleTokens } from '../../styles/variable';

const activeCss = css`
  &:after{
    content:"";
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transform: translateX(-50%);
    background: ${styleTokens.linkTextColor};
  }
`
export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 62px;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  left: 0;
`

export const NavContainer = styled.div`
  width: 22%;
  height: 100%;
  padding: 12px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${styleTokens.tagBackgroundColor};
  cursor: pointer;
`

export const NavText = styled.div`
  font-size: 12px;
  padding-top: 2px;
  color: ${props => props.isActive?
  styleTokens.linkTextColor : styleTokens.lightIconColor};
  position: relative;
  ${props => props.isActive ? activeCss : ''}
`


