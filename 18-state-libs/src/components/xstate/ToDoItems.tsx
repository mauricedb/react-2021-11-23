import { useContext } from 'react';

import { RenderCount, AddNewTodo } from '../shared';

import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';
import { TodosContext } from './TodosContextProvider';

const ToDoItems = () => {
  const { send } = useContext(TodosContext);

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with XState
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={(newTodo) => send({ type: 'ADD_TODO', newTodo })} />
      <ToDoItemsFilter />
      <ToDoItemList />
    </main>
  );
};

export default ToDoItems;
