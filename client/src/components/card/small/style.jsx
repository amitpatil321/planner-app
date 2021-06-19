import styled from 'styled-components'
import { styleTokens } from '../../../styles/variable';

export const Wrapper = styled.div`
  width: 48%;
  height: 164px;
  border-radius: 12px;
  position: relative;
  border: 1px solid ${styleTokens.borderColor};
  margin-bottom: 4%;
  &:nth-child(odd) {
    margin-right: 4%;
  }
  background: ${styleTokens.backgroundColor};
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 10px;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 16px;
  position: relative;
`
export const Header = styled.div`
  width: 86%;
`
export const Title = styled.p`
  font-size: 14px;
  padding: 10px 0;
  font-weight: 400;
  color: ${styleTokens.darkTextColor};
  font-weight: 500;
`

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NumberText = styled.span`
  font-size: 12px;
  color: ${styleTokens.lightTextColor};
`

export const ImageContainer =  styled(Container)`
  position: absolute;
  background-image: ${ props => `url(${props.asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  bottom: 8px;
  right: 8px;
  width: 60%;
  height: calc(70% - 2px);
`