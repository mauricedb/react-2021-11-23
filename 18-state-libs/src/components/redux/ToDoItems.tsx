import React from 'react';
import { useDispatch } from 'react-redux';

import { RenderCount, AddNewTodo } from '../shared';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

import { AppDispatch } from './reduxStore';
import { addTodo } from './todosSlice';

const ToDoItems = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with Redux Toolkit
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={(newTodo) => dispatch(addTodo(newTodo))} />
      <ToDoItemsFilter />
      <ToDoItemList />
    </main>
  );
};

export default ToDoItems;
