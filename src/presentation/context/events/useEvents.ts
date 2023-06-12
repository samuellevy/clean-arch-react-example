import { useContext, useEffect } from 'react';

export const useEvents = () => {
  const {
    state: {},
    dispatch,
  } = useContext(AuthContext);

  return {
    dispatch,
  };
};
