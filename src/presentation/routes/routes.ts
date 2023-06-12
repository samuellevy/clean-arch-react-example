import { lazy } from 'react';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

export interface IRoute {
  component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  title?: string;
  exact?: boolean;
}

export const privateRoutes: IRoute[] = [
  {
    component: Home,
    path: '/',
    title: 'Home',
  },
];

export const publicRoutes: IRoute[] = [
  {
    component: Login,
    path: '/',
    title: 'Login',
  },
];

export default {
  privateRoutes,
  publicRoutes,
};
