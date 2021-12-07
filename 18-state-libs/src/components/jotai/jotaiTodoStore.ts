import { atom, PrimitiveAtom } from 'jotai';
import { splitAtom } from 'jotai/utils';

import type { Filter, ToDo } from '../../types';

import { getInitialToDos } from '../../initialToDos';

export type ToDoAtom = PrimitiveAtom<ToDo>;

export const toDosAtom = atom(getInitialToDos());
export const toDoAtomsAtom = splitAtom(toDosAtom);

export const filterAtom = atom<Filter>('all');

export const filteredToDoAtomsAtom = atom<ToDoAtom[]>((get) => {
  const filter = get(filterAtom);
  const todoAtoms = get(toDoAtomsAtom);

  switch (filter) {
    case 'all':
      return todoAtoms;
    case 'active':
      return todoAtoms.filter((todoAtom) => !get(todoAtom).isDone);
    case 'done':
      return todoAtoms.filter((todoAtom) => get(todoAtom).isDone);
    default:
      const exhaustiveCheck: never = filter;
      throw new Error(`Unexpected value ${exhaustiveCheck}`);
  }
});
