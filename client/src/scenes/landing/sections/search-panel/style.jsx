import styled from "styled-components";
import { styleTokens } from '../../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 32px;
  background: ${styleTokens.backgroundWhiteColor};
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 6px,
  rgba(0, 0, 0, 0.03) 0px -2px 6px;
  height: 48px;
  margin-bottom: 24px;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: ${styleTokens.backgroundWhiteColor};
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 6px,
  rgba(0, 0, 0, 0.03) 0px -2px 6px;
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