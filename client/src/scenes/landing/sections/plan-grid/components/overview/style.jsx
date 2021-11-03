import styled from 'styled-components'
import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  position: relative;
  border: 1px solid ${styleTokens.borderColor};
  margin-bottom: 12px;
  background: ${styleTokens.backgroundWhiteColor};
  position: relative;
  box-shadow: ${styleTokens.boxShadowColor} 0px 2px 6px;
  border: 1px solid ${styleTokens.boxShadowColor};
  cursor: pointer;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  position: relative;
`
export const Header = styled.div`
  width: 100%;
`
export const Title = styled.p`
  font-size: 14px;
  padding: 10px 0;
  font-weight: 400;
  color: ${styleTokens.darkColor};
  font-weight: 500;
`
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${styleTokens.lightDarkColor};
`
export const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
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
`