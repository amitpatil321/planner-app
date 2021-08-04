import { INITIATE_FORM_VALIDATION } from "../actionTypes";

export function initiateFormValidation(validationState) {
  return {
    type: INITIATE_FORM_VALIDATION,
    payload: validationState
  };
}
