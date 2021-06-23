import styled from 'styled-components';
import { styleTokens } from '../../../../styles/variable';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: inherit;
`

export const ThirdSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
`

export const DateTimeText = styled.div`
  color: ${styleTokens.lightTextColor};
  font-size: 12px;
`

export const ListCount = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.isCompleted ?
  `
  color: ${styleTokens.lightActiveColor};
  padding: 4px 8px;
  background: ${styleTokens.activeBackground};
  ` : `
  padding: 8px 0;
  color: ${styleTokens.lightIconColor};
  `}
`

export const SubText = styled.span`
  font-size: 12px;
  color: inherit;
`

export const ListSection = styled.div`
  border: 2px solid #ecf1fd;
  border-radius: 8px;
  margin: 0 0 20px;
  padding: 15px;
  width: 100%;
  margin-top: 48px;
`

export const TitleText = styled.span`
  color: #54595e;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0;
  display: block;
`

export const WishWrapper = styled.div``