import React from 'react';
import { useSelector } from 'react-redux';

import { ToDo } from '../../types';
import { filterToDos } from '../shared';
import { RootState } from './reduxStore';
import ToDoItem from './ToDoItem';

const ToDoItemMemo = React.memo(ToDoItem);

const ToDoItemList = () => {
  const filteredToDos = useSelector<RootState, ToDo[]>((state) =>
    filterToDos(state.allToDos, state.currentFilter)
  );

  return (
    <ul id="todo-items" className="list-group">
      {filteredToDos.map((todo) => (
        <ToDoItemMemo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoItemList;
