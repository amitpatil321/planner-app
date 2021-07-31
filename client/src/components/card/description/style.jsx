import styled from "styled-components";
import { styleTokens } from "../../../styles/variable";
// import { ellipsis } from "../../../styles/reusableStyle";

export const Wrapper = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 0px;
  position: relative;
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
  min-height: 28px;
  z-index: 1;
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
  position: relative;
`
export const DescriptionInput = styled(DescriptionSection)`
  -webkit-user-modify: read-write-plaintext-only;
`

export const DescriptionPlaceHolder = styled(Container)`
  position: absolute;
  font-size: 12px;
  color: ${styleTokens.lightTextColor};
  font-style: italic;
  font-weight: 400;
  text-align: left;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  border: none;
`