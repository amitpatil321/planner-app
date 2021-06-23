import styled from "styled-components";
import { styleTokens } from "../../../styles/variable";

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

export const Divider = styled.div`
  height: 2px;
  width: 95%;
  background: ${styleTokens.borderColor};
  margin-top: 12px;
`

export const DescriptionSection = styled.div`
  font-size: 12px;
  padding: ${props => props.reducePadding ? '0px' : '12px 0'};
  color: ${styleTokens.lightTextColor};
  font-style: italic;
  font-weight: 400;
  text-align: left;
  width: 95%;
  opacity: 0.8;
  line-height: 1.5;
`