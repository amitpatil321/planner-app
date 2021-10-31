import styled from "styled-components";

export const Wrapper = styled.button`
  padding: ${props => props.btnStyle.padding};
  border-radius: ${props => props.btnStyle.borderRadius};
  color: ${props => props.btnStyle.color};
  font-size: ${props => props.btnStyle.fontSize};
  background: ${props => props.btnStyle.background};
  font-weight: 500;
  border: ${props => props.btnStyle.border};
  width: ${props => props.btnStyle.width};
  height: ${props => props.btnStyle.height};
  display: flex;
  align-items: center;
  justify-content: center;
`