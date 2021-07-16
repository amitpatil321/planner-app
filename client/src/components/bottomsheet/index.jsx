import React from 'react'
import useOutsideClick from '../../hooks/useOutsideClick';

import {
  Wrapper,
  Container,
  Header,
  Overlay
} from './style'

const BottomSheet = ({
  title,
  children,
  showOverlay=false,
  onClose = () => {}
}) => {
  const {ref, isOutside} = useOutsideClick();

  React.useEffect(() => {
    if(isOutside){
      onClose();
    }
  }, [isOutside])


  const getSheet = () => {
    return (
      <Wrapper
        showOverlay
        ref={ref}
      >
      {title ?
        (
          <Header>
            {title}
          </Header>
        ) : null
      }
      <Container>
        {children}
      </Container>
    </Wrapper>
    )
  }

  return (
    <>
      {showOverlay ?
        (
          <Overlay>
            {getSheet()}
          </Overlay>
        ) : (
          <>
            {getSheet()}
          </>
        )
      }
    </>
  )
}

export default BottomSheet;