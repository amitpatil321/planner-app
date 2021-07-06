import styled from 'styled-components';
import{
  Wrapper,
  Header,
  Row,
  FirstSlot,
  SecondSlot,
  AuthorDetails,
  CategoryBox
} from '../components/wishdetails/style';

import { styleTokens } from '../../../styles/variable';

export const FWrapper = styled(Wrapper)`
`
export const FHeader = styled(Header)`
  width: inherit;
  height: inherit;
  z-index:1;
`
export const FRow = styled(Row)`
  position: relative;
`
export const FFirstSlot = styled(FirstSlot)``
export const FSecondSlot = styled(SecondSlot)``
export const FAuthorDetails = styled(AuthorDetails)``
export const FCategoryBox = styled(CategoryBox)`
  cursor: pointer;
`

export const FHeaderPlaceholder = styled(Header)`
  color: ${styleTokens.placeholderColor};
  position: absolute;
`