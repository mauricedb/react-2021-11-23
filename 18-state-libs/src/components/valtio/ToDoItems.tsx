import React from 'react';

import { RenderCount, AddNewTodo } from '../shared';

import { addTodo } from './valtioTodoStore';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const ToDoItems = () => (
  <main className="col-10 position-relative">
    <h5 className="m-3">
      To Do List with Valtio
      <RenderCount />
    </h5>
    <AddNewTodo addTodo={addTodo} />
    <ToDoItemsFilter />
    <ToDoItemList />
  </main>
);

export default ToDoItems;
