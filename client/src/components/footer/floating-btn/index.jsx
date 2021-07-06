import React from 'react';
import { withRouter } from 'react-router';

import ActionBtn from '../../buttons/action';
import { actionBtnConfig } from '../../../configs/footer';
import useOutsideClick from '../../../hooks/useOutsideClick';

import {
  Wrapper,
  Container
} from './style';

const FloatingBtn = ({history}) => {
  const [isActive, toggleActive] = React.useState(null);
  const {ref, isOutside} = useOutsideClick();

  const handleClick = () => {
    toggleActive(!isActive);
  }

  const onNavigation = (itemDetails) => {
    const { path } = itemDetails;
    history.push(path);
    handleClick();
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
        onClick={handleClick}
        onMenuItemClick={onNavigation}
      />
      </Container>
    </Wrapper>
  )
}

export default withRouter(FloatingBtn);