import { UPDATE_WISHES } from '../actionTypes'

export function updateWishes(wishes) {
  return {
    type: UPDATE_WISHES,
    payload: wishes
  }
}