import React from 'react';
import { ToDoItem } from './ToDoItem';

interface Props {
  todoItems: ToDo[];
  onLabelToDo: (todo: ToDo, text: string) => void;
  onToggleDone: (todo: ToDo) => void;
}

export function ToDoItemList({ todoItems, onLabelToDo, onToggleDone }: Props) {
  return (
    <ul id="todo-items" className="list-group">
      {todoItems.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onLabelToDo={onLabelToDo}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
}
