import React from 'react'

import { IconWrapper, AddIcon } from '../../../styles/icon';
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  ButtonContainer,
  MenuContainer,
  AnimationWrapper,
  MenuItem
} from './style';

const defaultConfig = {
  align: 'horizontal',
  btnSize: 40,
  iconSize: 24,
  btnColor: styleTokens.linkTextColor,
  iconColor: styleTokens.whiteTextColor,
  menu: {
  backgroundColor: styleTokens.footerActionBtnColor,
  items: []
  }
}

const ActionButton = ({config= defaultConfig, isActive, onClick = () => {}}) => {
  const menuConfig = config.menu;
  return(
    <Wrapper
      config={config}
      isActive={isActive}
    >
      <ButtonContainer
        onClick={onClick}
        config={config}
        isActive={isActive}
      >
        <AnimationWrapper
          size={defaultConfig.iconSize}
          isActive={isActive}
        >
          <IconWrapper
            pr={0}
            iconSize={defaultConfig.iconSize}
            iconColor={defaultConfig.iconColor}
            >
            <AddIcon />
          </IconWrapper>
        </AnimationWrapper>
      </ButtonContainer>
      <MenuContainer
        config={menuConfig}
      >
        {
          menuConfig.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <MenuItem
                key={index}
                config={menuConfig.style}
                isActive={isActive}
              >
                <IconWrapper
                  pr={0}
                  iconSize={menuConfig.style.iconSize}
                  iconColor={menuConfig.style.iconColor}
                >
                  <Icon />
                </IconWrapper>
              </MenuItem>
            )
          })
        }
      </MenuContainer>
    </Wrapper>
  )
}

export default ActionButton;