import React, { useContext } from 'react';
import { useSelector } from '@xstate/react';

import ToDoItem from './ToDoItem';
import { TodosContext } from './TodosContextProvider';

const ToDoItemMemo = React.memo(ToDoItem);

const ToDoItemList = () => {
  const todosActor = useContext(TodosContext);
  const filteredToDos = useSelector(
    todosActor,
    (state) => state.context.filteredToDos
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
