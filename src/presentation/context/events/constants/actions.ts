export type SetEventsAction = {
  type: 'SET_EVENTS';
  payload?: { title: string; description: string; languages: string[] };
};
