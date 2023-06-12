/* eslint-disable @typescript-eslint/no-explicit-any */
import { INITIAL_STATE } from './constants';

type Action = { type: 'SET_USER_CREDENTIALS'; payload?: any };

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SET_USER_CREDENTIALS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
