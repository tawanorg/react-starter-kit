import HomePage from 'containers/HomePage/Loadable';
import Organisation from 'containers/Organisation/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default [
  {
    name: 'HomePage',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Organisation',
    path: '/organisation',
    component: Organisation,
  },
  {
    name: 'Page Not Found',
    path: '',
    component: NotFoundPage,
  }
]
