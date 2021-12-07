import { ToDo } from './types';

let id = Date.now();
export const getInitialToDos = (): ToDo[] => {
  return JSON.parse(
    JSON.stringify([
      { id: id++, text: 'Learn useState()', isDone: false },
      { id: id++, text: 'Add useReducer() with useContext()', isDone: true },
      { id: id++, text: 'Global state with Redux', isDone: false },
      { id: id++, text: 'Reactive state using Mobx', isDone: true },
      {
        id: id++,
        text: 'Recoil, a state management library for React',
        isDone: false,
      },
    ])
  );
};
