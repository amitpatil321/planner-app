import styled from 'styled-components'
export { default as ListIcon } from "@material-ui/icons/SubjectRounded";


export const IconWrapper = styled.i`
  padding-right: ${ props => props.pr ? props.pr : '8px' };
  color: ${ props => props.iconColor ? props.iconColor : '#6b778c' };
  > svg {
    font-size: ${ props => props.iconSize ? props.iconSize : '16px' };
    color: ${ props => props.iconColor ? props.iconColor : '#6b778c' };
  }
`