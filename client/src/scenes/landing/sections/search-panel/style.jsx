import styled from "styled-components";
import { styleTokens } from '../../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 32px;
  background: ${styleTokens.backgroundWhiteColor};
  box-shadow: #EFEEF0 0px 2px 6px;
  border: 1px solid #EFEEF0;
  height: 48px;
  margin-bottom: 24px;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: ${styleTokens.backgroundWhiteColor};
`

export const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const SearchIconWrapper = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 32px;
  border-top-right-radius: 32px;
  padding-right: 22px;
`