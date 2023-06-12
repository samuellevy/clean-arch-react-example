import { SetEventsAction } from './actions';

export type InitialStateType = {
  title: string;
  description: string;
  languages: string[];
};

export const INITIAL_STATE: InitialStateType = {
  title: '',
  description: '',
  languages: [],
};

export type EventsContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<SetEventsAction>;
};
