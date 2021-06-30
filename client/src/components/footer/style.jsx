import styled from 'styled-components';
import { styleTokens } from '../../styles/variable';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 58px;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  left: 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
`


