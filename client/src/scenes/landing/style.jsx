import styled from 'styled-components'
import { styleTokens } from '../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 24px;
`
export const Heading = styled.div`
  font-size: 24px;
  color: ${styleTokens.darkColor};
  padding: 24px 24px 36px 24px;
  font-weight: 900;
  > span {
    color: #848484;
    font-weight: 600;
  }
;
`
export const SubHeading = styled.h4`
  font-size: 16px;
  color: ${styleTokens.darkColor};
  padding: 12px 0px;
  ::-webkit-input-placeholder {
    color: #CACACA;
  }
  ::-moz-placeholder {
    color: #CACACA;
  }
  :-ms-input-placeholder {
    color: #CACACA;
  }
  :-moz-placeholder {
    color: #CACACA;
  }
`
export const HorizontalScrollBar = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  padding: 12px 0 12px 24px;
`