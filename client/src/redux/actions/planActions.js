import { FETCH_PLANS } from "../actionTypes";

export function fetchPlans(plans) {
  return {
    type: FETCH_PLANS,
    payload: plans
  };
}
