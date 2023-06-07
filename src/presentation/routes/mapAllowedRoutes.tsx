import { Route, Routes } from 'react-router-dom';
import { IRoute } from './routes';

interface IRoutes {
  routes: IRoute[];
}

export function MapAllowedRoutes({ routes }: IRoutes) {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, component: Component, ...rest } = route;

        return (
          <Route {...rest} key={path} path={path} element={<Component />} />
        );
      })}
    </Routes>
  );
}

export default MapAllowedRoutes;
