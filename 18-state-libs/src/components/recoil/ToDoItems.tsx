import React from 'react';
import { useSetRecoilState } from 'recoil';

import { RenderCount, AddNewTodo } from '../shared';
import { toDoSelector } from './atoms';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const ToDoItems = () => {
  const setFilteredToDos = useSetRecoilState(toDoSelector(NaN));

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with Recoil
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={setFilteredToDos} />
      <ToDoItemsFilter />
      <ToDoItemList />
    </main>
  );
};

export default ToDoItems;
