import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 48%;
  height: 164px;
  border-radius: 12px;
  position: relative;
  border: 1px solid rgb(0 0 0 / 8%);
  margin-bottom: 4%;
  &:nth-child(odd) {
    margin-right: 4%;
  }
  background: #ffff;
  position: relative;
  box-shadow: rgb(0 0 0 / 12%) 0px 3px 10px 0px;
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
  width: 84%;
`
export const Text = styled.p`
  font-size: 14px;
  padding: 10px 0 14px 0;
  font-weight: 400;
  color: #535B62;
  font-weight: 500;
`

export const SubText = styled.div`
  font-size: 12px;
  width: 24px;
  height: 24px;
  background-color: #151e28;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
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