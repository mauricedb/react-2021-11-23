import { ToDo } from '../../types';
import { filterToDos } from '../shared';
import useToDoStore, { ToDoStore } from './useToDoStore';

const getAllToDos = (state: ToDoStore) => state.allToDos;
const getCurrentFilter = (state: ToDoStore) => state.currentFilter;

const useFilterToDos = (): ToDo[] => {
  const allToDos = useToDoStore(getAllToDos);
  const currentFilter = useToDoStore(getCurrentFilter);

  return filterToDos(allToDos, currentFilter);
};

export default useFilterToDos;
