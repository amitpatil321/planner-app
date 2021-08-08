import { INITIATE_FORM_VALIDATION } from "../actionTypes";

const formsReducer = (state = {
  isFormValidationInitiated: false,
}, action) => {
  switch (action.type) {
    case INITIATE_FORM_VALIDATION:
      return { ...state, isFormValidationInitiated: action.payload };
    default:
      return state;
  }
};

export default formsReducer;
