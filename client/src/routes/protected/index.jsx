import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { routeConfig } from '../config'
import { fetchWishes } from '../../redux/actions/wishActions';
import { getGroupedWishes } from '../../helper';
import Footer from '../../components/footer';

// mock data
import wishlists from '../../__mocks__/data.json';

const ProtectedRouter = () => {
  const wishes = useSelector(state => state.wishes)
  const dispatch = useDispatch();

  React.useEffect(() => {
    // mocking api call
    const groupedWishes = getGroupedWishes(wishlists);
    dispatch(fetchWishes(
      {
        grouped: groupedWishes,
        all: wishlists,
      }
    ));
  }, [dispatch]);

  if(Object.keys(wishes).length) {
    return (
      <>
        <Switch>
          {Object.keys(routeConfig.protectedRoutes).map((key, idx) => (
            <Route
              exact
              path={routeConfig.protectedRoutes[key].path}
              component={routeConfig.protectedRoutes[key].component}
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