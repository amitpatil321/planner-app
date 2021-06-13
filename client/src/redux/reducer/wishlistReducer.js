import { UPDATE_WISHLIST } from '../actionTypes'

const wishlistReducer = (state={}, action) => {
  switch(action.type) {
    case UPDATE_WISHLIST:
      return {...state, ...action.payload }
    default:
      return state;
  }
}

export default wishlistReducer;