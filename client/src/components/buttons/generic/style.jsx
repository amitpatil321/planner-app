import styled from "styled-components";
import { styleTokens } from "../../../styles/variable";

export const Wrapper = styled.button`
  padding: 12px;
  border-radius: 8px;
  color: ${styleTokens.whiteTextColor};
  font-size: 14px;
  background: ${styleTokens.buttonColor};
  font-weight: 500;
  margin-top: 18px;
`