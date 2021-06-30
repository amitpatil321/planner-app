import React from 'react'

import { IconWrapper, AddIcon } from '../../../styles/icon';
import { styleTokens } from '../../../styles/variable';

import {
  Wrapper,
  ButtonContainer,
  MenuContainer,
  AnimationWrapper
} from './style';

const defaultConfig = {
  align: 'horizontal',
  btnSize: 40,
  iconSize: 24,
  btnColor: styleTokens.linkTextColor,
  iconColor: styleTokens.whiteTextColor,
  menuBackgroundColor: styleTokens.linkTextColor,
}

const ActionButton = ({config= defaultConfig, isActive, onClick = () => {}}) => {
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
        config={config}
      >

      </MenuContainer>
    </Wrapper>
  )
}

export default ActionButton;