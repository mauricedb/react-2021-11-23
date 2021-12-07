import { useCallback, useReducer } from 'react';
import { getInitialToDos } from '../../initialToDos';
import { Filter, ToDo } from '../../types';
import { RenderCount, AddNewTodo } from '../shared';

import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';
import { reducer } from './reducer';

const initialToDos = getInitialToDos();

export default function ToDoItems() {
  const [{ currentFilter, filteredToDos }, dispatch] = useReducer(reducer, {
    currentFilter: 'all',
    allToDos: initialToDos,
    filteredToDos: initialToDos,
  });

  const onToggleDone = useCallback(
    (todo: ToDo) => dispatch({ type: 'TOGGLE_TODO', payload: todo.id }),
    []
  );

  const addTodo = useCallback(
    (newTodo: ToDo) => dispatch({ type: 'ADD_TODO', payload: newTodo }),
    []
  );

  const setCurrentFilter = useCallback(
    (filter: Filter) => dispatch({ type: 'SET_FILTER', payload: filter }),
    []
  );

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with useReducer()
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={addTodo} />
      <ToDoItemsFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ToDoItemList todoItems={filteredToDos} onToggleDone={onToggleDone} />
    </main>
  );
}
