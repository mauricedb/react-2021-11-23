import React from 'react';
import { ToDoItem } from './ToDoItem';

interface Props {
  todoItems: ToDo[];
  onToggleDone: (todo: ToDo) => void;
}

export function ToDoItemList({ todoItems, onToggleDone }: Props) {
  return (
    <ul id="todo-items" className="list-group">
      {todoItems.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onToggleDone={onToggleDone} />
      ))}
    </ul>
  );
}
