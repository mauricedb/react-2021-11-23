import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredToDoIdsSelector } from './atoms';
import ToDoItem from './ToDoItem';

const ToDoItemMemo = React.memo(ToDoItem);

const ToDoItemList = () => {
  const filteredToDoIds = useRecoilValue(filteredToDoIdsSelector);

  return (
    <ul id="todo-items" className="list-group">
      {filteredToDoIds.map((id) => (
        <ToDoItemMemo key={id} id={id} />
      ))}
    </ul>
  );
};

export default ToDoItemList;
