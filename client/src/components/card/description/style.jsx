import styled from "styled-components";
import { styleTokens } from "../../../styles/variable";
// import { ellipsis } from "../../../styles/reusableStyle";

export const Wrapper = styled.div`
  font-size: 14px;
  color: ${styleTokens.darkTextColor};
  width:100%;
  display: flex;
  padding: 12px 4px;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  font-size: 14px;
  color: ${styleTokens.darkTextColor};
  width: 100%;
  border: 2px solid ${styleTokens.borderColor};
  border-radius: 12px;
  font-weight: 500;
`

export const DescriptionSection = styled.div`
  font-size: 12px;
  color: ${styleTokens.lightTextColor};
  font-style: italic;
  font-weight: 400;
  text-align: left;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`
