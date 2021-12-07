import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
} from 'recoil';

import { Filter, ToDo } from '../../types';
import { getInitialToDos } from '../../initialToDos';
import { filterToDos } from '../shared';

const initialToDos = getInitialToDos();
const allToDoIds = initialToDos.map((todo) => todo.id);

const allToDoIdsState = atom<number[]>({
  key: 'allToDoIdsState',
  default: allToDoIds,
});

const toDoState = atomFamily<ToDo, number>({
  key: 'toDoState',
  default: (id) => initialToDos.find((todo) => todo.id === id)!,
});

export const filterState = atom<Filter>({
  key: 'filterState',
  default: 'all',
});

export const filteredToDoIdsSelector = selector<number[]>({
  key: 'filteredToDosState',
  get: ({ get }) => {
    const filter = get(filterState);
    const allToDoIds = get(allToDoIdsState);
    const allToDos = allToDoIds.map((id) => get(toDoState(id)));

    return filterToDos(allToDos, filter).map((todo) => todo.id);
  },
});

export const toDoSelector = selectorFamily<ToDo, number>({
  key: 'toDoSelector',
  get:
    (id) =>
    ({ get }) => {
      return get(toDoState(id));
    },
  set:
    () =>
    ({ set }, todo) => {
      if (!(todo instanceof DefaultValue)) {
        set(toDoState(todo.id), todo);
        set(allToDoIdsState, (allToDos) => {
          if (!allToDos.includes(todo.id)) {
            return [...allToDos, todo.id];
          } else {
            return allToDos;
          }
        });
      }
    },
});
