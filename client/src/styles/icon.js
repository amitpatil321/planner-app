import styled from 'styled-components'
export { default as ListIcon } from "@material-ui/icons/SubjectRounded";
export { default as FavoriteIcon } from '@material-ui/icons/FavoriteBorderRounded';
export { default as FavoriteMarkedIcon } from '@material-ui/icons/FavoriteRounded';
export { default as CheckListIcon }  from '@material-ui/icons/PlaylistAddCheckRounded';

export const IconWrapper = styled.span`
  padding-right: ${ props => props.pr ? props.pr : '8px' };
  color: ${ props => props.iconColor ? props.iconColor : '#6b778c' };
  height: ${ props => props.iconSize ? props.iconSize : '16px' };
  > svg {
    font-size: ${ props => props.iconSize ? props.iconSize : '16px' };
    color: ${ props => props.iconColor ? props.iconColor : '#6b778c' };
  }
`