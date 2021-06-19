import { UPDATE_WISHLIST } from '../actionTypes'

export function updateWishList(wishLists){
  return {
    type: UPDATE_WISHLIST,
    payload: wishLists
  }
}