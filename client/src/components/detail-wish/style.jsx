import styled from 'styled-components';
import { styleTokens } from "../../styles/variable";

export const Wrapper = styled.div`
  width: 100%;
`
export const TitleSection = styled.div`
  position: relative;
`

export const TitlePlaceholder = styled.h2`
  color: #54595e;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 0;
  display: block;
  position: absolute;
  opacity: 0.8;

`

export const TitleInput = styled.h2`
  color: #54595e;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 0;
  display: block;
  width: inherit;
  height: inherit;
  overflow-wrap: break-word;
  z-index: 1;
  ${props => props.isEditMode ?
  `-webkit-user-modify: read-write-plaintext-only;` : ''};

`

export const DescriptionSection = styled.div`
  position: relative;
  margin-top: 24px;
  min-height: 24px;
`

export const DescriptionPlaceholder = styled.div`
  font-size: 12px;
  color: ${styleTokens.lightTextColor};
  font-style: italic;
  font-weight: 400;
  text-align: left;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
`

export const DescriptionInput = styled.div`
  font-size: 12px;
  color: ${styleTokens.lightTextColor};
  font-style: italic;
  font-weight: 400;
  text-align: left;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  width: inherit;
  height: inherit;
  overflow-wrap: break-word;
  z-index: 1;
  ${props => props.isEditMode ?
  `-webkit-user-modify: read-write-plaintext-only;` : ''};
`

export const DummyExtraSpace = styled.div`
  width: 100%;
  height: 52px;
`