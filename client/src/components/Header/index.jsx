import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri'

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
        <RiAccountCircleLine />
      </ProfileShortcut>
    </Wrapper>
  )
}

export default Header;