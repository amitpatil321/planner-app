import styled from "styled-components";
import { styleTokens } from "../../styles/variable";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  height: 32px;
`
export const Container = styled.div`
  margin-top: 24px;
  padding: 0 4px;
`
export const Row = styled.div`
  padding-bottom: 12px;
  display: flex;
  align-items: center;
`
export const Image = styled.div`
  background-image: ${ props => `url(${props.asset})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${styleTokens.footerActionBtnColor};
  margin-right: 16px;
`

export const Detail = styled.div`
  font-size: 14px;
  color: ${styleTokens.darkTextColor};
`