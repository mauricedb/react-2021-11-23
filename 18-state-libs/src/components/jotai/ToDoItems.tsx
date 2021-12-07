import { useUpdateAtom } from 'jotai/utils';

import { RenderCount, AddNewTodo } from '../shared';
import { toDosAtom } from './jotaiTodoStore';

import ToDoItemList from './ToDoItemList';
import ToDoItemsFilter from './ToDoItemsFilter';

const ToDoItems = () => {
  const setTodos = useUpdateAtom(toDosAtom);

  return (
    <main className="col-10 position-relative">
      <h5 className="m-3">
        To Do List with Jotai
        <RenderCount />
      </h5>
      <AddNewTodo addTodo={(toDo) => setTodos((toDos) => [...toDos, toDo])} />
      <ToDoItemsFilter />
      <ToDoItemList />
    </main>
  );
};

export default ToDoItems;
