import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 88%;
  height: 54%;
  margin: auto;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid rgb(0 0 0 / 8%);
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

`
export const ImageContainer = styled.div`
  background-image: url('/assets/images/book/book.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 30%;
  height: 100%;
  border-radius: 16px;
  margin-right: 8%;
`

export const TextContainer = styled.div`
`

export const Title = styled.p`
  font-weight: 500;
  color: #535B62;
  font-size: 16px;
  line-height: 1.8;
`

export const SubTitle = styled.p`
  color: #8a8f92;
  font-size: 12px;
`

export const NumberTxt = styled.span`
  width: 12px;
  height: 12px;
  padding-left: 8px;
  font-size: 12px;
`