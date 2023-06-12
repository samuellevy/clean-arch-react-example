import React, { createContext, useReducer } from 'react';

import { AuthContextType, INITIAL_STATE } from './constants';
import { reducer } from './reducer';

export const AuthContext = createContext<AuthContextType>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
