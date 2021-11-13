import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';

import ProfileImage from '../lib/profile-image';

import {
  Wrapper,
  AapNameContainer,
  ProfileShortcut,
  MenuIcon,
} from './style';

//TODO: Create ProfileShortcut component

const Header = () => {
  return(
    <Wrapper>
      <MenuIcon>
        <HiMenuAlt1 />
      </MenuIcon>
      <AapNameContainer>
        planner
      </AapNameContainer>
      <ProfileShortcut>
        <ProfileImage />
      </ProfileShortcut>
    </Wrapper>
  )
}

export default Header;