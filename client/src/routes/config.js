import Groups from '../pages/Groups';
import Landing from '../pages/Landing';
import Wishlist from '../pages/WishList';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Settings from '../pages/Setting';

export const routeConfig = {
  protected: {
    landing: {
      path: '/landing',
      component: Landing,
    },
    groups: {
      path: '/group',
      component: Groups,
    },
    wishlist: {
      path: '/wishlist',
      component: Wishlist,
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
  exposed: {},
}