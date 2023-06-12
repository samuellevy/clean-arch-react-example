export type SetUserCredentialsAction = {
  type: 'SET_USER_CREDENTIALS';
  payload?: { email: string; accessToken: string };
};
