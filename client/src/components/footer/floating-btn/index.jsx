import React from 'react';
import ActionBtn from '../../buttons/action';
import { actionBtnConfig } from '../../../configs/footer';

import {
  Wrapper,
  Container
} from './style';

const FloatingBtn = () => {
  const [isActive, toggleActive] = React.useState(null);

  const handleClick = () => {
    toggleActive(!isActive);
  }

  return (
    <Wrapper>
      <Container
        isActive={isActive}
      >
      <ActionBtn
        config={actionBtnConfig}
        isActive={isActive}
        onClick={() => handleClick()}
      />
      </Container>
    </Wrapper>
  )
}

export default FloatingBtn;