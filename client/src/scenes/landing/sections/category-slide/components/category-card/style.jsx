import styled from 'styled-components'
import { styleTokens } from '../../../../../../styles/variable';

export const Wrapper = styled.div`
  flex-basis: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  min-height: 40px;
  border-radius: 8px;
  position: relative;
  background: ${styleTokens.backgroundWhiteColor};
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 6px,
  rgba(0, 0, 0, 0.03) 0px -2px 6px;
  cursor: pointer;
  margin-right: 24px;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 24px 8px 16px;
  position: relative;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TitleContainer = styled.div`
  width: 100%;
  min-height: 18px;
  position: relative;
  padding-left: 8px;
`

export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${styleTokens.darkColor};
  ${props => props.isEditMode ?
  `-webkit-user-modify: read-write-plaintext-only;` : ''};
  z-index: 1;
  position: absolute;
  overflow: auto;
`

export const TitlePlaceholder = styled(Title)`
  width: 100%;
  height: 100%;
  color: ${styleTokens.lightDarkColor};
  font-weight: normal;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 4px;
  padding: 8px 0 12px 4px;
  font-size: 12px;
  color: ${styleTokens.lightDarkColor};
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

export const OverFlowMenuIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${styleTokens.lightDarkColor};
`
export const PaddingBox = styled.div`
  width: 20px;
`