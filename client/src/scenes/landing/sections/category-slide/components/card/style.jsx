import styled from 'styled-components';

import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  border-radius: 8px;
  position: relative;
  background: ${styleTokens.backgroundWhiteColor};
  position: relative;
  box-shadow: ${styleTokens.boxShadowColor} 0px 1px 3px;
  border: 1px solid ${styleTokens.boxShadowColor};
  cursor: pointer;
  margin-right: 12px;
  padding: 12px;
  margin-bottom: ${props => props.extraPadding ? '14px' : '' };
`
export const Container = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  justify-content: space-between;
  position: relative;
`
export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${styleTokens.darkColor};
  position: relative;
  padding-left: 10px;
  font-weight: 600;
`