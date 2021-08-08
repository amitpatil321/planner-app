import React from 'react';

import { Overlay } from './style';

const Modal = ({children}) => {
  return (
    <Overlay>
      {children}
    </Overlay>
  )
}

export default Modal;