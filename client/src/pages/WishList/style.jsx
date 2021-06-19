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

export const FirstFold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
export const SecondFold = styled(FirstFold)`
  margin-top: 46px;
`

export const CategoryBox = styled.div`
  position: relative;
  font-size: 12px;
  padding: 0px 12px 0 14px;
  border-radius: 12px 4px 4px 12px;
  color: ${styleTokens.darkTextColor};
  border: 1px solid rgb(0 0 0 /15%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: 400;
  background-color: #e7f1ff59;
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

export const DateTimeText = styled.div`
  color: ${styleTokens.lightIconColor};
  font-size: 16px;
  padding: 6px 0 12px 0;
  & > span {
    color: ${styleTokens.darkTextColor};
    padding-left: 4px;
    font-size: 16px;
    font-weight: 500;
  }
`

export const ListCount = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.isCompleted ?
  `
  background-color: ${styleTokens.activeColor};
  color: ${styleTokens.whiteTextColor};
  padding: 4px 8px;
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