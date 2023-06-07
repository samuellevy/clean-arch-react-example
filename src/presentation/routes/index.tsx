import { Suspense } from 'react';

// import { useApp } from '../context';
import { privateRoutes, publicRoutes } from './routes';
import { MapAllowedRoutes } from './mapAllowedRoutes';

function Routes() {
  // const { isUserAuthenticated } = useApp();

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '300px',
          }}
        >
          <p>Redirecionando...</p>
        </div>
      }
    >
      <MapAllowedRoutes routes={[...privateRoutes, ...publicRoutes]} />
    </Suspense>
  );
}

export default Routes;
