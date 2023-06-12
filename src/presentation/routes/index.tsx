import { Suspense } from 'react';

// import { useApp } from '../context';
import { privateRoutes, publicRoutes } from './routes';
import { MapAllowedRoutes } from './mapAllowedRoutes';
import { useAuth } from '../context/auth';

function Routes() {
  const { isUserAuthenticated } = useAuth();

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
      <MapAllowedRoutes
        routes={isUserAuthenticated ? privateRoutes : publicRoutes}
      />
    </Suspense>
  );
}

export default Routes;
