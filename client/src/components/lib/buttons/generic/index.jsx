import React from 'react';

import { styleTokens } from "../../../../styles/variable";

import {
  Wrapper
} from './style'

const getStyle = (type, size) => {
  const btnStyle = {};
  switch(type){
    case 'primary-active':
      btnStyle.background= styleTokens.buttonColor;
      btnStyle.color= styleTokens.whiteColor;
      btnStyle.border= `1px solid ${styleTokens.buttonColor}`;
      break;
    case 'secondary-active':
      btnStyle.background= styleTokens.lightLinkBackground;
      btnStyle.color= styleTokens.linkColor;
      btnStyle.border= `1px solid ${styleTokens.linkColor}`;
      break;
    case 'secondary-inactive':
      btnStyle.background= styleTokens.backgroundWhiteColor;
      btnStyle.color= styleTokens.darkColor;
      btnStyle.border= `1px solid ${styleTokens.darkColor}`;
      break;
    default:
      btnStyle.background= styleTokens.buttonColor;
      btnStyle.color= styleTokens.whiteColor;
      btnStyle.border= `1px solid ${styleTokens.buttonColor}`;
      break;
  }
  switch(size) {
    case 'sm':
    btnStyle.width = '48px';
    btnStyle.height = '20px';
    btnStyle.fontSize = '10px';
    btnStyle.padding = '4px';
    btnStyle.borderRadius = '4px'
    break;
    case 'medium':
    btnStyle.width = '24px';
    btnStyle.height = '24px';
    btnStyle.fontSize = '14px';
    btnStyle.padding = '4px';
    btnStyle.borderRadius = '2px'
    break;
    case 'large':
    btnStyle.width = '32px';
    btnStyle.height = '32px';
    btnStyle.fontSize = '16px';
    btnStyle.padding = '4px';
    btnStyle.borderRadius = '2px'
    break;
    default:
      btnStyle.width = '24px';
      btnStyle.height = '24px';
      btnStyle.fontSize = '14px';
      btnStyle.borderRadius = '2px'
  }
  return btnStyle;
}

const Button = ({
  onClick = () => {},
  children,
  type='primary-active',
  size,
}) => {
  const style = getStyle(type, size);
  return(
    <Wrapper
      onClick={onClick}
      type={type}
      btnStyle={style}
    >
      {children}
    </Wrapper>
  )
}

export default Button;