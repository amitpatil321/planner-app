import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 12px;
  border-radius: 5px;
  color: ${props => props.pStyle.color};
  font-size: 14px;
  background: ${props => props.pStyle.background};
  font-weight: 500;
  margin-top: 18px;
  min-width: 80px;
  border: ${props => props.pStyle.border};
  height: ${props => props.pStyle.height};
  display: flex;
  align-items: center;
  justify-content: center;
`