import React, { useCallback, useMemo, useState } from 'react';
import { getInitialToDos } from '../initialToDos';
import { AddNewTodo } from './AddNewTodo';
import { filterToDos } from './filterToDos';

import { ToDoItemList } from './ToDoItemList';
import { ToDoItemsFilter } from './ToDoItemsFilter';

const initialToDos = getInitialToDos();

export function ToDoItems() {
  const [allToDos, setAllToDos] = useState(initialToDos);
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');

  const filteredToDos = useMemo(
    () => filterToDos(allToDos, currentFilter),
    [allToDos, currentFilter]
  );

  const onToggleDone = useCallback(
    (todo) =>
      setAllToDos(
        allToDos.map((item) =>
          item.id === todo.id ? { ...item, isDone: !item.isDone } : item
        )
      ),
    [allToDos]
  );

  const addTodo = useCallback(
    (newTodo) => setAllToDos([...allToDos, newTodo]),
    [allToDos]
  );

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">To Do List</h5>
      <AddNewTodo addTodo={addTodo} />
      <ToDoItemsFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ToDoItemList todoItems={filteredToDos} onToggleDone={onToggleDone} />
    </main>
  );
}
