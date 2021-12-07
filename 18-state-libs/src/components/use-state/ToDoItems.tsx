import React, { useCallback, useMemo, useState } from 'react';
import { getInitialToDos } from '../../initialToDos';
import { Filter } from '../../types';
import { RenderCount, AddNewTodo, filterToDos } from '../shared';
import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const initialToDos = getInitialToDos();
const AddNewTodoMemo = React.memo(AddNewTodo);
const ToDoItemsFilterMemo = React.memo(ToDoItemsFilter);
const ToDoItemListMemo = React.memo(ToDoItemList);

export default function ToDoItems() {
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
      <h5 className="m-3">
        To Do List with useState()
        <RenderCount />
      </h5>
      <AddNewTodoMemo addTodo={addTodo} />
      <ToDoItemsFilterMemo
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ToDoItemListMemo todoItems={filteredToDos} onToggleDone={onToggleDone} />
    </main>
  );
}
