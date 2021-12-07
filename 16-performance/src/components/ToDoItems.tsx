import React, { useState } from 'react';
import { getInitialToDos } from '../initialToDos';
import { AddNewTodo } from './AddNewTodo';
import { CheckPrimeNumbers } from './CheckPrimeNumbers';
import { filterToDos } from './filterToDos';
import { RenderCount } from './RenderCount';

import { ToDoItemList } from './ToDoItemList';
import { ToDoItemsFilter } from './ToDoItemsFilter';

const initialToDos = getInitialToDos();

export function ToDoItems() {
  const [allToDos, setAllToDos] = useState(initialToDos);
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');

  const filteredToDos = filterToDos(allToDos, currentFilter);

  const onLabelToDo = (todo: ToDo, text: string): void => {
    setAllToDos(
      allToDos.map((item) => (item.id === todo.id ? { ...item, text } : item))
    );
  };

  const onToggleDone = (todo: ToDo): void =>
    setAllToDos(
      allToDos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );

  const addTodo = (newTodo: ToDo) => setAllToDos([...allToDos, newTodo]);

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={addTodo} />
      <ToDoItemsFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ToDoItemList
        todoItems={filteredToDos}
        onLabelToDo={onLabelToDo}
        onToggleDone={onToggleDone}
      />
      <CheckPrimeNumbers />
    </main>
  );
}
