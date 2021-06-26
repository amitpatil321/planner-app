import styled from "styled-components";
import { styleTokens } from "./variable";

export { default as ListIcon } from "@material-ui/icons/SubjectRounded";
export { default as FavoriteIcon } from "@material-ui/icons/FavoriteBorderRounded";
export { default as FavoriteMarkedIcon } from "@material-ui/icons/FavoriteRounded";
export { default as CheckListIcon } from "@material-ui/icons/PlaylistAddCheckRounded";
export { default as DateIcon } from "@material-ui/icons/EventAvailable";
export { default as CheckedIcon } from '@material-ui/icons/CheckCircleOutline';
export { default as UncheckedIcon } from '@material-ui/icons/RadioButtonUnchecked';
export { default as DescriptionIcon } from '@material-ui/icons/DescriptionOutlined';
export { default as TagIcon } from '@material-ui/icons/LocalOfferRounded';

export const IconWrapper = styled.span`
  padding-right: ${(props) => (props.pr !== undefined ? `${props.pr}px` : "8px")};
  color: ${(props) =>
    props.iconColor ? props.iconColor : styleTokens.defaultIconColor};
  height: ${(props) => (props.iconSize ? `${props.iconSize}px` : "16px")};
  > svg {
    font-size: ${(props) => (props.iconSize ? `${props.iconSize}px` : "16px")};
    color: ${(props) =>
      props.iconColor ? props.iconColor : styleTokens.defaultIconColor};
    display: flex;
  }
`;
