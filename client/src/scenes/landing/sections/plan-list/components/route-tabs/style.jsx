import styled from 'styled-components';
import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
`

export const Tabs = styled.div`
  position: relative;
  padding: 8px 0 14px 24px;
  color: ${props => props.isSelected ? styleTokens.greenColor : '#848484'};
  font-weight: ${props => props.isSelected ? 600 : 500};
  cursor: pointer;
  > div {
    font-size: 14px;
  }
`
export const TabIndicator = styled.div`
  width: 100%;
  height: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
`
