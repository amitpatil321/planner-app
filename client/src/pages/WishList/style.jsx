import styled from 'styled-components';
import { styleTokens } from '../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  background: ${styleTokens.backgroundColor};
`

export const Header = styled.h1`
  margin-top: 15px;
  font-size: 38px;
  color: ${styleTokens.darkTextColor};
  padding-bottom: 12px;
`

export const FirstSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: inherit;
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
  padding: 0px 12px 0 14px;
  border-radius: 8px;
  color: ${styleTokens.tagColor};
  background: ${styleTokens.tagBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: 500;
`
export const Group = styled.div`
  display: flex;
`

export const ImageContainer = styled.div`
  height: 28px;
  width: 28px;
  background-image: ${ props => `url(${props.asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 14px;
`
export const ThirdSlot = styled(FirstSlot)`
  width: unset;
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
  color: ${styleTokens.activeColor};
  padding: 4px 8px;
  border: 1px solid ${styleTokens.activeColor};
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
  padding: 15px 15px 10px;
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

export const ListContainer = styled.div``