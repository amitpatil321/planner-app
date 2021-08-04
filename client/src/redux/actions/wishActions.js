import { FETCH_WISHES } from "../actionTypes";

export function fetchWishes(wishes) {
  return {
    type: FETCH_WISHES,
    payload: wishes
  };
}
