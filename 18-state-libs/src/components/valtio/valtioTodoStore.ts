import { proxy } from 'valtio';
import { derive } from 'valtio/utils';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';
import { filterToDos } from '../shared';

type ToDoStore = {
  allToDos: ToDo[];
  currentFilter: Filter;
};

export const toDoState = proxy<ToDoStore>({
  allToDos: getInitialToDos(),
  currentFilter: 'all',
});

export const derivedToDoState = derive({
  filteredToDos: (get) => {
    const { allToDos, currentFilter } = get(toDoState);
    return filterToDos(allToDos, currentFilter);
  },
});

export const toggleDone = (toDo: ToDo) => {
  const item = toDoState.allToDos.find((t) => t.id === toDo.id);
  if (item) {
    item.isDone = !item.isDone;
  }
};

export const addTodo = (toDo: ToDo) => {
  toDoState.allToDos.push(toDo);
};

export const setCurrentFilter = (filter: Filter) => {
  toDoState.currentFilter = filter;
};
