import React from 'react'

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
}) => {

  const getSheet = () => {
    return (
      <Wrapper
        showOverlay
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