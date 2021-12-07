import React from 'react';
import { observer } from 'mobx-react-lite';

import { RenderCount, AddNewTodo } from '../shared';

import mobxTodoStore from './mobxTodoStore';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const ToDoItems = observer(() => (
  <main className="col-10 position-relative">
    <h5 className="m-3">
      To Do List with MobX
      <RenderCount />
    </h5>
    <AddNewTodo addTodo={mobxTodoStore.addTodo} />
    <ToDoItemsFilter />
    <ToDoItemList />
  </main>
));

export default ToDoItems;
