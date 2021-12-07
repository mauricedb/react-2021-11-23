import create from 'zustand';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';

export type ToDoStore = {
  allToDos: ToDo[];
  currentFilter: Filter;
  setCurrentFilter: (filter: Filter) => void;
  onToggleDone: (todo: ToDo) => void;
  addTodo: (todo: ToDo) => void;
};

const useToDoStore = create<ToDoStore>((set) => ({
  allToDos: getInitialToDos(),
  currentFilter: 'all',

  setCurrentFilter: (filter: Filter) => set(() => ({ currentFilter: filter })),
  onToggleDone: (todo: ToDo) =>
    set(({ allToDos }) => ({
      allToDos: allToDos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, isDone: !item.isDone };
        } else {
          return item;
        }
      }),
    })),
  addTodo: (todo: ToDo) =>
    set(({ allToDos }) => ({ allToDos: [...allToDos, todo] })),
}));

export default useToDoStore;
