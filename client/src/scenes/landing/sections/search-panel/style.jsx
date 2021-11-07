import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #F5F5F5;
  border: 1px solid #F5F5F5;
  height: 48px;
  margin-bottom: 24px;
  padding: 4px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: inherit;
`;
export const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const SearchIconWrapper = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding-right: 22px;
  background: inherit;
`