import Groups from '../pages/Groups';
import Landing from '../pages/Landing';
import Wish from '../pages/Wish';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Settings from '../pages/Setting';

export const routeConfig = {
  protectedRoutes: {
    landing: {
      path: '/landing',
      component: Landing,
    },
    groups: {
      path: '/group',
      component: Groups,
    },
    wish: {
      path: '/wish',
      component: Wish,
    },
    addWishes: {
      path: '/wish/add',
      component: Wish,
    },
    profile: {
      path: '/account',
      component: Profile,
    },
    search: {
      path: '/search',
      component: Search,
    },
    settings: {
      path: '/setting',
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