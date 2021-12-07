import React from 'react';
import { useSnapshot } from 'valtio';

import ToDoItem from './ToDoItem';
import { derivedToDoState } from './valtioTodoStore';

const ToDoItemMemo = React.memo(ToDoItem);

const ToDoItemList = () => {
  const { filteredToDos } = useSnapshot(derivedToDoState);

  return (
    <ul id="todo-items" className="list-group">
      {filteredToDos.map((todo) => (
        <ToDoItemMemo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoItemList;
