import React from 'react';
import ActionBtn from '../../buttons/action';
import { actionBtnConfig } from '../../../configs/footer';
import useOutsideClick from '../../../hooks/useOutsideClick';

import {
  Wrapper,
  Container
} from './style';

const FloatingBtn = () => {
  const [isActive, toggleActive] = React.useState(null);
  const {ref, isOutside} = useOutsideClick();

  const handleClick = () => {
    toggleActive(!isActive);
  }

  const onNavigation = (itemDetails) => {

  }

  React.useEffect(()=>{
    if(isOutside && isActive){
      toggleActive(false);
    }
  },[isOutside]);

  return (
    <Wrapper>
      <Container
        isActive={isActive}
        ref={ref}
      >
      <ActionBtn
        config={actionBtnConfig}
        isActive={isActive}
        onClick={() => handleClick()}
        onMenuItemClick={()=>onNavigation()}
      />
      </Container>
    </Wrapper>
  )
}

export default FloatingBtn;