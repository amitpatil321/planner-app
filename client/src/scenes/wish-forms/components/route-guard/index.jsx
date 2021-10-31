import React from 'react';
import { Prompt } from 'react-router';

import { isValidRoute } from '../../../../routes/config';
import { checkIfDirty } from '../../utils';

import Modal from '../modal';
import Button from '../../../../components/lib/buttons/generic';

import {
  Container,
  Message,
  ActionPanel
} from './style';

const RouteGuard = ({
  navigateToRoute = () => {},
  formData = {},
  isFormValidationInitiated = false,
}) => {
  const isFormDirty = checkIfDirty(formData);
  const when = isFormDirty || isFormValidationInitiated;
  const [showModal, toggleModalStatus] = React.useState(false);
  const [currentLocation, updateLocation] = React.useState(null);
  const [confirmedNavigation, updateRedirectionStatus] = React.useState(false);

  const handleBlockedNavigation = (location) => {
    if (!confirmedNavigation){
      toggleModalStatus(true);
      updateLocation(location);
      return false;
    }
    return true;
  }

  const handleConfirmedNavigation = () => {
    updateRedirectionStatus(true);
    toggleModalStatus(false);
  }

  const getPopup = () => {
    if(isFormDirty && !isFormValidationInitiated) {
      return (
        <Container>
          <Message>
            <p>🤔</p>
            <p>
              You really want to discard your precious wish?
            </p>
          </Message>
          <ActionPanel>
            <Button
              onClick={()=> {
                handleConfirmedNavigation()
              }}
              type='secondary-active'
            >
              Yes
            </Button>
            <Button
              onClick={()=>{
                toggleModalStatus(false)
              }}
              type='secondary-inactive'
            >
              No
            </Button>
          </ActionPanel>
        </Container>
      )
    } else if(isFormDirty && isFormValidationInitiated) {
      return (
        <Container>
          <Message>
            <p>
              🤩
            </p>
            <p>
              Please wait while we save your precious wish
            </p>
          </Message>
          <ActionPanel>
            <Button
              onClick={()=>{
                toggleModalStatus(false)
              }}
              type='secondary-active'
            >
              Cool
            </Button>
          </ActionPanel>
        </Container>
      )
    } else {
      return null;
    }
  }

  React.useEffect(() => {
    if(confirmedNavigation) {
      const path = currentLocation.pathname;
      if (isValidRoute(path)) {
        navigateToRoute(path);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedNavigation])

  return (
    <>
      <Prompt
        when={when}
        message={(location) => handleBlockedNavigation(location)}
      />
      {
        showModal && (
          <Modal>
            {getPopup()}
          </Modal>
        )
      }
    </>
  )
}

export default RouteGuard;