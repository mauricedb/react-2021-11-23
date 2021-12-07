import { useSnapshot } from 'valtio';
import { RenderCount, ToDoFilterButton } from '../shared';

import { setCurrentFilter, toDoState } from './valtioTodoStore';

const ToDoItemsFilter = () => {
  const { currentFilter } = useSnapshot(toDoState);

  return (
    <ul id="filter" className="list-group mb-3">
      <li className="list-group-item">
        <RenderCount />
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="all"
          setFilterTo={setCurrentFilter}
        >
          All
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="active"
          setFilterTo={setCurrentFilter}
        >
          Active
        </ToDoFilterButton>
        <ToDoFilterButton
          currentFilter={currentFilter}
          filter="done"
          setFilterTo={setCurrentFilter}
        >
          Done
        </ToDoFilterButton>
      </li>
    </ul>
  );
};

export default ToDoItemsFilter;
