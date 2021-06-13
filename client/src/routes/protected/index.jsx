import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Groups from '../../pages/Groups';
import Landing from '../../pages/Landing';

import { updateWishList } from '../../redux/actions/wishlistActions';
import { getGroupedWishlist } from '../../helper/wishlist';

import wishlists from '../../__mocks__/data.json';

const ProtectedRouter = () => {
  const dispatch = useDispatch();
    React.useEffect(() => {
    // mocking api call
    const groupedWishlist = getGroupedWishlist(wishlists);
    dispatch(updateWishList(groupedWishlist));
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/group" component={Groups} />
    </Switch>
  );
}

export default ProtectedRouter;