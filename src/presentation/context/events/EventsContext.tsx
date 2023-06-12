import React, { createContext, useReducer } from 'react';

import { EventsContextType, INITIAL_STATE } from './constants';
import { reducer } from './reducer';

export const EventsContext = createContext<EventsContextType>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});

interface IAuthProvider {
  children: React.ReactNode;
}

export const EventsProvider = ({ children }: IAuthProvider) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <EventsContext.Provider value={{ state, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
