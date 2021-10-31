import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { routeConfig } from '../config';
import { fetchPlans } from '../../redux/actions/planActions';
import { getGroupedPlans } from '../../services';

// mock data
import mockPlans from '../../__mocks__/data.json';

const ProtectedRouter = () => {
  const plans = useSelector(state => state.plans)
  const dispatch = useDispatch();

  React.useEffect(() => {
    // mocking api call
    const groupedPlans = getGroupedPlans(mockPlans);
    console.log(groupedPlans);
    dispatch(fetchPlans(
      {
        grouped: groupedPlans,
        all: plans,
      }
    ));
  }, [dispatch]);

  return (
    <>
      {
        Object.keys(plans)?.length ? (
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
        ) : (
          <>
            loading
          </>
        )
      }
    </>
  );
};

export default ProtectedRouter;