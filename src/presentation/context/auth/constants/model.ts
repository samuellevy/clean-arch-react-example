import { SetUserCredentialsAction } from './actions';

export type UserType = {
  name: string;
  email: string;
};

export type InitialStateType = {
  user: UserType;
  accessToken: string;
};

export const INITIAL_STATE: InitialStateType = {
  user: {} as UserType,
  accessToken: '',
};

export type AuthContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<SetUserCredentialsAction>;
};
