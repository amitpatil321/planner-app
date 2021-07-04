import styled from 'styled-components';
import { styleTokens } from '../../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  background: ${styleTokens.backgroundColor};
  padding-bottom: 62px; /* For footer */
`

export const Header = styled.h1`
  margin-top: 15px;
  font-size: 32px;
  color: ${styleTokens.darkTextColor};
  padding-bottom: 12px;
  overflow-wrap: break-word;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: inherit;
`

export const FirstSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const AuthorDetails = styled.div`
  color: ${styleTokens.lightIconColor};
  font-size: 16px;
    & > span {
    color: ${styleTokens.darkTextColor};
    font-weight: 500;
    padding-left: 4px;
  }
`
export const SecondSlot = styled(FirstSlot)`
  margin-top: 46px;
`

export const CategoryBox = styled.div`
  position: relative;
  font-size: 12px;
  padding: 4px 12px 4px 12px;
  border-radius: 8px;
  color: ${styleTokens.tagColor};
  background: ${styleTokens.tagBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  font-weight: 500;
  /* border: 0.5px solid ${styleTokens.tagColor}; */
  & >span {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
`
