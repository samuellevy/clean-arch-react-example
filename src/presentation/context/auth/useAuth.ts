import { useContext, useEffect } from 'react';
import AuthContext from './AuthContext';
import { isJSON } from '~/presentation/utils/isJson';
import { useLocalStorage } from '~/presentation/hooks';

export const useAuth = () => {
  const {
    state: { user, accessToken },
    dispatch,
  } = useContext(AuthContext);

  const { storedValue } = useLocalStorage('auth', {});
  const parsedStoredValue =
    isJSON(String(storedValue)) && JSON.parse(String(storedValue));

  const setAuthenticatedUser = () => {
    const { email, accessToken } = parsedStoredValue;

    dispatch({
      type: 'SET_USER_CREDENTIALS',
      payload: { email, accessToken },
    });
  };

  useEffect(() => {
    if (parsedStoredValue?.accessToken) {
      setAuthenticatedUser();
    }
  }, []);

  const isUserAuthenticated = !!parsedStoredValue?.accessToken;

  return {
    user,
    accessToken,
    dispatch,
    isUserAuthenticated,
  };
};
