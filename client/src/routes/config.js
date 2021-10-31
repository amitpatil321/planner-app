import Landing from '../pages/Landing';
import Profile from '../pages/Profile';
import Settings from '../pages/Setting';

export const routeConfig = {
  protectedRoutes: {
    landing: {
      path: '/',
      component: Landing,
    },
    // wish: {
    //   path: '/plan',
    //   component: Wish,
    // },
    profile: {
      path: '/account',
      component: Profile,
    },
    settings: {
      path: '/menu',
      component: Settings,
    }
  },
  exposedRoutes: {},
}

export const isValidRoute = (pathName) => {
  const {protectedRoutes, exposedRoutes} = routeConfig;
  const allRoutes = {...protectedRoutes, ...exposedRoutes};
  return Object.keys(allRoutes)
    .find((key) => allRoutes[key].path === pathName) === undefined ? false : true;
}