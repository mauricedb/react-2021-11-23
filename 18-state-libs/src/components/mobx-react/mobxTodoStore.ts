import { makeAutoObservable } from 'mobx';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';
import { filterToDos } from '../shared';

class MobxTodoStore {
  private allToDos = getInitialToDos();
  currentFilter: Filter = 'all';

  constructor() {
    // Automatically make properties, objects, arrays, Maps and Sets observable
    makeAutoObservable(this);
  }

  // Computed value
  get filteredToDos() {
    return filterToDos(this.allToDos, this.currentFilter);
  }

  // Actions
  setCurrentFilter = (filter: Filter) => {
    this.currentFilter = filter;
  };

  onToggleDone = (todo: ToDo) => {
    todo.isDone = !todo.isDone;
  };

  addTodo = (todo: ToDo) => {
    this.allToDos.push(todo);
  };
}

const mobxTodoStore = new MobxTodoStore();

export default mobxTodoStore;
