import styled from "styled-components";
import { styleTokens } from "../../../styles/variable";
import { ellipsis } from "../../../styles/reusableStyle";

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
  width: ${props => props.isFullWidth ? '100%' : '90%'};
  border: 2px solid ${styleTokens.borderColor};
  border-radius: 12px;
  font-weight: 500;
`

export const TitleText = styled.div`
  width: ${props => props.isFullWidth ? '100%' : '95%'};
  font-size: 13px;
  ${ellipsis}
`

export const Divider = styled.div`
  height: 2px;
  width: ${props => props.isFullWidth ? '100%' : '95%'};
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
  width: inherit;
  min-height: 20px;
  max-height: 100px;
  opacity: 0.8;
  line-height: 1.5;
  overflow: hidden;
  position: relative;
   display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`
