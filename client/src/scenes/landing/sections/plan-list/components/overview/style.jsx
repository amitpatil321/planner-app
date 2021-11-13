import styled from 'styled-components'
import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 140px;
  border-radius: 8px;
  position: relative;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 20px;
  background: ${styleTokens.backgroundWhiteColor};
  box-shadow: ${styleTokens.boxShadowColor} 0px 2px 6px;
  border: 1px solid ${styleTokens.boxShadowColor};
`
export const Container = styled.div`
  width: 100%;
  height: inherit;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  position: relative;
`
export const Header = styled.div`
  width: 100%;
`
export const Title = styled.div`
  font-size: 16px;
  padding: 14px 0 10px 0;
  font-weight: 600;
  color: ${styleTokens.darkColor};
  font-weight: bold;
`
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${styleTokens.lightDarkColor};
  font-size: 12px;
  > span {
    font-size: 12px;
  }
`
export const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const EmojiContainer = styled.div`
  width: 14px;
  height: 18px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 4px;
`
export const ColorIndicator = styled.div`
  width: 14px;
  height: 12px;
  border-radius: 4px;
  border: 2px solid ${props => props.color};
`;
export const DescriptionSection = styled(SubTitle)`
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const CategoryLabel = styled(SubTitle)`
  padding-left: 8px;
  font-size: 14px;
`;
export const AuthorTimeInfo = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${styleTokens.lightDarkColor};
  font-size: 12px;
`
export const ProgressInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  > * {
    font-size: 14px;
    color: #52a911;
    font-weight: bold;
  }
`;
export const DateTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`