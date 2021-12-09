import React from 'react';
import { useAtomValue } from 'jotai/utils';

import { filteredToDoAtomsAtom } from './jotaiTodoStore';

import ToDoItem from './ToDoItem';

const ToDoItemList = () => {
  const filteredToDoAtoms = useAtomValue(filteredToDoAtomsAtom);

  return (
    <ul id="todo-items" className="list-group">
      {filteredToDoAtoms.map((toDoAtom) => (
        <ToDoItem key={`${toDoAtom}`} toDoAtom={toDoAtom} />
      ))}
    </ul>
  );
};

export default ToDoItemList;
