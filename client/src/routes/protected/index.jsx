import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { routeConfig } from '../config'
import { updateWishList } from '../../redux/actions/wishlistActions';
import { getGroupedWishlist } from '../../helper';
import Footer from '../../components/footer';

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
      <>
        <Switch>
          {Object.keys(routeConfig.protected).map((key, idx) => (
            <Route
              exact
              path={routeConfig.protected[key].path}
              component={routeConfig.protected[key].component}
              key={idx}
            />
          ))}
        </Switch>
        <Footer />
      </>
    );
  } else {
    // use loader here
    return null
  }
}

export default ProtectedRouter;