import styled from 'styled-components'
import { styleTokens } from '../../styles/variable'

const innerHeight = window.innerHeight;
const cutOfHeight = window.innerHeight * .2;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(${innerHeight}px - 200px - 56px - 32px);
  max-height: calc(${innerHeight}px - ${cutOfHeight}px);
  border-radius: 28px 28px 0 0;
  box-shadow: rgba(67, 71, 85, 0.20) 0px 0px 0.25em,
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 0 30px;
  padding-top: 34px;
  overflow: hidden;
  background: ${styleTokens.backgroundColor};
  position: ${props => props.showOverlay ? 'absolute' : 'relative'};
  bottom: 0;
`

export const Header = styled.h1`
  font-size: 18px;
  color: ${styleTokens.darkTextColor};
  margin-bottom: 24px;
  font-weight: 600;
`

export const Container = styled.div`
  width: 100%;
  height:  calc(100% - 60px);
  overflow-y: scroll;
`