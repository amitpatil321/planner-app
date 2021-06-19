import styled from 'styled-components'
import { styleTokens } from '../../styles/variable'

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  border-radius: 28px 28px 0 0;
  box-shadow: rgba(67, 71, 85, 0.20) 0px 0px 0.25em,
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 0 30px;
  padding-top: 34px;
  overflow: hidden;
`

export const Header = styled.h1`
  font-size: 18px;
  color: ${styleTokens.darkTextColor};
  margin-bottom: 24px;
  font-weight: 600;
`

export const Container = styled.div`
  width: 100%;
  height:  inherit;
  overflow-y: scroll;
`