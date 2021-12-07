import React from 'react';

import { RenderCount, AddNewTodo } from '../shared';

import useToDoStore from './useToDoStore';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const ToDoItems = () => {
  const addTodo = useToDoStore((state) => state.addTodo);

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with Zustand
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={addTodo} />
      <ToDoItemsFilter />
      <ToDoItemList />
    </main>
  );
};

export default ToDoItems;
