import styled from 'styled-components'
import { styleTokens } from '../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  background: ${styleTokens.backgroundColor};
`

export const Heading = styled.h1`
  font-size: 32px;
  color: ${styleTokens.darkTextColor};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 62px; /* For footer */
`