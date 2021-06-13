import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  margin: auto;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid rgb(0 0 0 / 8%);
  border-radius: 16px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

`
export const ImageContainer = styled.div`
  background-image: ${props => `url(${props.asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 60%;
  height: 100%;
  margin-left: 40%;
`

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.div`
  display: flex;
  padding-bottom: 4px;
`
export const TitleTxt = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #535B62;
`

export const SubTitle = styled.div`
  font-weight: 400;
  color: #535B62;
  opacity: .8;
  font-size: 12px;
  display: flex;
`

export const NumberTxt = styled.div`
  padding-left: 2px;
  font-size: 12px;
`
