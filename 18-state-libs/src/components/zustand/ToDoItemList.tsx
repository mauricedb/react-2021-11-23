import React from 'react';

import ToDoItem from './ToDoItem';
import useFilterToDos from './useFilterToDos';

const ToDoItemMemo = React.memo(ToDoItem);

const ToDoItemList = () => {
  const filteredToDos = useFilterToDos();

  return (
    <ul id="todo-items" className="list-group">
      {filteredToDos.map((todo) => (
        <ToDoItemMemo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoItemList;
