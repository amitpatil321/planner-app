import {
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  AccountIcon,
  AddListIcon,
  AddSingleIcon,
} from '../styles/icon';
import { styleTokens } from '../styles/variable';

export const navLinks = {
  home: {
    path: '/landing',
    icon: HomeIcon,
    name: 'Home',
  },
  search: {
    path: '/search',
    icon: SearchIcon,
    name: 'Search',
  },
  actionButton: {
    path: null,
    icon: null,
    name: 'action-button',
  },
  setting: {
    path: '/setting',
    icon: SettingsIcon,
    name: 'Settings',
  },
  profile: {
    path: '/account',
    icon: AccountIcon,
    name: 'Profile'
  }
}

export const actionBtnConfig = {
  align: 'horizontal',
  btnSize: 40,
  iconSize: 24,
  btnColor: styleTokens.linkTextColor,
  iconColor: styleTokens.whiteTextColor,
  menuBackgroundColor: styleTokens.linkTextColor,
  menu: [
    {
      name: 'Add Wishlist',
      icon: AddListIcon
    },
    {
      name: 'Add Wish',
      icon: AddSingleIcon
    }
  ]
}

export function getActiveLink(path){
  let initialActiveLink = null
  Object.keys(navLinks).forEach((key) => {
    if(path === navLinks[key].path) {
      initialActiveLink = navLinks[key].name;
    }
  });
  return initialActiveLink;
}