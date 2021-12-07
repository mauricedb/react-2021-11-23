import React from 'react';
import { ToDo } from '../../types';
import ToDoItem from './ToDoItem';

const ToDoItemMemo = React.memo(ToDoItem);

interface Props {
  todoItems: ToDo[];
  onToggleDone: (todo: ToDo) => void;
}

function ToDoItemList({ todoItems, onToggleDone }: Props) {
  return (
    <ul id="todo-items" className="list-group">
      {todoItems.map((todo) => (
        <ToDoItemMemo key={todo.id} todo={todo} onToggleDone={onToggleDone} />
      ))}
    </ul>
  );
}

export default ToDoItemList;
