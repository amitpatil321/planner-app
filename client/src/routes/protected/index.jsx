import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Groups from '../../pages/Groups';
import Landing from '../../pages/Landing';

import { updateWishList } from '../../redux/actions/wishlistActions';
import { getGroupedWishlist } from '../../helper';

import wishlists from '../../__mocks__/data.json';

const ProtectedRouter = () => {
  const wishlist = useSelector(state => state.wishlist)
  const dispatch = useDispatch();

  React.useEffect(() => {
    // mocking api call
    const groupedWishlist = getGroupedWishlist(wishlists);
    dispatch(updateWishList(groupedWishlist));
  }, [dispatch]);

  if(Object.keys(wishlist).length) {
    return (
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/group" component={Groups} />
      </Switch>
    );
  } else {
    // use loader here
    return null
  }
}

export default ProtectedRouter;