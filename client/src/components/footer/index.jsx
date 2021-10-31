import React from 'react';
import { withRouter } from 'react-router';

import { navLinks, getActiveLink } from '../../configs/footer';
import { IconWrapper } from '../../styles/icon';
import { styleTokens } from '../../styles/variable';
import FloatingBtn from './floating-btn';

import {
  Wrapper,
  NavContainer,
  NavText
} from './style';

const Footer = ({history, location}) => {
  const initialActiveLink = getActiveLink(location.pathname);
  const [activeLink, toggleActiveLink] = React.useState(initialActiveLink);

  React.useEffect(()=>{
    const currentActiveLink = getActiveLink(location.pathname);
    toggleActiveLink(currentActiveLink);
  }, [location]);

  const handleClick = ({path}) => {
    history.push(path);
  }

  const getNavLink = (navLink) => {
    const Icon = navLink.icon;
    const { name } = navLink;
    return(
    <NavContainer
      onClick={() => handleClick(navLink)}
    >
      <IconWrapper
        iconSize={20}
        pr={0}
        iconColor={
          name === activeLink ?
          styleTokens.linkColor : styleTokens.lightDarkColor
        }
      >
        <Icon />
      </IconWrapper>
      <NavText
        isActive={name === activeLink}
      >
        {name}
      </NavText>
    </NavContainer>
    )
  }

  return (
    <Wrapper>
      {
        Object.keys(navLinks).map((key, idx) => {
          const { name } = navLinks[key];
          if(name === navLinks.actionButton.name) {
            return(
              <React.Fragment key ={idx}>
                <FloatingBtn />
              </React.Fragment>
            )
          } else {
            return (
            <React.Fragment key ={idx}>
              {getNavLink(navLinks[key])}
            </React.Fragment>
            )
          }
        })
      }
    </Wrapper>
  )
}

export default withRouter(Footer);