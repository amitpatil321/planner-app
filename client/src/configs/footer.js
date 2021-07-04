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
  btnSize: 45,
  iconSize: 24,
  btnColor: styleTokens.footerActionBtnColor,
  iconColor: styleTokens.whiteTextColor,
  menu: {
    backgroundColor: styleTokens.footerActionBtnColor,
    style: {
      btnSize: 40,
      iconSize: 20,
      btnColor: styleTokens.buttonColor,
      iconColor: styleTokens.whiteTextColor,
      pr: 0,
      pl: 4
    },
    items: [
      {
        name: 'Add Wishlist',
        icon: AddListIcon,
        path: '/add/wishes'
      },
      {
        name: 'Add Wish',
        icon: AddSingleIcon,
        path: '/add/wish'
      }
    ]
  }
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