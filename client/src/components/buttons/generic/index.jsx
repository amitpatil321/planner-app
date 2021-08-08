import React from 'react';

import { styleTokens } from "../../../styles/variable";

import {
  Wrapper
} from './style'

const getStyle = (type) => {
  switch(type){
    case 'primary-active':
      return {
        background: styleTokens.buttonColor,
        color: styleTokens.whiteTextColor,
        border: `1px solid ${styleTokens.buttonColor}`
      }
    case 'secondary-active':
      return {
        background: '#4476ff24',
        color: styleTokens.linkTextColor,
        border: `1px solid ${styleTokens.linkTextColor}`,
        height: '36px'
      }
    case 'secondary-inactive':
      return {
        background: styleTokens.backgroundColor,
        color: styleTokens.darkTextColor,
        border: `1px solid ${styleTokens.darkTextColor}`,
        height: '36px'
      }
    default:
      return {
        background: styleTokens.buttonColor,
        color: styleTokens.whiteTextColor,
        border: `1px solid ${styleTokens.buttonColor}`
      }
  }
}

const Button = ({
  onClick = () => {},
  children,
  type='primary-active'
}) => {
  const style = getStyle(type);
  return(
    <Wrapper
      onClick={onClick}
      type={type}
      pStyle={style}
    >
      {children}
    </Wrapper>
  )
}

export default Button;