import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { routeConfig } from '../config';
import { fetchAppData } from '../../services';
import { SET_APP_DATA } from '../../redux/actionTypes'

const ProtectedRouter = () => {
  const plans = useSelector(state => state.plans);
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { plans, categories } = await fetchAppData();
    dispatch(
      {
        type: SET_APP_DATA,
        payload: {
          plans,
          categories
        }
      }
    );
  }

  React.useEffect(() => {
    getApiData();
  }, []);

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