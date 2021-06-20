import styled from 'styled-components'
import { styleTokens } from './variable';

export { default as ListIcon } from "@material-ui/icons/SubjectRounded";
export { default as FavoriteIcon } from '@material-ui/icons/FavoriteBorderRounded';
export { default as FavoriteMarkedIcon } from '@material-ui/icons/FavoriteRounded';
export { default as CheckListIcon }  from '@material-ui/icons/PlaylistAddCheckRounded';
export {default as DateIcon } from '@material-ui/icons/EventAvailable';

export const IconWrapper = styled.span`
  padding-right: ${ props => props.pr ? `${props.pr}px` : '8px' };
  color: ${ props => props.iconColor ? props.iconColor : styleTokens.defaultTokenColor };
  height: ${ props => props.iconSize ? `${props.iconSize}px` : '16px' };
  > svg {
    font-size: ${ props => props.iconSize ? `${props.iconSize}px` : '16px' };
    color: ${ props => props.iconColor ? props.iconColor : styleTokens.defaultTokenColor };
    display: flex;
  }
`