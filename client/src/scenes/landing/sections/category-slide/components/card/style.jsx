import styled from 'styled-components';

import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  border-radius: 8px;
  position: relative;
  position: relative;
  cursor: pointer;
  margin-right: 12px;
  padding: 12px;
  margin-bottom: ${props => props.extraPadding ? '14px' : '' };
  box-shadow: ${props => props.isSelected ?
    styleTokens.lightGreen :
    styleTokens.boxShadowColor
  } 0px 1px 8px;
  border: 1px solid ${
    props => props.isSelected ?
      styleTokens.lightGreen :
      styleTokens.boxShadowColor
    };
  background:${props => props.isSelected ?
    styleTokens.lightGreen : styleTokens.backgroundWhiteColor
  };
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`
export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${styleTokens.darkColor};
  position: relative;
  padding-left: 10px;
  font-weight: 600;
`