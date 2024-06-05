import { useRoutes } from 'react-router-dom';

import Home from './views/Home';
import Explore from './views/Explore';
import ExploreDetail from './views/ExploreDetail';
import Account from './views/Account';

export const routes = [
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/explore/:id',
    element: <ExploreDetail />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/',
    element: <Home />,
  },
];

export default () => useRoutes(routes);