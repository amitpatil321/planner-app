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
export { default as TagIcon } from '@material-ui/icons/CategoryRounded';
export { default as SettingsIcon } from '@material-ui/icons/Settings';
export { default as AccountIcon } from '@material-ui/icons/AccountCircleRounded';
export { default as HomeIcon } from '@material-ui/icons/HomeRounded';
export { default as SearchIcon} from '@material-ui/icons/SearchRounded';
export { default as AddIcon } from '@material-ui/icons/AddRounded';
export { default as AddListIcon } from '@material-ui/icons/PlaylistAdd';
export { default as AddSingleIcon } from '@material-ui/icons/PostAdd';
export { default as EditIcon } from '@material-ui/icons/EditRounded';
export {default as SaveIcon } from '@material-ui/icons/SaveRounded';

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
